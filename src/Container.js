import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import Footers from "./components/Footers";
import {useTheme} from './contexts/ThemeContext';

function Container() {
    const {theme} = useTheme();//themecontext parametre olarak ver 

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
