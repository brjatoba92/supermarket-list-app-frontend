import { useState } from 'react'
import './index.css';
import {Button, Input } from '../../components'

export const HomeScreen = () =>{
    const [username, setUsername] = useState(""); 
    
   
    return(
        <div className="home-screen-container">
            <div className='home-screen-content-container'>
                <img className='shopping-bag-image' src='/images/shopping-bag.svg'  alt='bag'/>
                <h1 className='home-screen-title'> Sua lista de supermercado mais fácil do que nunca </h1>
                <h3 className='home-screen-subtitle'>Ajudamos você a organizar sua lista de compras de forma descomplicada.</h3>
                <h3 className='home-screen-subtitle-description'>Digite abaixo seu usuário para ter acesso a sua lista de compras:</h3>
                <Input 
                    onChange={(text) => setUsername(text)} //toda vez que mudar faz o text
                    value={username} //valor do input que esta sendo salvo no useState para sempre manter no input
                    label="Username" 
                    placeholder='usuario23'
                />
                <div className='home-screen-button-container'>
                    <Button>Continuar</Button>
                </div>
            </div>
        </div>
    )
}