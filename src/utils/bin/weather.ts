import { getWeather } from '../../api';

export const weather = async (isPhone: boolean, args: string[]): Promise<string> => {
  if (isPhone) {
    return "What do you expect from me???\nJust look through the window"
  }
  const city = args.join('+');

  if (!city) {
    return 'DESCRIPTION\n    what do you think it does, I guess something related to weather\nUSAGE\n     weather [city]\nEXAMPLES\n     weather wroclaw';
  }

  const weather = await getWeather(city);

  return weather;
};
