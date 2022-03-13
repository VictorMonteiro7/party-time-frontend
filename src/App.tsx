import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { MainRoutes } from "./mainRoutes";
import { ThemeSelect } from "./components/Theme";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <ThemeSelect>
        <Header />
        <MainRoutes />
        <Footer />
      </ThemeSelect>
    </ContextProvider>
  );
}

export default App;
