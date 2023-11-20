import './index.css'

export const Modal = ({ onClose }) => { //Screen List
    return(
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1>Add new items</h1>
                    <button onClick={onClose} className='modal-close-button'/>
                </div>
            </div>
        </div>
    )
}