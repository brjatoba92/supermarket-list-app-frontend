import {useState} from 'react'
import './index.css'
import { Input } from '../Input'
import { Button } from  '../Button'

export const Modal = ({ onClose }) => { //Screen List
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)

    return(
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1>Add new items</h1>
                    <button onClick={onClose} className='modal-close-button'/>
                </div>
                <Input 
                    onChange={(text) => setName(text)} //toda vez que mudar faz o text
                    value={name} //valor do input que esta sendo salvo no useState para sempre manter no input
                    label="Name" 
                    placeholder='Ex: Açai'
                />
                <Input 
                    onChange={(text) => setQuantity(text)} //toda vez que mudar faz o text
                    value={quantity} //valor do input que esta sendo salvo no useState para sempre manter no input
                    label="Quantity"
                    type="number"
                />
                <div className='modal-spacer'/>
                <Button>Adicionar</Button>
                
                
                
            </div>
        </div>
    )
}