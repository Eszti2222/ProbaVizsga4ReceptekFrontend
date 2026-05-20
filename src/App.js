import { useEffect, useState } from "react";
import "./App.css";
import {
  getReceptek,
  getSzures,
  deleteReceptek,
  createReceptek,
} from "./services/api";
import Kategoria from "./components/Kategoria.js";
import TablazatReceptek from "./components/TablazatReceptek.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [receptek, setReceptek] = useState([]);
  const [kivalasztott, setKivalasztott] = useState(null);
  //új recept felviteléhez
  const [ujNev, setUjNev] = useState("");
  const [ujKatId, setUjKatId] = useState("");
  const [ujLeiras, setUjLeiras] = useState("");
  const [ujKep, setUjKep] = useState("");

  function betoltLista() {
    getReceptek().then((data) => {
      setReceptek(data);
    });
  }
  useEffect(() => {
    betoltLista();
  }, []);

  function szures(kat_id) {
    if (kat_id === "") {
      getReceptek().then((data) => setReceptek(data));
    } else {
      getSzures(kat_id).then((data) => setReceptek(data));
    }
  }

  function torles(id) {
    deleteReceptek(id).then(() => {
      betoltLista(); // újratölti a listát
    });
  }
  function ujRecept() {
    const adat = {
      nev: ujNev,
      kat_id: ujKatId,
      leiras: ujLeiras,
      kep_eleresi_ut: ujKep,
    };

    createReceptek(adat).then(() => {
      betoltLista();
    });
  }

  return (
    <div className="container mt-4">
      <h1>Receptek</h1>
      <Kategoria szures={szures} />
      <TablazatReceptek
        receptek={receptek}
        setKivalasztott={setKivalasztott}
        torles={torles}
      />
      {kivalasztott && (
        <div className="card mt-4 p-3">
          <h2>{kivalasztott.nev}</h2>
          <p>{kivalasztott.leiras}</p>
          <p>Kategória: {kivalasztott.kategoria?.nev}</p>
          <p>Kép: {kivalasztott.kep_eleresi_ut}</p>

          <img
            src={`/kepek/${kivalasztott.kep_eleresi_ut}`}
            alt="recept kép"
            className="recept-kep"
          />
        </div>
      )}

      <h2>Új recept</h2>

      <input
        type="text"
        placeholder="Név"
        onChange={(e) => setUjNev(e.target.value)}
      />

      <input
        type="text"
        placeholder="Kategória ID"
        onChange={(e) => setUjKatId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Leírás"
        onChange={(e) => setUjLeiras(e.target.value)}
      />

      <input
        type="text"
        placeholder="Kép"
        onChange={(e) => setUjKep(e.target.value)}
      />

      <button onClick={ujRecept}>Felvitel</button>
    </div>
  );
}

export default App;

/*
Ha feladatban ez van:
👉 „táblázat”
→ kell:
table ✅
map ✅

👉 „lista elemei”
→ külön komponens ✅

👉 „dropdown”
→ select + option ✅

👉 „API adat”
→ useEffect + useState ✅

„kattintásra jelenjen meg”

✅ kell:

state
onClick
feltételes render


👉 amikor ezt látod:

„törlés”

✅ kell:

gomb
API hívás
lista frissítés

Memorizáláshoz:
👉 ami ismétlődik → külön komponens
sok recept → külön sor komponens ✅
👉 ami külön funkció → külön komponens
dropdown → külön ✅
*/
