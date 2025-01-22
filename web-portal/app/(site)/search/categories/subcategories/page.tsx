import { Button } from "@/components/Button/Button";
import styles from "./page.module.css";

export default function Subcategory() {
    return (
      <div className={styles.sub}>
        <Button>РКД</Button>
        <Button>ПСД</Button>
        <Button>Договоры</Button>
      </div>
    );
  }