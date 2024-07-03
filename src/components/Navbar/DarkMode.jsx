import React from 'react'
import { useEffect } from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";


function DarkMode() {

    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')


        /* --------------  Tutorial Code --------------- */
    // const element = document.documentElement;
    // React.useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //     if (theme === 'dark') {
    //         element.classList.add('dark');
    //     } else {
    //         element.classList.remove('dark');
    //     }
    // });
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme == 'dark');
    }, [theme]);

    return (
        <div className=''>
            <img src={LightButton} alt='' className={`w-12 cursor-pointer ${theme == 'dark' ? 'hidden' : 'opacity-100'} transition-all duration-300`}
                onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>

            </img>
            <img src={DarkButton} alt='' className={`w-12 cursor-pointer ${theme == 'light' ? 'hidden' : 'opacity-100'}`}
                onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
            </img>
        </div>

    )
}

export default DarkMode