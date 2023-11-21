import "./index.css";

export const ListCard = (props) => {
    const { item, onClick } = props; //desconstrução do objeto via props
    
    return (
        <div className="list-card-container">
            <img
                className="checkbox"
                src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
                alt="checked-item"
            
            />
            <div className="list-card-text-container" onClick={() => onClick(item)}>
                <span className="list-card-title">{item?.name}</span>
                <span className="list-card-subtitle">{item?.quantity} unidades</span>
            </div>
            <img className="arrow-icon" src="/images/arrow.svg" alt="arrow" />
        </div>
    )
};