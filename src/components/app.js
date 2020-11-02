import React from 'react';
import {Box} from './box'
//import { tsConstructorType } from '@babel/types';
//import { render } from '@testing-library/react';

import{useSelector} from 'react-redux'

const App = () =>{
let sounds= useSelector(state=>state.sounds)
let display = useSelector(state=> state.display)

return(
    <div> 
        <h1>{display}</h1>
    <div className='container'>

    <div 
    id='display' 
    className = 'display'>
        
        {sounds.map((
            sound, idx) => (
        <Box 
        text={sound.id} 
        key={idx} 
        keyCode={sound.keyCode}
        source={sound.url}
        keyTrigger={sound.keyTrigger} 
        />
        ))}
        </div></div>
        </div>
        );
        }

export default App