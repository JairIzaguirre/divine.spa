// pages/index.js
'use client';


import styled from 'styled-components';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './carousel/EmblaCarousel';

//import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
`;

const VideoContainer = styled.div`
  position: relative;
  margin: 1em auto;
  border-radius: 15px;
  width: 90%;
  height: 50vh; /* Ajusta la altura según necesites */
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const VideoContent = styled.div`
  position: absolute;
  z-index: 1; /* El contenido queda encima del video */
  color: white; /* Ajusta el color para que sea legible */
  text-align: left;
  bottom: 0px; /* Espacio desde la parte inferior */
  padding-left: 1em;
  padding-bottom: 1em;
`;

const AnimatedButton = styled.button`
position: relative;
	font: inherit;
	background-color: #f0f0f0;
	border: 0;
	color: #242424;
	border-radius: 0.5em;
	padding: 0.375em 1em;
	font-weight: 600;
	text-shadow: 0 0.0625em 0 #fff;
	box-shadow: inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
		0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
		0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece;
	transition: 0.25s ease;
	pointer: cursor;
	touch-action: manipulation;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	cursor: pointer;
  margin-top: 1em;
  margin-bottom: 1em;

	&:active,
	&:hover {
		transform: translateY(0.225em);
		box-shadow: inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
			0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
			0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece;

		&:after {
			height: calc(100% + 0.225em);
		}
	}

	&:after {
		position: absolute;
		content: "";
		display: block;
		width: 100%;
		height: calc(100% + 0.375em);
		top: 0;
		left: 0;
		background-color: transparent;
		transition: height 0.25s ease;
	}
`;


export default function Home() {
  // const handleReservaClick = () => {
  //   window.open('https://wa.me/525568671684', '_blank');
  // };

  const OPTIONS: EmblaOptionsType = { direction: 'rtl' }
  //const SLIDE_COUNT = 5
  //const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const SLIDES = [
    { index: 0, image: './depilacionlaser.jpg', title: 'Depilación Láser Tridiodo', description: 'Tratamiento avanzado para una depilación permanente y efectiva.Elimina el bello desde la raíz.' }, 
    { index: 1, image: './celulitis.jpg', title: 'Tratamientos para celulitis', description: 'Reducimos la apariencia de la celulitis con técnicas innovadoras.' }, 
    { index: 2, image: './lipo.jpg', title: 'Lipo sin Cirugía', description: 'Moldea tu figura sin necesidad de cirugía, de manera segura y efectiva.' }, 
    { index: 3, image: './levantamiento.jpg', title: 'Levantamiento de Glúteos', description: 'Mejora la forma y firmeza de tus glúteos con nuestros tratamientos especializados.' }, 
    { index: 4, image: './faciales.jpg', title: 'Tratamientos Faciales', description: 'Tratamientos no invasivos que ayudan a mantener la piel sana, tersa y luminosa con diversidad de faciales como anti-edad nos ayuda a aumentar la producción de colágeno, humecta, tonifica, rejuvenece y elimina las lineas de expresión. Anti-Acne reduce de forma eficaz y duradera el execeso de grasa, puntos negros y espinillas.' }, 
    { index: 5, image: './mesoterapia.jpg', title: 'Mesoterapia', description: 'Inyecciones de vitaminas y minerales para mejorar la salud de la piel.' }, 
    { index: 6, image: './Masajes-relajantes.jpg', title: 'Masajes', description: 'Ofrecemos relajantes, descontracturantes, linfáticos, para piernas cansadas y con piedras calientes.' }, 
    { index: 7, image: './dermapen.jpg', title: 'Dermapen', description: 'El tratamiento con Dermapen, también conocido como microneedling, ofrece múltiples beneficios para la piel, como la mejora de la textura, la reducción de arrugas y cicatrices, y la estimulación de la producción de colágeno y elastina, lo que resulta en una piel más firme y joven.' }, 
    { index: 8, image: './vacum.jpg', title: 'Vacumterapia', description: 'Tratamiento no invasivo para convatir la celulitis de primer nivel. Se emplea mediante aparatos succionadores que drenan el tejido adiposo movilizando la grasa hacia el sistema linfático.' }, 
    { index: 9, image: './vendas.jpg', title: 'Vendas frías', description: 'Tratamiento descongestivo y natural que aprovecha el metabolismo de nuestro cuerpo para lograr la hidratacióm, reafirmación y humectación de la piel. Son una buena opción para tratar la inflamación ya que agilizan la circulación mejorando el flujo sanguíneo.' }, 
    { index: 10, image: './electroestimulacion.jpg', title: 'Electroestimulación', description: 'Uso de aparatos que mediante impulsos eléctricos provocan contracciones musculares y como consecuencia, un efecto similar al que se obtendrá ejercitanto los músculos.' }, 
    { index: 11, image: './Masajes-reductores.jpg', title: 'Especialistas en Masajes Postoperatorios', description: 'Beneficios: Eliminación de líquidos acumulados, prevención y eliminación de fibrosis, regeneración de la piel y reducción de ematomas.' }, 
    { index: 12, image: './drenaje-01.jpg', title: 'Drenaje Linfatico', description: 'Es un tratamiento destinado a mejorar y facilitar la circulación linfática. Es un masaje suave que se utiliza cuando existe un liquido o sustancias acumuladas en los tejidos.' }, 
  ];



  return (
    <Container>


      <VideoContainer>
        <Video autoPlay muted loop>
          <source src="3998264-sd_426_226_25fps.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </Video>
        <VideoContent>
          <h1>Divine</h1>
          <p>Clinic & Spa</p>
          <br />
          <p>Nos dedicamos a proporcionar un oasis de relajación y bienestar en el corazón de la Ciudad de México</p>
          <AnimatedButton>Reserva tu cita</AnimatedButton>
        </VideoContent>
      </VideoContainer>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      
      

      {/* <VideoContainer>
        <video autoPlay muted loop>
          <source src="3998264-sd_426_226_25fps.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="content">
          <h1>Contenido sobre el video</h1>
          <p>Este texto aparece encima del video de fondo.</p>
        </div>
      </VideoContainer> */}


    </Container>
  );
}