import React from "react";
import styles from "./layout.module.css";


export default function SearchResultsLayout({
children,
result
} : Readonly <{
    children : React.ReactNode,
    result : React.ReactNode
}>
){


    return (
        <div className={styles.layout}>
        {children}
        {result}
        </div>
    );
}