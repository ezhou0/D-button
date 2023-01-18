import React , {useEffect} from 'react';
import sound from '../../assets/wow.mp3';
import './button.css';

const Button = () =>{

    function play(){
        new Audio(sound).play();
    }


    return(
        <>
            <div className='button' onClick={play}>
                <h1 className="button-text">
                    Button
                </h1>
            </div>
        </>
        
    )
}

export default Button;