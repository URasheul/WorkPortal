import { JSX } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";


export function Button({children, appearence = "small"} : ButtonProps): JSX.Element {

    return (
        <button className={cn(styles.button, styles[appearence])}>
            {children}
        </button>
    );
}