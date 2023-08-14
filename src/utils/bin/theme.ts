import Themes from '../../../themes.json';

export const theme = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  if (args.length === 0) {
    const message =
      `NAME
        theme - change your outlook
SYNOPSIS
        theme [option] [...]

DESCRIPTION
        Not everyone sees the world the same way, sometimes it's worth trying to change your perspective
    
OPTIONS:
        ls
            list all themes
        set <theme>
            change theme
        random
            set a random theme

EXAMPLES 
        theme set adventuretime
            set current theme to adventuretime (my favourite, default one here)
        theme ls
            list all themes
        theme random
            set current theme to random theme`
    return message;
  }

  switch (args[0]) {
    case 'ls':
      let result = Themes.map((theme) => theme.name.toLowerCase()).join(' | ');
      result += '\n\n';

      return result;
    case 'set':
      const selectedTheme = args[1];

      return callback(selectedTheme);
    case 'random':
      const randomTheme = Themes[Math.floor(Math.random() * Themes.length)];

      return callback(randomTheme.name.toLowerCase());
  }
};
