import { useGetWeatherData } from "./useGetWeatherData";
import style from "src/components/main-block/main-block.module.scss";

export const useMainBlockData = () => {
  const { weatherData, queryClient } = useGetWeatherData();

  const city = localStorage.getItem("city");
  const isRain = weatherData.current.rain >= 0.1;
  const isSnowfall = weatherData.current.snowfall >= 0.1;
  const preci = isRain || isSnowfall;
  const placeholder = city
    ? city[0].toUpperCase() + city.slice(1)
    : "Строка поиска";
  const inputStyle = city
    ? style.inputCity
    : `${style.inputCity} ${style.inputNewCity}`;

  return { city, preci, placeholder, inputStyle, queryClient };
};
