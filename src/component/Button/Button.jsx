import React , {useEffect} from 'react';
import sound from '../../assets/wow.mp3';
import './button.css';

const Button = () =>{

    function play(){
        new Audio(sound).play();
    }


    return(
        <>
            <div className="button-container">
                <div className='button' onClick={play}>
                    <h1 className="button-text">
                        DEEZ
                    </h1>
                </div>
            </div>
        </>
        
    )
}

export default Button;