const API_KEY = 'YOUR_API_KEY';  // 네 키로 바꿔
const city = 'Seoul';  // 나중에 현재 위치로 바꿔줄 수도 있음

async function getWeather() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await res.json();
  const temp = data.main.temp;
  const weather = data.weather[0].main;

  document.getElementById("weather").innerHTML = `현재 온도: ${temp}°C (${weather})`;

  suggestOutfit(temp, weather);
}

function suggestOutfit(temp, weather) {
  let outfit = "";

  if (temp >= 28) {
    outfit = "민소매, 반팔, 반바지, 린넨 옷";
  } else if (temp >= 23) {
    outfit = "반팔, 얇은 셔츠, 면바지";
  } else if (temp >= 17) {
    outfit = "긴팔 티, 가디건, 얇은 니트";
  } else if (temp >= 12) {
    outfit = "재킷, 니트, 후드티";
  } else if (temp >= 6) {
    outfit = "코트, 기모 옷, 히트텍";
  } else {
    outfit = "패딩, 목도리, 내복";
  }

  // 날씨 변수 보정
  if (weather.includes("Rain")) outfit += " (우산 필수!)";
  if (weather.includes("Snow")) outfit += " (두꺼운 외투 + 방한 용품)";
  
  document.getElementById("outfit").innerText = `추천 옷차림: ${outfit}`;
}

getWeather();
