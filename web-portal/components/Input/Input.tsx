import { JSX } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";


export function Input({placeholder = "Обозначение документа"} : InputProps): JSX.Element {

    return (
        <input type="text" className={styles.input} placeholder={placeholder}/>
    );
}