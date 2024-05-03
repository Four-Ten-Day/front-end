import { AtomEffect, DefaultValue } from 'recoil';

export const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ onSet }) => {
    onSet((newValue: T | DefaultValue, _, isReset: boolean) => {
      if (isReset || newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
