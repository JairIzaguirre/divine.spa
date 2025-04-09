// pages/index.js
'use client';


import styled from 'styled-components';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './carousel/EmblaCarousel';
import Image from 'next/image'

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
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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

      <div className="card" >
                          <Image src="./celulitis.jpg" alt="Avatar of John Doe" width={100} height={150} />
                          <div className="container">
                              <h4><b>John Doe</b></h4>
                              <p>Architect & Engineer</p>
                          </div>
                      </div>

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