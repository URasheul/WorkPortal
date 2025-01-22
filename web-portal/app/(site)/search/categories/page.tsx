import { Button } from "@/components/Button/Button";
import styles from "./page.module.css";



export default function Categories() {
  return (
    <div className={styles.main}>
      <Button>РКД</Button>
      <Button>ПСД</Button>
      <Button>Договоры</Button>
    </div>
  );
}