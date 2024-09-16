export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: "iso8601";
    interval: "seconds";
    surface_pressure: "hPa";
    temperature_2m: "°C";
    is_day: "";
    rain: "mm";
    snowfall: "cm";
    visibility: "m";
    wind_speed_10m: "m/s";
    relative_humidity_2m: "%";
  };
  current: {
    time: string;
    interval: number;
    surface_pressure: number;
    temperature_2m: number;
    is_day: 0 | 1;
    rain: number;
    snowfall: number;
    visibility: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
  hourly_units: {
    time: "iso8601";
    temperature_2m: "°C";
    rain: "mm";
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    rain: number[];
  };
  daily_units: {
    time: "iso8601";
    precipitation_probability_max: "%";
    uv_index_max: "";
    temperature_2m_max: "°C";
    temperature_2m_min: "°C";
    et0_fao_evapotranspiration: "mm";
  };
  daily: {
    time: string[];
    precipitation_probability_max: number[];
    uv_index_max: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    et0_fao_evapotranspiration: number[];
  };
}

export interface LocationData {
  results: [{ lon: number; lat: number }];
}
