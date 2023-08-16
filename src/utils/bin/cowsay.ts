import * as cow from 'cowsay-browser';
import { getQuote } from '../../api';

export const cowsay = async (isPhone: boolean, args?: string[]): Promise<string> => {
  if (isPhone) {
    const result =
      `
____________________                     
< muuuuuu” — mr Cow (looks like dog XD) >
  -------------------                    
        \   ^__^                         
          \ (oo)\_______                 
            (__)\       )\/\             
                ||----w |                
                ||     ||                
    `
    return result;
  }

  let output = '';
  if (args.length < 1 || args[0] === '') {
    const quote = (await getQuote()).quote;
    return cow.say({ text: quote });
  } else {
    output = args.join(' ');
    return cow.say({ text: output });
  }
};
