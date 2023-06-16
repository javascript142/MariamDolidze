async function weatherForecast() {
    let longitute = document.getElementById("longitute").value;
    let latitute = document.getElementById("latitute").value;
    let result = document.getElementById("result");

    longitute = parseFloat(longitute);
    latitute = parseFloat(latitute);

    let apiData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitute}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, {
        method: "GET",
    })

    let apiDataInJson = await apiData.json();

    result.innerHTML = `
    <p id="weatherInfo"> temperature longitute ${longitute} and at latitute of ${latitute} is ${apiDataInJson.current_weather.temperature} this </p>
    `

} 


async function weathertbilisi(){
    let tbilisi = document.getElementById("tbilisi").value;
    let result = document.getElementById("result");

    tbilisi = parseFloat(tbilisi);
    let apidata = await fetch(`https://geocode.maps.co/search?q=${tbilisi}`,{
        method: 'GET',
    });

    let apiDataInJson = await apiData.json();
    result.innerHTML = `<h1> weather tbilisi is  ${apiDataInJson}</h1>`


    if (apiDataInJson > 20) {
         `<p> wind speed is ${apiDataInJson}</p> <i>`
        }
        
    }