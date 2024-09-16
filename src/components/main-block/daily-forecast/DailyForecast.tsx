import { useDailyForecastData } from "src/hooks/useDailyForecastData";
import style from "./daily-forecast.module.scss";
import obl from "src/assets/obl.svg";
import sun from "src/assets/sun.svg";

export const DailyForecast = () => {
  const { getDate, paramByDay, scrollFn, weekday } = useDailyForecastData();

  return (
    <div
      ref={weekday}
      className={style.weekday}
      onWheel={(event) => scrollFn(event)}
    >
      {paramByDay.days.map((_, index) => {
        const isSolar = paramByDay.probOfPrec[index] >= 35;
        return (
          <div key={index} className={style.card}>
            <p className={style.date}>{getDate(index).join(" ")}</p>
            <img className={style.img} src={isSolar ? obl : sun} />
            <p className={style.temperature}>
              {Math.trunc(paramByDay.maxTemp[index])}° /{" "}
              {Math.trunc(paramByDay.minTemp[index])}°
            </p>
            <p className={style.sky}>
              {isSolar ? "Возможные осадки" : "Без осадков"}
            </p>
          </div>
        );
      })}
    </div>
  );
};
