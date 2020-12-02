import React, { useState } from "react";

export const CountryPick = () => {
  const [country, setCountry] = useState("");

  return (
    <div>
      <form>
        <input type="text" />
        <button type="button">Search</button>
      </form>
    </div>
  );
};
