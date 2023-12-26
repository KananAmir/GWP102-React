import React from "react";
import "./index.scss";
import CardComp from "../../components/card";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";

const HomePage = ({ sayHi }) => {
  let userName = "Shalala";
  sayHi(userName);
  
  // const products = [
  //   {
  //     title: "Strategy Planning",
  //     description:
  //       "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
  //     imgUrl: "../../../public/images/icon1.png",
  //   },
  //   {
  //     title: "Insurance Services",
  //     description:
  //       "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
  //     imgUrl: "../../../public/images/icon2.png",
  //   },
  //   {
  //     title: "Audit & Evaluation",
  //     description:
  //       "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
  //     imgUrl: "../../../public/images/icon3.png",
  //   },
  // ];

  const products = [
    {
      title: "Strategy Planning",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
      imgUrl: icon1,
    },
    {
      title: "Insurance Services",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
      imgUrl: icon2,
    },
    {
      title: "Audit & Evaluation",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
      imgUrl: icon3,
    },
  ];

  return (
    <div id="home-page">
      <section id="cards">
        <div className="container">
          <div className="cards">
            {products.map((item) => {
              return <CardComp product={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
