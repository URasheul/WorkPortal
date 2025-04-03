'use client';


import { InputList } from "@/components";
import styles from "./page.module.css";
import { useEffect } from "react";
import { serverTest } from "@/api/serverTest";

export default function CreateDoc() {
    useEffect(() => {
      serverTest();
    }, []);

  return (
    <div className={styles.main}>
        <InputList/>        
    </div>
  );
}