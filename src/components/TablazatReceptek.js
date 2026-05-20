import SorRecept from "./SorRecept";

function TablazatReceptek({ receptek, setKivalasztott, torles }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Név</th>
          <th>Kategória</th>
          <th>Művelet</th>
        </tr>
      </thead>
      <tbody>
        {receptek.map((recept) => (
          <SorRecept
            key={recept.id}
            recept={recept}
            setKivalasztott={setKivalasztott}
            torles={torles}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TablazatReceptek;
/*
Feladatból:
„receptek megjelenítése táblázatban”
✅ ide jön:
<table>
.map()  A .map() mindig ott van ahol lista van
*/
