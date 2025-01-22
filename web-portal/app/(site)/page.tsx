import styles from "./page.module.css";
import { Button, Input } from "@/components";


export default function Home() {

  return (
    <div className={styles.main}>      
      <Input/>
      <Button>Поиск</Button>      
    </div>
  );
}
