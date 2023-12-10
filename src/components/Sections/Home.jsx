import Button from '../Button'
import Parraf from '../Text/Parraf'
import Subtitle from '../Text/Subtitle'
import '../../css/home.css';

const Home = () => {
  return (
    <div className='home-content'>
      <h1>Hola, yo soy</h1>
      <h2>Angel Cruz</h2>
      <Subtitle><span className="multiple-text">Dev FrontEnd</span></Subtitle>
      <Parraf>
         &quot;Apasionado desarrollador web frontend. 
        Amante de la estética y creador de 
        experiencias digitales cautivadoras. 
        Transformo código en arte para sorprender al mundo.&quot;
      </Parraf>
      <div className="social-media">
        <a href="https://github.com/angelcruz07" target="_blank" rel="noreferrer" title="link a github"><i className="fa-brands fa-github"></i></a>
        <a href="https://instagram.com/a_alex.cs?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/angel-cruz07/" target="_blank" rel="noreferrer" title="linkedin"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <Button href="https://drive.google.com/file/d/17hlvWOunFDAf6e8R_3RhSbotH42EqCvr/view?usp=sharing" title="CV con gloogle drive" 
      target="_blank" rel="noreferrer" className="btn">Descargar CV</Button>
    </div>
  );
}

export default Home