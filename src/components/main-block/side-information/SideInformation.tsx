import { useGetWeatherData } from "src/hooks/useGetWeatherData";
import style from "./side-information.module.scss";

export const SideInformation = () => {
  const {
    weatherData: {
      current,
      current_units,
      daily: { uv_index_max: uv },
    },
  } = useGetWeatherData();

  const sections = ["Ветер", "Видимость", "Влажность", "Барометр", "УФ-индекс"];
  const values = [
    current.wind_speed_10m,
    current.visibility,
    current.relative_humidity_2m,
    current.surface_pressure,
    Math.max(...uv),
  ];

  const units = [
    current_units.wind_speed_10m,
    current_units.visibility,
    current_units.relative_humidity_2m,
    current_units.surface_pressure,
    "",
  ];

  return (
    <div className={style.flexContainer}>
      {sections.map((item, index) => (
        <div className={style.point} key={index}>
          <p className={style.pointName}>{item}</p>
          <p className={style.meaning}>
            {values[index]} {units[index]}
          </p>
        </div>
      ))}
    </div>
  );
};
