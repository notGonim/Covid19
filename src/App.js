import "./App.css";
import { Cards } from "./components/cards/Cards";
import { CountryPick } from "./components/countryPick/CountryPick";
import { Charts } from "./components/charts/Charts";

function App() {
 

  return (
    <>
      <div className="App">
        <Cards />
        <CountryPick />
      </div>
    </>
  );
}

export default App;
