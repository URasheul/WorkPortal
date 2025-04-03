import { JSX } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";
import cn from "classnames";


export function Input({placeholder, className, type = "text", ...props} : InputProps): JSX.Element {


    return (
        <input {...props} type={type} className={cn(styles.input, className)} placeholder={placeholder}/>
    );
}