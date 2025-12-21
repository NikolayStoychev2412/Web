import "./App.css";
import GiftCounter from "./components/GiftCounter";
import SantaMood from "./components/SantaMood";
import ChristmasLights from "./components/ChristmasLights";

const App = () => {
  return (
    <div className="christmas-app">
      <header className="christmas-header">
        <h1>Коледна React Демонстрация</h1>
        <p>Как работи useState</p>
      </header>

      <main className="christmas-main" >
        <GiftCounter />
        <SantaMood />
        <ChristmasLights />
      </main>

      <footer className="christmas-footer">
        <p>Весела Коледа деца!!!</p>
      </footer>
    </div>
  );
};

export default App;
