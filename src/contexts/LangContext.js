import React, { createContext, useContext, useState } from 'react'
const LangContext = createContext();//dil context
//provider ilk adım
//value değerini göndermek için provider ile companenti sarmalamak 
//bunun içinde app.js bu provider tanımlamam lazım(LangContextProvider)
//ardından bu providerın sağlamış olduğu veriyi herhangi bir companent üzerinden
//kullanabilirim
export const LangContextProvider = ({children}) =>{
    //state oluştur dil ve ona atama yapacak fonksiyon ardında bağşangıç değeri ver 5.adım devamı
    const [lang,setLang] = useState("tr");

    //obje oluştur dil ve buna atamam yapacak fonksiyonu values objesinin altına yerleştir 6.adım
    //daha sonra value prop ına geçir 7.adım
    const values = {
        lang,
        setLang,
    };

    return <LangContext.Provider value={values}>
        {children}
    </LangContext.Provider>
}
export const useLang=()=>{
    const context = useContext(LangContext);
    if(context === undefined)
        throw new Error("useLang must be used within a LangProvider");
    else 
        return context;
}

//artık biz bu dili değiştirme işlemi yapalım 8.adım
//export default LangContext;//dışarıya aktar fakat dışarıya bu contect kullanmıyoruz
