import React from "react";
import './Card.css'

const Card = ({ children, className }) => {
    const classList = "card " + className;

    return (
        <div className={classList}>
            {children}
        </div>
    );
}

export default Card;