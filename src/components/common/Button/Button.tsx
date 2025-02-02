import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
    type?: "button" | "submit";
    onClick?: () => void;
    deleteButton?: boolean;
    children: React.ReactNode;
    selected?: boolean;

    green?: boolean;
    blue?: boolean;
    transparent?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, deleteButton, children, selected, green, blue, transparent }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${deleteButton && styles.deleteButton} ${selected && styles.selectedButton} ${green && styles.greenButton} ${blue && styles.blueButton} ${transparent && styles.transparent}` }
            disabled={selected}
        >
            {children}
        </button>
    );
};

export default Button;