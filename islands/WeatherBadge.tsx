

export default function WeatherBadge(weatherData) {

    // console.log(typeofweatherData.weather.data.main)
    return (    
        <div class="p-2">
            {
                Object.keys(weatherData.weather.data.main).map((key, value) => {    
                    return <li>{key}: {value}</li>
                })
            }
        </div>
    )
}