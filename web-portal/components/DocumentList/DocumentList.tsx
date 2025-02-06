
import styles from "./DocumentList.module.css";
import cn from "classnames";
import { DocumentListProps } from "./DocumentList.props";


export function DocumentList({data} : DocumentListProps) {  
  
   
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
              <div key={elem.id} 
              className={cn(styles.heroItem, styles.heroItemDoc, { [styles.itemPainted] : elem.id % 2 == 0})}
              >
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
  