import React from 'react';
import Project from './Project'
import axiomatic from '../../Images/Axiomatic.png'

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
            <hr className='portfolio-line'/>
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

        </section>
    )

}


export default Portfolio