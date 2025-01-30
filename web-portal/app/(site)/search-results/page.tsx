"use client";

import styles from "./page.module.css";
import cn from "classnames";

const data = [
  { id: 1, docNumb: "20871.546371.3001.08", title: "Чертеж расположения оборудования в помещении сепараторов жидких отходов и палубы надстройки 4 ярю в районе 35 шп. - 180шп. ЛБ"},
  { id: 2, docNumb: "20871.544329.1009.10", title: "Чертеж расположения оборудования в помещении сепараторов жидких отходов и палубы надстройки 4 ярю в районе 35 шп. - 180шп. ЛБ"},
  { id: 3, docNumb: "20871.332511.1055.11", title: "Чертеж расположения оборудования в помещении сепараторов жидких отходов"},
  { id: 4, docNumb: "20871.332511.1055.11", title: "Чертеж расположения оборудования в помещении"},
];

export default function SearchResultMain() {

    return (     
      <div>     
        <div className={styles.hero}>    
          <div className={styles.heroItem}>
            <span className={cn(styles.item, styles.itemHeader, styles.number)}>№</span>
            <span className={cn(styles.item, styles.itemHeader, styles.name)}>Обозначение</span>
            <span className={cn(styles.item, styles.itemHeader)}>Наименование</span>
          </div>  
          {data.map(elem => {
            return (    
              <div key={elem.id} className={cn(styles.heroItem, styles.heroItemDoc, { [styles.itemPainted] : elem.id % 2 == 0})}>
                <span className={cn(styles.item, styles.number, styles.docItem)}>{elem.id}</span>
                <span className={cn(styles.item, styles.name, styles.docItem)}>{elem.docNumb}</span>
                <span className={cn(styles.item, styles.docItem)}>{elem.title}</span>            
              </div>            
          );
          })}
        </div>      
        <div>

        </div>  
      </div> 
    );
  }
  