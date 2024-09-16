import { weatherService } from "../services/weather.service";
import { useQuery } from "@tanstack/react-query";

export const useQueryWeatherData = () => {
  return useQuery({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const city = localStorage.getItem("city") || "Moscow";
      return await weatherService.getWeather(city);
    },
    retry: 0,
  });
};
