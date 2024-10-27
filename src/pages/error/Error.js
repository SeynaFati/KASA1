import React from "react";
import { Link } from "react-router-dom";
import "./Error.sass";

function Error() {
  return (
    <div className="error-page">
      <h1 className="error-page-title">404</h1>
      <p className="error-reason">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
}
export default Error;
