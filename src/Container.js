import React, { useContext } from 'react'
import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import Footers from "./components/Footers";
import ThemeContext from './contexts/ThemeContext';

function Container() {
    const {theme} = useContext(ThemeContext);//themecontext parametre olarak ver 

  return (
    <div className={`container ${theme}`}>
        <ChangeTheme/>
        <hr/>
        <ChangeLang/>
        
        <Footers/>
    </div>
  )
}

export default Container
