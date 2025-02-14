import { JSX } from "react";
import styles from "./InputList.module.css";
import Form from "next/form";


export function InputList({...props}): JSX.Element {

    return (
        <Form action={''} className={styles.form}>

            <div className={styles.inputWrapper}>
                <label>Код:</label>
                <input list={'eskd-class-list'} type='number' name="eskd-class" className={styles.input}/>
            </div>

            <datalist id={'eskd-class-list'}>
                <option value={360}/>
                <option value={362}/>
                <option value={363}/>
            </datalist>
            <div className={styles.inputWrapper}>
                <label>Конструктивная группа:</label>
                <input list={'construct-group-list'} type='number' name="construct-group" className={styles.input}/>
            </div>
            <datalist id={'construct-group-list'}>
                <option value={311}/>
                <option value={121}/>
                <option value={363}/>
            </datalist>
            <label>Наименование:</label>
            <textarea name="title" className={styles.textarea} rows={2}/>
        </Form>
      
    );
}