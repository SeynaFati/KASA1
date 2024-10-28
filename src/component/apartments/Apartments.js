import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../slideshow/Slideshow.js";
import Collapse from "../../component/collapse/Collapse.js";
import Rating from "../../component/rating/Rating.js";

function Apartments() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(`Fetching logement with id: ${id}`);
    fetch(`http://kasa1-production.up.railway.app/logements/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched logement data:", data);
        setLogement(data);
      })
      .catch((error) => {
        console.error("Error fetching logement:", error);
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Slideshow pictures={logement.pictures} />
      <div className="apartment">
        <div className="apartment-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host-info">
          <div className="host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="collapse-content">
        <Collapse
          title={"Description"}
          children=<p>{logement.description}</p>
        />
        <Collapse
          title={"Equipements"}
          children=<ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        />
      </div>
    </div>
  );
}

export default Apartments;
