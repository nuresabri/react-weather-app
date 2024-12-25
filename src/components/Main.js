import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import '../styles/components/CurrentWeather.scss';
import Forecast from "./Forecast";
import WeatherContext from "../context/weather.context";
import Loader from "./Loader";
import { useContext } from "react";

function Main() {
    const { loading, currentWeather, dailyForecast, hourlyForecast} = useContext(WeatherContext);

    return (
        <div className = 'Main'>
            {loading ? (
            <Loader />
            ) : (
                <>
                <CurrentWeather data={currentWeather} />
                <Forecast 
                    type='hourly' 
                    title ='HOURLY FORECAST' 
                    data={hourlyForecast}
                />
                <Forecast 
                    type='daily' 
                    title = '21 DAYS FORECAST' 
                    data={dailyForecast}
                />
            </>
            )}
        </div>
    )
}

export default Main