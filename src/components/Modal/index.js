import {useState} from 'react'
import './index.css'
import { Input } from '../Input'
import { Button } from  '../Button'
import {createItem } from '../../services/request' 

export const Modal = ({ onClose }) => { //Screen List
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);

    const callAddItem = async () => {//validando dados
        if(name.length < 3) {
            alert("Nome tem que ter mais que 3 caracteres");
            return;
        }

        if(quantity < 1){
            alert("Quantidade não pode ser menor que 1");
            return;
        }

        const result = await createItem({ name, quantity });
        if(!result?.error){
            alert("Item salvo com sucesso");
            onClose()
        }
    };

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
                <Button onClick={callAddItem}>Adicionar</Button>
            </div>
        </div>
    )
}