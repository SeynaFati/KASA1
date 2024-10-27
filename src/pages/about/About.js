import Banner from "../../component/banner/Banner";
import Collapse from "../../component/collapse/Collapse";
import "../home/Home.sass";
import "./About.sass";
import "../../component/collapse/Collapse.sass";

function About() {
  return (
    <div>
      <Banner
        imageSource={`${process.env.PUBLIC_URL}/image-2.png`}
        title={""}
      />
      <div className="about-Collapses">
        <Collapse
          title={"Fiabilité"}
          children={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
        <Collapse
          title={"Respect"}
          children={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse
          title={"Service"}
          children={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse
          title={"Sécurité"}
          children={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  );
}

export default About;
