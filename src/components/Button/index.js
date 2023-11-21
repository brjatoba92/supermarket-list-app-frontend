import './index.css'

export const Button = ({ children, onClick, variant }) => {
    return (
        <button 
            onClick={onClick} 
            className={`button-container ${
                variant === 'outline' ? 'outline' : 'main'
            }`}
        >
            {children}
        </button>
    )

}