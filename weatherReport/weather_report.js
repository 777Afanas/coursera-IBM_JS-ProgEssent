
function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '630f52faa7ee434510f43191450a8b40';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo') ;
        weatherInfo.innerHTML = `<h2>Weatner in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &#8451;</p>     
                               <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Ошибка при получении погоды:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Не удалось получить погоду. Пожалуйста, попробуйте снова1.</p>`;
    });
} 

function showGeocoding(event) {
    event.preventDefault();
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = '630f52faa7ee434510f43191450a8b40';  
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metriс`;
 
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo') ;
        weatherInfo.innerHTML = `<h2>Weatner in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &#8451;</p>     
                               <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Ошибка при получении погоды:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Не удалось получить погоду. Пожалуйста, попробуйте снова.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails); 
document.getElementById('weatherFormGeo').addEventListener('submit', showGeocoding);



