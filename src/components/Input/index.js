import './index.css';

export const Input = ({ label, placeholder }) => {
    return(
       <div className='input-container'>
        <span className='input-label'>{label}</span>
        <input className='input' placeholder={placeholder}/>
       </div>
    )
}