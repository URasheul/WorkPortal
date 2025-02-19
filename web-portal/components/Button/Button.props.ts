import { DetailsHTMLAttributes } from "react";

export interface ButtonProps extends DetailsHTMLAttributes<HTMLButtonElement> {
    appearence?: "small" | "big";
    disabled?: boolean;
    onClick?: () => void;
}

