import { JSX } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";


export function Input({placeholder = "Обозначение документа", ...props} : InputProps): JSX.Element {

    return (
        <input {...props} type="text" className={styles.input} placeholder={placeholder}/>
    );
}