window.addEventListener('load', () => {
    let long;
    let lat;
    let temeperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = `http://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}https://api.darksky.net/forecast/e6dc2c2ae58130fe3ba7d9ea94d7a8ac/${lat},${long}`;
            fetch(api)
                .then(Response => {
                    return Response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, icon } = data.currently;

                    //set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temeperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    //formula for celsius
                    let celsius = (temperature - 32) * (5 / 9);

                    //set Icon
                    setIcons(icon, document.querySelector('.icon'));

                    // /change temperature to celsius to farenheit
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === "F") {
                            temperatureSpan.textContent = 'C';
                            temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = 'F';
                            temperatureDegree.textContent = temperature;
                        }
                    });
                });
        });
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: 'black' });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});