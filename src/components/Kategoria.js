import React from "react";

import { useEffect, useState } from "react";
import { getKategoriak } from "../services/api.js";

function Kategoria({ szures }) {
  const [kategoriak, setKategoriak] = useState([]);

  useEffect(() => {
    getKategoriak().then((data) => {
      console.log(data);
      setKategoriak(data);
    });
  }, []);

  return (
    <select className="form-select mb-3"> onChange={(e) => szures(e.target.value)}>
      <option value="">Válassz kategóriát</option>
      {kategoriak.map((kat) => (
        <option key={kat.id} value={kat.id}>
          {kat.nev}
        </option>
      ))}
    </select>
  );
}

export default Kategoria;
/*
👉 Feladatból:
„legördülő menü a kategóriákhoz”
✅ ide jön:
GET kategoriak (API)
select (dropdown)
*/
