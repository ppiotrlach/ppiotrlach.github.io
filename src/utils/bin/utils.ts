import packageJson from '../../../package.json';
import * as bin from './index';


export const help = async (isPhone: boolean, args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(' \n\t ');


  return `AVAILABLE COMMANDS\n\t ${commands}\n\n[tab]\t\n    trigger completion\n[ctrl l]\n    clear terminal\n[ctrl c]\n    cancel command.`;
};

export const echo = async (isPhone: boolean, args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (isPhone: boolean, args: string[]): Promise<string> => {
  return 'dreamer';
};

export const date = async (isPhone: boolean, args: string[]): Promise<string> => {
  const date = new Date();
  if (!isPhone) return date.toString();

  const short_date = date.toLocaleDateString('en-US', {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  });
  return short_date;
};

export const email = async (isPhone: boolean, args: string[]): Promise<string> => {
  window.open('mailto:piotr.lach99999@gmail.com"');

  return 'Opening mailto:piotr.lach99999@gmail.com"';
};

export const sudo = async (isPhone: boolean, args?: string[]): Promise<string> => {
  if (isPhone)
    return `Error: insufficient permissions to run command '${args[0]}' as god.`;
  else
    return `Error: insufficient permissions\nto run command '${args[0]}' as god.`;
};

export const kittens = async (isPhone: boolean, args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://youtu.be/KBdxQyPWgg0?t=3');
  }, 1000);

  const kittens = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠋⠈⠻⣮⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⡿⠋⠀⠀⠀⠀⠙⣿⣿⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠿⠿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠻⠿⣿⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⣠⣤⣤⣀⡀⠀⠀⣀⣴⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣄⠀⠀
