import React from "react";
import { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, movies }) => {
    useEffect(()=>{
        if (activeGenre === 0) {
            setFiltered(movies)
            return;
        }
        // const filtered = movies.filter((movies) =>
        // movies.title.includes(activeGenre)
        // );
        // setFiltered(filtered);
    },[]);
  return (
    <div className="filter-container">
      <button onClick={() => setActiveGenre(0)} className="btn-primary">
        Hepsi
      </button>
      <button onClick={() => setActiveGenre(0)} className="btn-primary">
        Dizi
      </button>
      <button onClick={() => setActiveGenre(0)} className="btn-primary">
        Film
      </button>
    </div>
  );
};

export default Filter;
