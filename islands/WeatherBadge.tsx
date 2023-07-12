

export default function WeatherBadge(weatherData: { weather: { data: { main: {}; }; }; }) {

    return (    
        <div class="p-2">
            <ul className='weather-info-items-list'>
                {
                    Object.keys(weatherData.weather.data.main).map((propertyName) => {    
                        return <li>{propertyName}: {weatherData.weather.data.main[propertyName]}</li>
                    })
                }
            </ul>
        </div>
    )
}