import { useEffect, useState } from "react"


export const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    // const colorTheme = theme === 'dark' ? 'light' : 'dark';

    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return [theme, setTheme];
}