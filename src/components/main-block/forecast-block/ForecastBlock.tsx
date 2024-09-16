import { useGetWeatherData } from "src/hooks/useGetWeatherData";
import { SideInformation } from "../side-information/SideInformation";
import { DailyForecast } from "../daily-forecast/DailyForecast";
import { useDispatch } from "react-redux";
import style from "./forecast-block.module.scss";

export const ForecastBlock = () => {
  const dispatch = useDispatch();
  const { weatherData } = useGetWeatherData();

  const tempNow = Math.trunc(weatherData.current.temperature_2m);
  const situation =
    weatherData.current.rain >= 0.4
      ? "Дождь"
      : weatherData.current.snowfall >= 0.4
      ? "Снегопад"
      : "Чистый воздух";

  return (
    <section className={style.forecastBlock}>
      <p className={style.temperatureNow}>
        {tempNow}°
        <button
          className={style.detail}
          onClick={() => dispatch({ type: "change" })}
        >
          More
        </button>
      </p>
      <p className={style.condition}>{situation}</p>
      <p className={style.feelsLike}>
        По ощущению: {tempNow < 0 ? tempNow - 6 : tempNow + 6}°
      </p>
      <div className={style.flexContainer}>
        <SideInformation />
        <DailyForecast />
      </div>
    </section>
  );
};
