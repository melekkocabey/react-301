import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(); // Sabit


const defaultTheme = localStorage.getItem("theme") || "light";//a.3) tema varsa bu olsun yoksa da light olsun

export const ThemeContextProvider = ({ children }) => {
    //const [theme, setTheme] = useState('light');
    const [  theme, setTheme] = useState(defaultTheme);//a.4) state bu bilgi varsayılan olarak da defaultheme verdik

    useEffect(() =>{
        localStorage.setItem("theme",theme)
    },[theme]);
    //a.2)tema değiştiği anda bu bilgiyi local storage at

    
    const toggleTheme=()=>{
       setTheme(prev => (prev ==="dark" ? "light" : "dark")); 
    };
    const values = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};
//ilk önce custom bir hook oluşturuyoruz 
export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    else return context;
}
//a.1) eğer local storage üzerine bilgi yazarsak ve bir dahaki seferede 
//bu state local storage den gelen ifade ile dolduracağız.İlk adım 