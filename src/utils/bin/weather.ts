import { getWeather } from '../../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'DESCRIPTION\n    what do you think it does, I guess something related to weather\nUSAGE\n     weather [city]\nEXAMPLES\n     weather wroclaw';
  }

  const weather = await getWeather(city);

  return weather;
};
