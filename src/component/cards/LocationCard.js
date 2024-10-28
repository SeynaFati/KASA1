import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LocationCard() {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    fetch("http://kasa1-production.up.railway.app/logements")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Link to={`/logements/${logement.id}`} key={logement.id}>
          <article className="card">
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default LocationCard;
