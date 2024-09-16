import { useGetWeatherData } from "./useGetWeatherData";
import React from "react";

export const useDailyForecastData = () => {
  const { weatherData } = useGetWeatherData();
  const weekday = React.useRef<HTMLDivElement>(null);

  const paramByDay = {
    days: weatherData.daily.time,
    maxTemp: weatherData.daily.temperature_2m_max,
    minTemp: weatherData.daily.temperature_2m_min,
    probOfPrec: weatherData.daily.precipitation_probability_max,
  };

  const getDate = (index: number) => {
    const weekday = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    const [date, dayNumber] = [
      new Date(paramByDay.days[index]).getDay(),
      new Date(paramByDay.days[index]).getDate(),
    ];
    return [weekday[date], dayNumber];
  };

  const scrollFn = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!weekday.current) return;

    if (event.deltaY < 0) {
      weekday.current.scrollBy({ top: 0, left: 50 });
    } else {
      weekday.current.scrollBy({ top: 0, left: -50 });
    }
  };
  return { getDate, scrollFn, weekday, paramByDay };
};
