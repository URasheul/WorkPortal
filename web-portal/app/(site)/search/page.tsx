import { Button } from "@/components/Button/Button";
import styles from "./page.module.css";
import Link from "next/link";

export default function Search() {
  return (
    <div className={styles.search}>
        <Link className={styles.link} href={'/search/categories'}><Button>20871</Button></Link>
        <Button>23870</Button>
        <Button>20873</Button>   
    </div>
  );
}