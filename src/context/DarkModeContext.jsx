import { createContext, useContext, useState } from "react";

const darkModeContext = createContext();

const DarkModeProvider = (({ children }) =>{
    const [darkMode, setDarkMode] = useState(false)


    return(
        <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
            { children }
        </darkModeContext.Provider>
    )
});

const useDarkModeContext = () =>{
    return useContext(darkModeContext);
}

export { DarkModeProvider, useDarkModeContext };