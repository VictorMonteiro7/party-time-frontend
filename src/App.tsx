import { Footer } from './components/footer';
import { Header } from './components/header';
import { MainRoutes } from "./mainRoutes";
import {ThemeSelect} from './components/Theme'
function App() {
  return (
    <div>
      <ThemeSelect>
          <Header/>
          <MainRoutes />
          <Footer/>
      </ThemeSelect>
    </div>
  );
}

export default App;
