const MenuItem = ({ dish }) => {
    return (
        <div className="menuItemContainer">
            <p className="menuItemNameAndCost">{dish.name} - {dish.price / 100}</p>
        </div>
    );
}

export default MenuItem;