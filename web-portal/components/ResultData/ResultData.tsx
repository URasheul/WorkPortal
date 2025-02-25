"use client";

import { useCallback, useEffect, useState } from "react";
import { ResultDataProps } from "./ResultData.props";
import { getDocumetById } from "@/api/clientApiHandler";
import styles from "./ResultData.module.css";


export default function ResultData({ id }:ResultDataProps) {  

  const [data, setData] = useState<Record<string,string>>({});

  const getData = useCallback(async () => {    
    const response = await getDocumetById(id);    
    setData(response);
  }, [id]);
  
  useEffect(() => {
    try {      
      getData();      
    }catch(e) {      
      console.log(e);      
    }    
  }, [getData, id]);


    return (
      <div className={styles.result}>
        <div className={styles.resultItem}>
          <span className={styles.label}>Обозначение:</span>
          <span className={styles.text}>{data.title}</span>
        </div>
        <div className={styles.resultItem}>
          <span className={styles.label}>Наименование:</span>
          <span className={styles.text}>{data.description}</span>
        </div>
        <div className={styles.resultItem}>
          <span className={styles.label}>Дата загрузки:</span>
          <span className={styles.text}>{data.date}</span>
        </div>
        <div className={styles.resultItem}>
          <span className={styles.label}>Статус:</span>
          <span className={styles.text}>{data.status}</span>
        </div>
        <div className={styles.resultItem}>          
          <span className={styles.label}>Файлы:</span>
          <span className={styles.text}>{data.file}</span>
        </div>       
      </div>
    );   
    
  }

