
import Dropdown from "../components/Dropdown"
import Montagnes from "../media/Montagnes.png"
import aboutDatas from "../DataAbout.js"


console.log();


function About() {

    return (
        <div className="about-page">
         
          <div className="banner"> 
            
          <img className='banner-image' src={Montagnes} alt='background' />

          </div>

          <div className='details'>

            {aboutDatas.map((elt) => (
              <Dropdown key={elt.id} title={elt.title} content={elt.content} className='dropdown-about' />))}
              
          </div>

        </div>
    );
}


export default About;


