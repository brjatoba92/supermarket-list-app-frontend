import "./index.css";


export const ListCard = (props) => {
    const { item, onClick, onCheckItem } = props; //desconstrução do objeto via props
    
    return (
        <div className="list-card-container">
           <div className="checkbox">
                <input
                    onChange={() => onCheckItem(item)}
                    checked={item?.checked}
                    id="checkbox"
                    type="checkbox"
                />
                <label htmlFor="checkbox"/>
           </div>
            <div className="list-card-text-container">
                <span className="list-card-title">{item?.name}</span>
                <span className="list-card-subtitle">{item?.quantity} unidades</span>
            </div>
            <div onClick={() => onClick(item)} className="arrow-icon-container">
                <img
                    className="arrow-icon" 
                    src="/images/arrow.svg" 
                    alt="arrow" />
            </div>
        </div>
    );
};