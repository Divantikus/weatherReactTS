import { useQueryClient } from "@tanstack/react-query";
import { WeatherData } from "src/services/types";

export const useGetWeatherData = () => {
  const queryClient = useQueryClient();
  const weatherData = queryClient.getQueryData(["weatherData"]) as WeatherData;

  return { queryClient, weatherData };
};
