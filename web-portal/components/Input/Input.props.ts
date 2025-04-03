import { DetailsHTMLAttributes } from "react";

export interface InputProps extends DetailsHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
}
