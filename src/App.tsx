import { useQueryWeatherData } from "./hooks/useQueryWeatherData.ts";
import { asideSelector } from "./store/store.ts";
import { MainBlock } from "./components/main-block/mainBlock.tsx";
import { Modal } from "./components/main-block/modal/Modal.tsx";
import { Aside } from "./components/aside/Aside.tsx";
import style from "./index.module.scss";

export const App = () => {
  const {
    isError,
    isLoading,
    isFetching,
    data: weatherData,
  } = useQueryWeatherData();
  const asideIsOn = asideSelector((state) => state.isOn);

  if (isError) {
    localStorage.setItem("city", "Москва");
    return (
      <Modal>
        <h2 className={style.errorTitle}>
          Введён некорректный адрес или произошла ошибка на сервере
          <br />
          Перезагрузите страницу
        </h2>
      </Modal>
    );
  }

  return (
    <main className={asideIsOn ? style.mainAsideOn : style.mainAsideOFF}>
      {weatherData && !isFetching && !isError && <MainBlock />}
      {asideIsOn && <Aside />}
      {(isLoading || isFetching) && (
        <Modal>
          <h1 className={style.sorryTitle}>Загрузка...</h1>
        </Modal>
      )}
    </main>
  );
};
