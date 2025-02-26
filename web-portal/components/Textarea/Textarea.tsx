import { JSX } from "react";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.props";
import cn from "classnames";


export function Textarea({placeholder, className, ...props} : TextareaProps): JSX.Element {

    return (
        <textarea className={cn(styles.textarea, className)} rows={3} {...props} placeholder={placeholder}>

        </textarea>
    );
}