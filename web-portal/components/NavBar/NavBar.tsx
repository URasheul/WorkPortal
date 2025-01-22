import { JSX } from "react";
import styles from "./NavBar.module.css";
import cn from "classnames";
import Link from "next/link";


export function NavBar(): JSX.Element {

    return (
        <div className={cn(styles.header)}>
            <Link href={'/'} className={styles.text}>Поиск</Link>
            <Link href={'/search'} className={styles.text}>Расширенный поиск</Link>
            <Link href={'/create-document'} className={styles.text}>Создать документ</Link>
        </div>
    );
}