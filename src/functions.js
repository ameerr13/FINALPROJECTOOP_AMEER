const apiKey = "9fd7a449d055dba26a982a3220f32aa2";
      const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

      const citySelect = document.getElementById("city-select");
      const weatherInfo = document.getElementById("weather-info");

      citySelect.addEventListener("change", () => {
        const city = citySelect.value;
        const url = `${baseUrl}${city}&appid=${apiKey}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const name = data.name;
            const temp = Math.round(data.main.temp - 273.15);
            const weather = data.weather[0].main;
            const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            const html = `
        <img src="${icon}" alt="${weather}">
        <h2>${name}</h2>
        <p>${temp}&deg;C</p>
        <p>${weather}</p>
      `;

            weatherInfo.innerHTML = html;
          })
          .catch((error) => console.error(error));
      });