'use client';

import React from "react";
import styles from "./layout.module.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";


export default function SearchResultsLayout({
children
} : Readonly <{
    children : React.ReactNode
}>
){
       
    return (
        <Provider store={store}>            
            <div className={styles.layout}>
            {children}            
            </div>       
        </Provider>
    );
}