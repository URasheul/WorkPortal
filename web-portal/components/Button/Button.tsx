import { JSX } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";


export function Button({children, appearence = "small", disabled = false} : ButtonProps): JSX.Element {

   
    return (
        <button disabled={disabled} 
        className={cn(styles.button, styles[appearence], {[styles.disabled] : disabled})}>
        {children}
        </button>
    );
}