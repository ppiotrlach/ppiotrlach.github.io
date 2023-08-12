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
  window.open('mailto:hi@nm4tt72.com');

  return 'Opening mailto:hi@m4tt72.com...';
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

  return 'Opening repository...';
};


export const cats = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=KBdxQyPWgg0&ab_channel=775Live');
  }, 1000);

  return 'kitties are cool...';
};

export const zen = async (args?: string[]): Promise<string> => {
  // add chill music here
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();

    return 'are you sure it is not a dream... wakeup';
  }
  else {
    return 'inception'
  }
};

export const wakeup = async (args?: string[]): Promise<string> => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return 'it is good to see you back';
  }
  else {
    return 'if you want to wake up try to fall asleep first (zen)'
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
  return `
            
  ██▓███   ██▓ ▒█████  ▄▄▄█████▓ ██▀███   ██▓    ▄▄▄       ▄████▄   ██░ ██ 
  ▓██░  ██▒▓██▒▒██▒  ██▒▓  ██▒ ▓▒▓██ ▒ ██▒▓██▒   ▒████▄    ▒██▀ ▀█  ▓██░ ██▒
  ▓██░ ██▓▒▒██▒▒██░  ██▒▒ ▓██░ ▒░▓██ ░▄█ ▒▒██░   ▒██  ▀█▄  ▒▓█    ▄ ▒██▀▀██░
  ▒██▄█▓▒ ▒░██░▒██   ██░░ ▓██▓ ░ ▒██▀▀█▄  ▒██░   ░██▄▄▄▄██ ▒▓▓▄ ▄██▒░▓█ ░██ 
  ▒██▒ ░  ░░██░░ ████▓▒░  ▒██▒ ░ ░██▓ ▒██▒░██████▒▓█   ▓██▒▒ ▓███▀ ░░▓█▒░██▓
  ▒▓▒░ ░  ░░▓  ░ ▒░▒░▒░   ▒ ░░   ░ ▒▓ ░▒▓░░ ▒░▓  ░▒▒   ▓▒█░░ ░▒ ▒  ░ ▒ ░░▒░▒
  ░▒ ░      ▒ ░  ░ ▒ ▒░     ░      ░▒ ░ ▒░░ ░ ▒  ░ ▒   ▒▒ ░  ░  ▒    ▒ ░▒░ ░
  ░░        ▒ ░░ ░ ░ ▒    ░        ░░   ░   ░ ░    ░   ▒   ░         ░  ░░ ░
            ░      ░ ░              ░         ░  ░     ░  ░░ ░       ░  ░  ░
                                                                      v${packageJson.version}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
--
Piotr Lach interactive cv
Start with 'help'
--
`;
};
