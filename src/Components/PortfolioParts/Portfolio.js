import React from 'react';
import Project from './Project'
import axiomatic from '../../Images/Axiomatic.png'
import down from '../../Images/down-arrow.svg'
import {Link} from 'react-scroll'
import '../../Styles/Portfolio.css'

let project={
    name:'Axiomatic',
    description:'A web app in wich users can explore a range of famous and user created axioms.',
    link:{site:'https://axiomatic-quote.herokuapp.com/',git:'https://github.com/john-tettis/axiomatic'},
    image:axiomatic
};
const Portfolio=({projects=[project,project,project,project]})=>{


    return(
        <section className="portfolio">
            <h2 className='portfolio-title'>Portfolio</h2>
            <hr name='portfolio' className='line'/>
            <div className='portfolio-container'>
                {projects.map(p=>
                    <Project
                    key={p.name}
                        name={p.name}
                        image={p.image}
                        description={p.description}
                        link={p.link}
                    />
                    )}


            </div>
            {/* <Link  className='portfolio-button'><img className='portfolio-button-img'src={down}></img></Link> */}

        </section>
    )

}


export default Portfolio