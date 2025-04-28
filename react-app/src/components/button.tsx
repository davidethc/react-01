import React from "react";

type Props = {
   isLoading: boolean;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
    children: React.ReactNode;
    onClick?: () => void;
}

function Button({   children, onClick , isLoading}: Props) {
    return (
        <button 
            type="button" 
            disabled={isLoading}
            className={`btn btn-${isLoading ? "secondary" : 'primary'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;