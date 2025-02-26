import { JSX } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";


export function Button({children, className, appearence = "small", disabled = false} : ButtonProps): JSX.Element {
   
    return (
        <button disabled={disabled} 
        className={cn(styles.button, className, styles[appearence], {[styles.disabled] : disabled})}>
        {children}
        </button>
    );
}