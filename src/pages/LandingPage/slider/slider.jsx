import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
import Person1 from "./../../../assets/images/person1.png";
import Person2 from "./../../../assets/images/person2.png";
import Person3 from "./../../../assets/images/person3.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const items = [
  {
    id: 1,
    title:
      "“ Great UI, easy to use, and straightforward. Excited to host more mandarin class on Klas.”",
    image: Person1,
    name: "Margaret Anavhe",
    position: "Mandarin Speaker"
  },
  {
    id: 2,
    title:
      "“Klas is a brilliant platform for creators to share and monetize their expertise. The technology is fabulous and team is very professional. Delighted to be a partner.”",
    image: Person2,
    name: "Haryy Stamper",
    position: "CEO, Holistic Academy"
  },
  {
    id: 3,
    title:
      "“Working with Klas has been one of the spotlights of the year for Codenovation. The platform is easy to use, seamless, and has excellent customer service. Thanks for making it easy to teach online.”",
    image: Person3,
    name: "Shola Akinrolie",
    position: "Founder, Codenovation"
  },
];

export default function Slider() {
  return (
    <div className="slider-container">
      <div className="head">
        <h2>Don't take our words for it...</h2>
      </div>
      <Carousel responsive={responsive} infinite={true}>
        {items.map((item) => (
          <div key={item.id} className="slider-item">
            <h3>{item.title}</h3>
            <div className="profile">
                <img src={item.image} alt={item.title} />
              <div className="details">
                <h2>{item.name}</h2>
                <p>{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
