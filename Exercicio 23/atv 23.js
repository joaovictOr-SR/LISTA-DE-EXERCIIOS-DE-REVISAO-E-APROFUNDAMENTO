// João Victor Santos Ruas

 function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e7704bc895b4a8d2dfd4a29d404285b6';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                const weatherInfo = `
                    <h2>${city}</h2>
                    <p><strong>Clima:</strong> ${weatherDescription}</p>
                    <p><strong>Temperatura:</strong> ${temperature}°C</p>
                    <p><strong>Umidade:</strong> ${humidity}%</p>
                    <p><strong>Velocidade do Vento:</strong> ${windSpeed} m/s</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherInfo').innerHTML = `<p>Cidade não encontrada. Verifique se o nome está correto.</p>`;
            }
        })
        .catch(error => console.log('Erro ao obter dados do clima:', error));
}
