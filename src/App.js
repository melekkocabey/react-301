import './styles.css';
import LangContext, { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Container from './Container';
import Footers from './components/Footers';

function App() {
  return (
      <LangContextProvider>
        <ThemeContextProvider>
          <Container/>
        </ThemeContextProvider>
      </LangContextProvider>
  );
}

//provider : sağlayıcı, veri sağlamak
// bir veri sağlamak onu da başka companent üzerinden kullanmak
//value isminde bir property var bu property e string ifade 
//gönderiyoruz bu provider içerisinde render ettiğim herhangi
// bir companent içerisinde bu ifadeye ulaşabilirim.
// obje :{a:1}
//array :[1,2,3] her türlü veri türü value property de gönderebiliriz
export default App;
