import React, { useState } from "react";
import { CountryPick } from "./CountryPick";

export const SearchCom = () => {
  const [country, setCountry] = useState("");
  const handleInput = (e) => {
    setCountry(e.target.value);
  };
  const [data, setData] = useState(false);
  const handleSearch = () => {
    setData(true);
    setCountry("");
  };

  return (
    <>
      <div>
        <form>
          <input type="text" value={country} onChange={handleInput} />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </form>
      </div>

      {data && <CountryPick country={country} />}
    </>
  );
};
