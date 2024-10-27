import React from "react";
import LocationCard from "../../component/cards/LocationCard";
import Banner from "../../component/banner/Banner";
import "../../pages/home/Home.sass";

function Home() {
  return (
    <div>
      <Banner
        imageSource={`${process.env.PUBLIC_URL}/image-1.png`}
        title={"Chez vous, partout et ailleurs"}
      />
      <LocationCard />
    </div>
  );
}

export default Home;
