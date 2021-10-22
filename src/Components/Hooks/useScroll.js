


/**
 * adds an event listener to change a piece of state on scroll.
 * @param {function} setState state setter to affect state 
 * @param {Number} value scroll distance to set event listener
 * @param {String} initial initital state to be set
 * @param {String} change state to be set on event  change
 */
export default function useScroll(setState, value = 120, initial,change){
    document.addEventListener('scroll', ()=>{
        let distance = document.scrollingElement.scrollTop;
        if(distance>= value){
            setState(change)
        }
        else{
            setState(initial)
        }
    })
}