import {React,useContext} from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext';

//aynı footer da görelim
function Footers() {
    const {theme,toggleTheme} = useContext(ThemeContext);
    const {lang} = useContext(LangContext);//DİL ALAKALI VERİYİ AL 10.ADIM
  return (
    <div>
      <hr/>
      Footer
      <div>Aktif Dil : {lang}</div>{/* 10.ADIM YAPIMI */}
      <div>Aktif tema : {theme}</div>
      <button onClick={toggleTheme}>Temayı Değiştir</button>
    </div>
  )
}

export default Footers