⢀⣤⣾⡿⠟⠛⠛⢿⣿⣶⣾⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣷⣦⣀⣀⣤⣶⣿⡿⠿⢿⣿⡀⠀
⣿⣿⠏⠀⢰⡆⠀⠀⠉⢿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⡿⠟⠋⠁⠀⠀⢸⣿⠇⠀
⣿⡟⠀⣀⠈⣀⡀⠒⠃⠀⠙⣿⡆⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠇⠀
⣿⡇⠀⠛⢠⡋⢙⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀
⣿⣧⠀⠀⠀⠓⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠋⠀⠀⢸⣧⣤⣤⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⡿⠀⠀
⣿⣿⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠻⣷⣶⣶⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⠁⠀⠀
⠈⠛⠻⠿⢿⣿⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠻⠿⢿⣿⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠻⠿⢿⣿⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠿⠿⣿⣷⣶⣶⣤⣤⣀⡀⠀⠀⠀⢀⣴⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡿⣄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠿⠿⣿⣷⣶⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣹
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⢸⣧
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣆⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣶⣾⣿⣿⣿⣿⣤⣄⣀⡀⠀⠀⠀⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣻⣷⣶⣾⣿⣿⡿⢯⣛⣛⡋⠁⠀⠀⠉⠙⠛⠛⠿⣿⣿⡷⣶⣿
  `;

  return kittens;
};

// Declare a variable to hold the music object outside of the functions
let music: HTMLAudioElement | null = null;

export const zen = async (isPhone: boolean, args?: string[]): Promise<string> => {
  if (!document.fullscreenElement) {
    music = new Audio('/relax.mp3');
    music.volume = 0.15;
    music.play();
    document.documentElement.requestFullscreen();

    return 'are you sure it is not a dream... wakeup';
  } else {
    return 'inception';
  }
};

export const wakeup = async (isPhone: boolean, args?: string[]): Promise<string> => {
  if (document.fullscreenElement) {
    if (!isPhone) document.exitFullscreen();

    // Stop the music if it's playing
    if (music) {
      music.pause();
      music.currentTime = 0; // Optional: Reset the music to the beginning
    }

    return 'it is good to see you back';
  } else {
    return 'if you want to wake up try to fall asleep first (zen)';
  }
};

export const education = async (isPhone: boolean, args?: string[]): Promise<string> => {
  if (!isPhone)
    return 'Computer Engineering | Wroclaw University of Science and Technology | 2019 ~ 2023';

  return 'Computer Engineering\nWroclaw University of Science and Technology\n2019 ~ 2023';
};
export const experience = async (isPhone: boolean, args?: string[]): Promise<string> => {
  if (!isPhone) {
    const exp = `Junior Cloud Platform Engineer | ZF Group              | May 2023 - Present
  Dev Engineer                   | Santander Bank Polska | Jul 2020 - May 2023`;
    return exp;
  }
  const exp = `
   May 2023 - Present  | Junior Cloud Engineer | ZF Group              |
   Jul 2020 - May 2023 | Dev Engineer          | Santander Bank Polska |`;
  return exp;
};

export const banner = (isPhone: boolean, args?: string[]): string => {

  const art = `
  ⡐⢄⠀⠀⡆⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠉⠀
  ⠀⠀⢰⢨⡢⠀⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢀
  ⠀⠀⠀⢏⣷⣄⣿⣿⣿⣿⣿⣿⠟⡿⠟⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣁⣴⣾⠋
  ⠀⠀⠀⠘⣼⣿⣿⣿⣿⠫⠛⠁⠀⢀⡀⠀⠀⠲⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡃⠀
  ⠀⠀⠀⠀⢱⡿⠛⠉⠁⠀⠀⢀⠔⠁⣈⠁⠂⠀⠲⣿⣿⣿⣿⣿⣿⣿⣿⣧⠞⠀
  ⠀⠀⠀⠀⠈⢇⠀⠀⠀⠀⠠⠃⡔⢡⢻⣿⡄⠀⠈⠻⣿⠟⡛⡻⣿⣿⣿⢏⡠⠀
  ⠀⠀⠀⠀⠀⡇⢨⢥⡄⠀⠀⠀⢃⠘⡿⠿⡟⠀⠀⠀⠈⢈⠑⡀⣿⣿⣿⠟⠂⠀
  ⠀⠀⠀⠀⠀⠐⣬⢨⣿⠀⠀⠀⠀⠀⠈⠈⠀⠀⠀⠀⠀⣘⡠⢃⣿⠟⠁⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠘⡀⢿⠃⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⢀⢧⣴⠟⠁⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⣔⣮⣷⢖⡇⠀⠀⠀⠀⢀⠎⠘⣇⠠⣤⠄⣪⠤⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠡⢀⠀⠈⠻⡁⠀⡆⠀⠀⢀⣔⠥⣒⡭⠖⢈⣤⢮⠁⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠐⠠⢈⠉⠀⣠⡴⢋⣵⠟⢋⣠⣾⣿⣷⣾⣃⡠⠔⠚
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠝⠉⠉⠉⠉⠉⠉⠛⠛⠳⠞⠁⢀⡠⠔
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠟⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠔⠁⠀⢀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⢊⣥⣴⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⣠⠴⠋
`;

  if (!isPhone) {
    const text = `
            
  ██▓███   ██▓ ▒█████  ▄▄▄█████▓ ██▀███   ██▓    ▄▄▄       ▄████▄   ██░ ██ 
  ▓██░  ██▒▓██▒▒██▒  ██▒▓  ██▒ ▓▒▓██ ▒ ██▒▓██▒   ▒████▄    ▒██▀ ▀█  ▓██░ ██▒
  ▓██░ ██▓▒▒██▒▒██░  ██▒▒ ▓██░ ▒░▓██ ░▄█ ▒▒██░   ▒██  ▀█▄  ▒▓█    ▄ ▒██▀▀██░
  ▒██▄█▓▒ ▒░██░▒██   ██░░ ▓██▓ ░ ▒██▀▀█▄  ▒██░   ░██▄▄▄▄██ ▒▓▓▄ ▄██▒░▓█ ░██ 
  ▒██▒ ░  ░░██░░ ████▓▒░  ▒██▒ ░ ░██▓ ▒██▒░██████▒▓█   ▓██▒▒ ▓███▀ ░░▓█▒░██▓
  ▒▓▒░ ░  ░░▓  ░ ▒░▒░▒░   ▒ ░░   ░ ▒▓ ░▒▓░░ ▒░▓  ░▒▒   ▓▒█░░ ░▒ ▒  ░ ▒ ░░▒░▒
  ░▒ ░      ▒ ░  ░ ▒ ▒░     ░      ░▒ ░ ▒░░ ░ ▒  ░ ▒   ▒▒ ░  ░  ▒    ▒ ░▒░ ░
  ░░        ▒ ░░ ░ ░ ▒    ░        ░░   ░   ░ ░    ░   ▒   ░         ░  ░░ ░
            ░      ░ ░              ░         ░  ░     ░  ░░ ░       ░  ░  ░
                                                                       v6.66
  --

  Piotr Lach interactive cv
  I propose you to start with 'zen' to enable full expierience
  Command 'help' will literally help you :)

  --
  `;



    const textLines = text.split('\n');
    const artLines = art.split('\n');

    let result = '\n';

    for (let i = 0; i < Math.max(textLines.length, artLines.length); i++) {
      const textLine = textLines[i] || '';
      const artLine = artLines[i] || '';
      result += `${textLine.padEnd(90)} ${artLine}\n`; // 80 is the width of the text
    }

    return result;
  }

  const short_text = `
          
██▓███   ██▓ ▒█████  ▄▄▄█████▓ ██▀███   ██▓   
▓██░  ██▒▓██▒▒██▒  ██▒▓  ██▒ ▓▒▓██ ▒ ██▒▓██▒   
▓██░ ██▓▒▒██▒▒██░  ██▒▒ ▓██░ ▒░▓██ ░▄█ ▒▒██░   
▒██▄█▓▒ ▒░██░▒██   ██░░ ▓██▓ ░ ▒██▀▀█▄  ▒██░   
▒██▒ ░  ░░██░░ ████▓▒░  ▒██▒ ░ ░██▓ ▒██▒░██████
▒▓▒░ ░  ░░▓  ░ ▒░▒░▒░   ▒ ░░   ░ ▒▓ ░▒▓░░ ▒░▓  
░▒ ░      ▒ ░  ░ ▒ ▒░     ░      ░▒ ░ ▒░░ ░ ▒  
░░        ▒ ░░ ░ ░ ▒    ░        ░░   ░   ░ ░  
          ░      ░ ░              ░         ░  
                                        v6.66     
--                                   
Come on... Can't you just open it on pc????
If you really need to do this to me...
I propose you to start with command 'zen'
Command 'help' will literally help you :)
--
`
  const result = art + short_text;

  return result;
};
