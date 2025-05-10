import ThemeBtn from "../ThemeSwitcher/ThemeBtn";
import Card from "../ThemeSwitcher/Card";
import { ThemeProvider } from "../ContextAPI/theme";
import { useEffect, useState } from "react";
function LightDark() {

    const [themeMode, setThemeMode] = useState('light');

    const lightTheme = () =>{
        setThemeMode("light");
    }

    const darkTheme = () =>{
        setThemeMode("dark");
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark");
        document.querySelector('html').classList.add(themeMode);
    },[themeMode]);

    return (
        <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* themeBtn */}
                    <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                   {/* card */}
                   <Card />
                </div>
            </div>
        </div>
    </ThemeProvider>
    )
}

export default LightDark