import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../assets/homeCarousels/carousel1.jpg";
import carousel2 from "../assets/homeCarousels/carousel2.jpg";
export default function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block vw-100" src={carousel1} alt="Second slide" />
        <Carousel.Caption>
          <h1>MacBook Air</h1>
          <p>Don’t take it lightly.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block vw-100" src={carousel2} alt="First slide" />
        <Carousel.Caption>
          <h1>MacBook Pro</h1>
          <p>Mover. Maker. Boundary breaker.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
