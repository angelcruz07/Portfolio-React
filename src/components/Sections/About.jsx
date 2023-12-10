import Button from '../Button'
import Title from '../Text/Title'
import Subtitle from '../Text/Subtitle'
import Parraf from '../Text/Parraf'
import '../../css/about.css'

const About = () => {
  return (
    <div className='about'>
      <div className='about-img'>
        <img src="img/Angel.webp" width="279px" height="230px"alt="Angel Cruz" title="Angel Cruz" format="webp"></img>
      </div>
      <div className='about-content'>
        <Title>Sobre <span>Mi</span></Title>
         <Subtitle>Desarrollador Frontend</Subtitle>
            <Parraf>
                Soy un experimentado desarrollador web
                con enfoque en el desarrollo frontend.
                Con dos años de experiencia,
                mi compromiso con la excelencia y la 
                innovación me impulsa a buscar siempre 
                soluciones de vanguardia en el mundo digital.
            </Parraf>
          <Button href="https://codigo-y-cafe-ad95c.web.app/" title="codigo y cafe blog personal" target="_blank">Leer Más</Button>
      </div>
    </div>
  )
}

export default About