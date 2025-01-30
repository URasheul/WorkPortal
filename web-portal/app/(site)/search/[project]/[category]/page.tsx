import styles from "./page.module.css";
import { Button } from "@/components";
import Link from "next/link";


const docData = [
    {id: 1, title: 'Корпус'},
    {id: 2, title: 'Достройка'},
    {id: 3, title: 'Судовые системы'},
    {id: 4, title: 'Электроэнергетические системыро'},
    {id: 5, title: 'Энергетическая установка'},
    {id: 6, title: 'МСЧ'},
];


export default async function Category({ params } : { params : { project: string, category : string }}) {

    const data = await params;
    
    return (
        <div className={styles.project}>
            <h1 className={styles.title}>{data.project}</h1>
            <div className={styles.categories}>
                {docData.map(element => {
                    return (
                        <Button appearence={"big"} key={element.id}>
                            <Link href={`/search-results`} className={styles.link}>{element.title}</Link>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}