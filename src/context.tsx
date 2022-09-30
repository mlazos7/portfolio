import {createContext} from 'react';

export const Context = createContext({
    theme: '',
    setTheme: (theme: string) => {},
});

