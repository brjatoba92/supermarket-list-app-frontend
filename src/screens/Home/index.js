import './index.css';
import {Button } from '../../components/Button'

export const HomeScreen = () =>{
    return(
        <div className="home-screen-container">
            <div className='home-screen-content-container'>
                <img className='shopping-bag-image' src='/images/shopping-bag.svg'  alt='bag'/>
                <h1 className='home-screen-title'> Sua lista de supermercado mais fácil do que nunca </h1>
                <h3 className='home-screen-subtitle'>Ajudamos você a organizar sua lista de compras de forma descomplicada.</h3>
                <div className='home-screen-form-container'>
                    <Button>Continuar</Button>
                </div>
            </div>
        </div>
    )
}