import React from "react";

function SorRecept({ recept, setKivalasztott, torles }) {
  return (
    <tr style={{ cursor: "pointer" }} onClick={() => setKivalasztott(recept)}>
      <td>{recept.nev}</td>
      <td>{recept.kategoriak?.nev}</td>
      <td>
        <button className="btn btn-danger btn-sm"
          onClick={(e) => {
            e.stopPropagation(); // 🔥 NE válassza ki a sort
            torles(recept.id);
          }}
        >
          Törlés
        </button>
      </td>
    </tr>
  );
}

export default SorRecept;
/*
 Feladatból:
„táblázat egyik sora”
✅ ide jön:
EGY recept megjelenítés
*/
