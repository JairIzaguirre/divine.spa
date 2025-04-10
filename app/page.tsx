// pages/index.js
'use client';


import styled from 'styled-components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
`;

const Logo = styled.h1`
  font-size: 4em;
  font-weight: 800;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #3498db;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionContent = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e74c3c;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 20px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
`;
const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const ServiceImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px;
`;

const ServiceDescription = styled.div`
  flex: 1;
`;

const ContenedorImagenes = styled.div`
 
  display: block;
  width: 100%;
  height: 100vh;
  background-size: cover;
  z-index: -99;
`;

export default function Home() {
  const handleReservaClick = () => {
    window.open('https://wa.me/525568671684', '_blank');
  };

  return (
    <Container>
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        {/* Capa de fondo con la imagen del spa */}
        <ContenedorImagenes style={{ backgroundImage: "url('/vistadivine.png')" }}>&nbsp;</ContenedorImagenes>
        <ContenedorImagenes style={{ backgroundImage: "url('/Diseño sin título.png')", zIndex: -99  }}>&nbsp;</ContenedorImagenes>
        <ContenedorImagenes style={{ backgroundImage: "url('/vista.divine3.png')", zIndex: -99 }}>&nbsp;</ContenedorImagenes>
        <ContenedorImagenes style={{ backgroundImage: "url('/vista.divine3.png')", zIndex: -99 }}>&nbsp;</ContenedorImagenes>
        {/* <ParallaxLayer offset={0} speed={0.1} style={{ backgroundImage: "url('/vista.divine.jpg')", backgroundSize: 'cover' }} /> */}
        
        {/* Logo */}
        <ParallaxLayer offset={0} speed={0.2}>
          <Logo>DivineClinic&Spa</Logo>
        </ParallaxLayer>

        {/* Sección de Bienvenida */}
        <ParallaxLayer offset={0.55} speed={0.3}>
          <SectionContent>
            <SectionTitle>Bienvenido</SectionTitle>
            <p>En DivineClinic&Spa, <strong> nos dedicamos a proporcionar un oasis de relajación y bienestar en el corazón de la Ciudad de México...</strong></p>
            <Button onClick={handleReservaClick}>Reservar una cita</Button>
          </SectionContent>
        </ParallaxLayer>

        {/* Sección Acerca de nosotros */}
        <ParallaxLayer offset={0.99999} speed={0.5}>
  <SectionContent style={{ marginBottom: '100px' }}>
    <SectionTitle>Nuestros servicios</SectionTitle>
    <ServiceItem>
      <ServiceImage src="/depilacionlaser.jpg" alt="Depilación Láser Tridiodo" />
      <ServiceDescription>
        <h3>Depilación Láser Tridiodo</h3>
        <p>Tratamiento avanzado para una depilación permanente y efectiva.Elimina el bello desde la raíz</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/celulitis.jpg" alt="Tratamientos para celulitis" />
      <ServiceDescription>
        <h3>Tratamientos para celulitis</h3>
        <p>Reducimos la apariencia de la celulitis con técnicas innovadoras.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/lipo.jpg" alt="Lipo sin Cirugía" />
      <ServiceDescription>
        <h3>Lipo sin Cirugía</h3>
        <p>Moldea tu figura sin necesidad de cirugía, de manera segura y efectiva.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/levantamiento.jpg" alt="Levantamiento de Glúteos" />
      <ServiceDescription>
        <h3>Levantamiento de Glúteos</h3>
        <p>Mejora la forma y firmeza de tus glúteos con nuestros tratamientos especializados.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/faciales.jpg" alt="Tratamientos Faciales" />
      <ServiceDescription>
        <h3>Tratamientos Faciales</h3>
        <p>Tratamientos no invasivos que ayudan a mantener la piel sana, tersa y luminosa con diversidad de faciales como anti-edad nos ayuda a aumentar la producción de colágeno,
          humecta, tonifica, rejuvenece y elimina las lineas de expresión. Anti-Acne reduce de forma eficaz y duradera el execeso de grasa, puntos negros y espinillas. 
        </p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/mesoterapia.jpg" alt="Mesoterapia" />
      <ServiceDescription>
        <h3>Mesoterapia</h3>
        <p>Inyecciones de vitaminas y minerales para mejorar la salud de la piel.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/Masajes-relajantes.jpg" alt="Masajes" />
      <ServiceDescription>
        <h3>Masajes</h3>
        <p>Ofrecemos relajantes, descontracturantes, linfáticos, para piernas cansadas y con piedras calientes.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/dermapen.jpg" alt="Especialistas en Masajes Postoperatorios" />
      <ServiceDescription>
        <h3>Dermapen</h3>
        <p>El tratamiento con Dermapen, también conocido como microneedling, ofrece múltiples beneficios para la piel, como la mejora de la textura, la reducción de arrugas y cicatrices, y la estimulación de la producción de colágeno y elastina, lo que resulta en una piel más firme y joven.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/vacum.jpg" alt="Especialistas en Masajes Postoperatorios" />
      <ServiceDescription>
        <h3>Vacumterapia</h3>
        <p>Tratamiento no invasivo para convatir la celulitis de primer nivel. Se emplea mediante aparatos succionadores que drenan el tejido adiposo movilizando la grasa hacia el sistema linfático.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/vendas.jpg" alt="Especialistas en Masajes Postoperatorios" />
      <ServiceDescription>
        <h3>Vendas frías</h3>
        <p>Tratamiento descongestivo y natural que aprovecha el metabolismo de nuestro cuerpo para lograr la hidratacióm, reafirmación y humectación de la piel. Son una buena opción para tratar la inflamación ya que agilizan la circulación mejorando el flujo sanguíneo.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/electroestimulacion.jpg" alt="Especialistas en Masajes Postoperatorios" />
      <ServiceDescription>
        <h3>Electroestimulación</h3>
        <p>Uso de aparatos que mediante impulsos eléctricos provocan contracciones musculares y como consecuencia, un efecto similar al que se obtendrá ejercitanto los músculos.</p>
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/Masajes-reductores.jpg" alt="Especialistas en Masajes Postoperatorios" />
      <ServiceDescription>
        <h3>Especialistas en Masajes Postoperatorios</h3>
        <p>Beneficios.</p>
        
              <li>Eliminación de líquidos acumulados.</li>
              <li>Prevención y eliminación de fibrosis.</li>
              <li>Regeneración de la piel.</li>
              <li>Reducción de ematomas.</li>
            
      </ServiceDescription>
    </ServiceItem>
    <ServiceItem>
      <ServiceImage src="/drenaje.jpg" alt="Especialistas en Masajes Postoperatorios" />
      <ServiceDescription>
        <h3>Drenaje Linfatico</h3>
        <p>Es un tratamiento destinado a mejorar y facilitar la circulación linfática. Es un masaje suave que se utiliza cuando existe un liquido o sustancias acumuladas en los tejidos.</p>
      </ServiceDescription>
    </ServiceItem>
    </SectionContent>
</ParallaxLayer>
         {/* Segunda capa de fondo con otra imagen del spa */}
         <div style={{ backgroundImage: "url('/Diseño sin título.png')", backgroundSize: 'cover', zIndex: -99 }}></div>
         {/* <ParallaxLayer offset={1} speed={0.1} style={{ backgroundImage: "url('/Diseño sin título.png')", backgroundSize: 'cover', zIndex: -99 }} /> */}
         {/* <ParallaxLayer offset={2} speed={0.1} style={{ backgroundImage: "url('/vista.divine3.png')", backgroundSize: 'cover', zIndex: -99 }} /> */}
        {/* Sección Cómo encontrarnos */}
        <ParallaxLayer offset={3} speed={0.6}>
          <SectionContent>
            <SectionTitle>Cómo encontrarnos</SectionTitle>
            <p>Encuentranos a unas calles del metro Parque de los venados</p>
            <p>En Av. Emperadores 235, Delegación Benito Juárez.</p>
            <img src="/mapa.divine.png" alt="Mapa de ubicación" width="600" height="400"/>
          </SectionContent>
        </ParallaxLayer>
      </Parallax>
    </Container>
  );
}