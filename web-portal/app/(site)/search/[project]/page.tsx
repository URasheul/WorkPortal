import { Button } from "@/components";
import styles from "./page.module.css";
import Link from "next/link";
import { ICategoryData } from "@/interfaces/categoryData.interface";


const categoryData: ICategoryData[] = [
    { id: 1, alias: 'technical-doc', title: 'Технический проект' },
    { id: 2, alias: 'working-doc', title: 'Рабочая конструкторская документация' },
    { id: 3, alias: 'acceptance-doc', title: 'Приемо-сдаточная документация' },
    { id: 4, alias: 'operational-doc', title: 'Эксплуатационная документация' },
    { id: 5, alias: 'contract-doc', title: 'Договорная документация' },
    { id: 6, alias: 'foreign-doc', title: 'Иностранная документация' }
];


export default async function Project({ params }:{params : { project : string}}) {

    const data = (await params).project;

        return (
            <div className={styles.project}>
                <h1 className={styles.title}>{data}</h1>
                <div className={styles.categories}>
                    {categoryData.map(element => {
                        return (
                            <Button appearence={"big"} key={element.id}>
                                <Link href={`/search/${data}/${element.alias}`} className={styles.link}>{element.title}
                                </Link>
                            </Button>
                        );
                    })}
                </div>
            </div>
        );
};
