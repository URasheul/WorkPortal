'use client';

import { AppDispatch } from "@/store/store";
import styles from "./page.module.css";
import { Button } from "@/components";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setData } from "@/store/slices/SearchDataSlice/searchDataSlice";


const docData = [
    {id: 1, title: 'Корпус', alias: 'frame'},
    {id: 2, title: 'Достройка', alias: 'completion'},
    {id: 3, title: 'Судовые системы', alias: 'ship-systems'},
    {id: 4, title: 'Электроэнергетические системы', alias: 'electric-power-systems'},
    {id: 5, title: 'Энергетическая установка', alias: 'power-plant'},
    {id: 6, title: 'МСЧ', alias: 'mech-eng-draw'},
];


export default function Category() {

    const dispatch = useDispatch<AppDispatch>();
    const {project, category} = useParams<{project: string, category: string}>();

    function saveData( project: string, category: string, subCategory: string) {        
        dispatch(setData({project, category, subCategory}));
    }

       
    return (
        <div className={styles.project}>
            <h1 className={styles.title}>{project}</h1>
            <div className={styles.categories}>
                {docData.map(element => {
                    return (
                        <Button 
                        appearence={"big"} 
                        key={element.id} 
                        >
                            <Link 
                            href={{pathname : `/search-results`, 
                            query : {project, category, subCategory: element.alias}}} 
                            className={styles.link}>{element.title}
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}