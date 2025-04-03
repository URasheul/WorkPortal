"use client";

import { JSX, SyntheticEvent, useState } from "react";
import styles from "./InputList.module.css";
import Form from "next/form";
import { Button, Input, Textarea } from "@/components";
import cn from "classnames";


export function InputList(): JSX.Element {

    const [isChecked, setIsChecked] = useState<boolean>(true);

    function onChange(e:SyntheticEvent<HTMLInputElement>) {      
        setIsChecked(e.currentTarget.checked);       
    } 
    

    return (
        <Form action={''} className={styles.form}>
            <div className={styles.inputWrapper}>

                <label className={styles.label}>Ввести вручную:</label>                
                <Input defaultChecked={isChecked} onChange={(e)=> onChange(e)} type="checkbox" className={styles.chekbox}/>
                
                <label className={styles.label}>Обозначение:</label> 
                <Input disabled={!isChecked} className={cn(styles.input, styles.inputDocNumber, {[styles.inputDisabled] : !isChecked})}/>
                                
                {
                    isChecked
                    ?
                    <></>
                    :
                    <>
                        <label className={styles.label}>Проект:</label> 
                        <Input className={styles.input} placeholder="20871"/>
                    
                        <label className={styles.label}>Код:</label> 
                        <Input className={styles.input} placeholder="360"/>
                    
                        <label className={styles.label}>Конструктивная группа:</label>
                        <Input className={styles.input} placeholder="362"/>
                    
                        <label className={styles.label}>Номер:</label>
                        <Input className={styles.input} placeholder="1002"/>
                    </>
                }
            
                <label className={styles.label}>Статус:</label>  
                <div className={styles.documentState}>
                    <label className={styles.radioLabel}>
                        <span>Согласован</span>
                        <Input className={styles.radio} name="document-state" value="Согласован" type='radio'/>
                    </label> 
                    <label className={styles.radioLabel}>
                        <span>Не согласован</span>
                        <Input className={styles.radio} name="document-state" value="Согласован" type='radio'/>
                    </label> 
                    <label className={styles.radioLabel}>
                        <span>На согласовании</span>
                        <Input className={styles.radio} name="document-state" value="Согласован" type='radio'/>
                    </label> 
                </div>
                
                        
                <label className={cn(styles.label, styles.labelTextarea)}>Наименование:</label>                
                <Textarea className={styles.textarea}/>              
            </div>
                <Button appearence="small" className={styles.submit}>Сохранить</Button>
        </Form>
    );
}


