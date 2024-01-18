
function getData()
{
    const city = search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0fa9ebae3cmsh524a1994e11af3ap13953ajsn63f83424600e',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp.innerHTML = response.temp;
            ws.innerHTML = response.wind_speed;
            hmdty.innerHTML = response.humidity

        })
        .catch(err => console.error(err));
}