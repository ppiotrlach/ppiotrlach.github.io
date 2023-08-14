import { getWeather } from '../../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'USAGE weather [city].\n    e.g: weather wroclaw';
  }

  const weather = await getWeather(city);

  return weather;
};
