import { Button } from "@/components/Button/Button";
import styles from "./page.module.css";
import Link from "next/link";

export default function Search() {
  return (
    <div className={styles.search}>
        <Button><Link className={styles.link} href={'/search/20871'}>20871</Link></Button>
        <Button><Link className={styles.link} href={'/search/23870'}>23870</Link></Button>
        <Button><Link className={styles.link} href={'/search/20873'}>20873</Link></Button>                
    </div>
  );
}