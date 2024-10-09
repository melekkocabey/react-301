import {useLang} from '../contexts/LangContext';
//oluşturulan context kullanmak için useContext tolg kullanıyoruz 3. adım
function ChangeLang() {
    //const lang = useContext(LangContext);//contexti yerleştir
    const {lang,setLang} = useLang();//ardında dil ve ona atama yapacak olan fonksiyonu al ve buttonların onclick doldur 9.adım
  return (
    <div>
        Aktif Dil :{lang}
        <div>{/* 8.adımın olduğu yer */}
            <button onClick={() => setLang("tr")}>TR</button>
            <button onClick={() => setLang("en")}>EN</button>
            <button onClick={() => setLang("de")}>DE</button>
        </div>
    </div>
  )
}
//daha sonra bu companenti render et yani app.js tanımla 4. adım
//dili değiştircek tanımı yapalım yani state oluşturacağız  onu da LangContent e yapıyoruz 5. adım
export default ChangeLang
