import React, {useState} from 'react';
import arrow from '../../Images/down-arrow.svg'


const Project=({image, description, link, name})=>{
    let [overlay, setOverlay] = useState(false)
    let show = overlay? 'show':'';

    const toggleOverlay=()=>{
        setOverlay(!overlay)
    }


let style={
    backgroundImage:`url('${image}')`
}

    return(
        <div 
            onMouseEnter={()=>setOverlay(true)} 
            onMouseLeave={()=>setOverlay(false)}
            style={style} className='project'
            >
            <h3 className={`project-title ${show}`}>{name}</h3>
            <div onClick={toggleOverlay} className='project-arrow-holder'>
                <img className='project-arrow' src={arrow}></img>
            </div>
            <div onClick={toggleOverlay} className={`project-overlay ${show}`}>
                <p className='project-description'>{description}</p>
                <div className='project-overlay-button-container'>
                    <a target='_blank' href={link.git}className='project-link'><div>GitHub Repo</div></a>
                    <span className='project-link-line'></span>
                    <a target='_blank' href={link.site}className='project-link'><div>View Deployment</div></a>
                </div>
            </div>
        </div>
    )

}


export default Project;