"use client";

import { useCallback, useEffect, useState } from "react";
import { ResultDataProps } from "./ResultData.props";
import { getDocumetById } from "@/api/clientApiHandler";

// import { useEffect, useState } from "react";
// import styles from "./page.module.css";
// import { getData } from "@/api/clientApiHandler";

// const documentData =  { docNumb: "20871.332511.1055.11", title: "Чертеж расположения оборудования в помещении сепараторов жидких отходов и палубы надстройки 4 ярю в районе 35 шп. - 180шп. ЛБ"};


export default function ResultData({ id }:ResultDataProps) {  

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>('');

  const getData = useCallback(async () => {
    setIsLoading(true);
    const response = await getDocumetById(id);
    setIsLoading(false);
    setData(response);
  }, []);
  
  useEffect(() => {
    try {      
      getData();      
    }catch(e) {
      setIsLoading(false);
      console.log(e);      
    }
    
  }, [getData, id]);


    return (
      <div>
        {isLoading && <span>Loading...</span>}
        {data}
      </div>
    );   
    
  }


  // <div className={styles.result}>  
  //   <div className={styles.resultItem}>
  //     <span className={styles.label}>Обозначение:</span>
  //     <span className={styles.title}>{documentData.docNumb}</span>
  //   </div>    
  //   <div className={styles.resultItem}>
  //     <span className={styles.label}>Наименование:</span>
  //     <span className={styles.title}>{documentData.title}</span>
  //   </div>    
  //   <div className={styles.resultItem}>
  //     <span className={styles.label}>Дата загрузки:</span>
  //     <span className={styles.title}>{new Date().toString()}</span>
  //   </div>    
  //   <div className={styles.resultItem}>
  //     <span className={styles.label}>Файлы:</span>
  //   </div>    
  // </div>
  