import { JSX } from "react";
import styles from "./InputList.module.css";
import Form from "next/form";
import { Button, Input, Textarea } from "@/components";
import cn from "classnames";


export function InputList(): JSX.Element {

    return (
        <Form action={''} className={styles.form}>
            <div className={styles.inputWrapper}>
                <label className={styles.label}>Проект:</label> 
                <Input className={styles.input}/>
            
                <label className={styles.label}>Код:</label> 
                <Input className={styles.input} placeholder="360"/>
            
                <label className={styles.label}>Конструктивная группа:</label>
                <Input className={styles.input} placeholder="362"/>
            
                <label className={cn(styles.label, styles.labelTextarea)}>Наименование:</label>                
                <Textarea/>              
            </div>
                <Button>Сохранить</Button>                   
        </Form>      
    );
}


{/* <div className={styles.inputWrapper}>
<label className={styles.label}>Проект:</label> 
<Input className={styles.input}/>
</div>
<div className={styles.inputWrapper}>
<label className={styles.label}>Код:</label> 
<Input className={styles.input} placeholder="360"/>
</div>
<div className={styles.inputWrapper}>
<label className={styles.label}>Конструктивная группа:</label>
<Input className={styles.input} placeholder="362"/>               
</div>
<div className={styles.inputWrapper}>
<label className={styles.label}>Наименование:</label>                
<Textarea/>              
</div> */}