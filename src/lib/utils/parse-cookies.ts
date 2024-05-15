export const parseCookies = (
  cookieHeader: string | undefined
): Record<string, string> => {
  const cookies: Record<string, string> = {};
  cookieHeader?.split(';').forEach((cookie) => {
    const [name, ...rest] = cookie.split('=');
    cookies[name.trim()] = decodeURIComponent(rest.join('='));
  });
  return cookies;
};
