import "./App.css";
import { Cards } from "./components/cards/Cards";
import { CountryPick } from "./components/countryPick/CountryPick";
import { SearchCom } from "./components/countryPick/SearchCom";

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
