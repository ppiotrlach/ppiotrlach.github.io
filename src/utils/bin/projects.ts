import { getProjects } from '../../api';

export const projects = async (isPhone: boolean, args: string[]): Promise<string> => {
  if (isPhone) return 'Normally I would show you list of my projects\nas long as you are on phone just run command [github]'

  const projects = await getProjects();

  return (
    'To be honest, I rarely check github lately, I apologize in advance if any repository does not have a proper documentation.\n' +
    projects
      .filter((repo) => !repo.fork)
      .map(
        (repo) =>
          `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
      )
      .join('\n')
  );
};
