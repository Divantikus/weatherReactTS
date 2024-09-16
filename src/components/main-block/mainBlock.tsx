import { useMainBlockData } from "src/hooks/useMainBlockData";
import { ForecastBlock } from "./forecast-block/ForecastBlock";
import { asideSelector } from "src/store/store.js";
import { useDispatch } from "react-redux";
import React from "react";
import style from "./main-block.module.scss";
import sun from "src/assets/sun.svg";
import obl from "src/assets/obl.svg";

export const MainBlock = () => {
  const dispatch = useDispatch();
  const asideIsOn = asideSelector((state) => state.isOn);
  const { city, placeholder, preci, inputStyle, queryClient } =
    useMainBlockData();

  const cityChoosing = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!event) return;

    const newCity = event.currentTarget.value;

    if (event.key === "Enter" && newCity !== city) {
      dispatch({ type: "setOnFalse" });
      localStorage.setItem("city", newCity);
      queryClient.refetchQueries({ queryKey: ["weatherData"] });
    }
  };

  return (
    <section
      className={`${asideIsOn ? style.mainBlockOFF : style.mainBlock} ${
        preci ? style.mainBlockGrayBg : ""
      }`}
    >
      <img
        src={preci ? obl : sun}
        alt={preci ? "Облако" : "Солнце"}
        className={asideIsOn ? style.imgOFF : style.img}
      />
      <input
        type="text"
        className={inputStyle}
        placeholder={placeholder}
        onKeyDown={(event) => cityChoosing(event)}
      />
      <ForecastBlock />
    </section>
  );
};
