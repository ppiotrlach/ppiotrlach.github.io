import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:piotr.lach99999@gmail.com"');

  return 'Opening mailto:piotr.lach99999@gmail.com"';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const credit = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return 'Opening repository of base project (m4tt72)...';
};


export const cats = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=KBdxQyPWgg0&ab_channel=775Live');
  }, 1000);

  return 'kitties are cool...';
};

// Declare a variable to hold the music object outside of the functions
let music: HTMLAudioElement | null = null;

export const zen = async (args?: string[]): Promise<string> => {
  if (!document.fullscreenElement) {
    music = new Audio('/relax.mp3');
    music.volume = 0.15;
    music.play();
    document.documentElement.requestFullscreen();

    return 'are you sure it is not a dream... wakeup';
  }
  else {
    return 'inception';
  }
};

export const wakeup = async (args?: string[]): Promise<string> => {
  if (document.fullscreenElement) {
    document.exitFullscreen();

    // Stop the music if it's playing
    if (music) {
      music.pause();
      music.currentTime = 0; // Optional: Reset the music to the beginning
    }

    return 'it is good to see you back';
  }
  else {
    return 'if you want to wake up try to fall asleep first (zen)';
  }
};

export const education = async (args?: string[]): Promise<string> => {
  return 'Computer Engineering | Wroclaw University of Science and Technology | 2019 ~ 2023';
};
export const experience = async (args?: string[]): Promise<string> => {
  const exp =
    `Junior Cloud Platform Engineer | ZF Group              | May 2023 - Present
Dev Engineer                   | Santander Bank Polska | Jul 2020 - May 2023`;

  return exp
};

export const banner = (args?: string[]): string => {
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

  const textLines = text.split('\n');
  const artLines = art.split('\n');

  let result = "\n";

  for (let i = 0; i < Math.max(textLines.length, artLines.length); i++) {
    const textLine = textLines[i] || "";
    const artLine = artLines[i] || "";
    result += `${textLine.padEnd(90)} ${artLine}\n`; // 80 is the width of the text
  }

  return result;
};