function getWeather() {
    const apiKey = 'ebad3c091aab0dc188af3b883e7102a5';
    const city = document.getElementById('search-input').value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} &#8451;</p>
        <p>Description: ${description}</p>
    `;
}
