import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "assets/images/heading1.png",
    altText: "Slide 1",

    key: "1",
  },
  {
    src: "assets/images/heading2.jpg",
    altText: "Slide 2",

    key: "2",
  },
];

const CarouselComp = () => <UncontrolledCarousel items={items} />;

export default CarouselComp;
