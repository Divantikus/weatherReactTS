import { LocationData, WeatherData } from "./types";
import axios from "axios";

class Weather {
  private async getCord(city: string) {
    const locationApiKey = "a9b87d4c2b1242c88a43ab7754fa6dbe";
    const locationURL = `https://api.geoapify.com/v1/geocode/search?text=${city}%20&format=json&apiKey=${locationApiKey}
      `;
    const axiosRes = await axios.get<LocationData>(locationURL);

    if (!axiosRes.data.results.length)
      throw new Error("The locality was not found");

    const [lon, lat] = [
      axiosRes.data.results[0].lon,
      axiosRes.data.results[0].lat,
    ];
    return { lat, lon };
  }

  async getWeather(city: string) {
    const { lat, lon } = await this.getCord(city);
    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=surface_pressure,temperature_2m,is_day,rain,snowfall,visibility,wind_speed_10m,relative_humidity_2m&wind_speed_unit=ms&hourly=temperature_2m,rain&daily=precipitation_probability_max,uv_index_max,temperature_2m_max,temperature_2m_min,et0_fao_evapotranspiration&timezone=Europe%2FMoscow`;
    const axiosRes = await axios.get<WeatherData>(weatherURL);
    return axiosRes.data;
  }
}

export const weatherService = new Weather();
