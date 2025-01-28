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
        <div className={styles.hero}>      
           <span className={cn(styles.item, styles.itemHeader)}>№</span>
           <span className={cn(styles.item, styles.itemHeader)}>Обозначение</span>
           <span className={cn(styles.item, styles.itemHeader)}>Наименование</span>
          {data.map(elem => {
            return (    
              <>
                <span className={styles.item}>{elem.id}</span>
                <span className={styles.item}>{elem.docNumb}</span>
                <span className={styles.item}>{elem.title}</span>            
              </>             
          );
          })}
        </div>      
    );
  }
  