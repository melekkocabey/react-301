import {useTheme} from '../contexts/ThemeContext'
import LangContext, { useLang } from '../contexts/LangContext';

//aynı footer da görelim
function Footers() {
    const {theme,toggleTheme} = useTheme();
    const {lang} = useLang();//DİL ALAKALI VERİYİ AL 10.ADIM
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
