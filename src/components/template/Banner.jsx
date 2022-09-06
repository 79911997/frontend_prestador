import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.jpeg";


export default function Banner() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img src={img1}
      className="d-block w-100"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Prestador na sua cidade</h3>
      <p>Aqui você encontra um prestador perto de você!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={img2}
      className="d-block w-100"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Encontre aqui os melhores proficionais</h3>
      <p>Precisa de reparos na sua casa? Entre em contato com um dos nossos prestadores!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}
