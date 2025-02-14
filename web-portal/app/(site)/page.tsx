'use client';

import styles from "./page.module.css";
import { Button, Input } from "@/components";
import Form from "next/form";


export default function Home() {

  return (     
    <Form className={styles.main} action={'/search-results'}>
      <Input name="query"/>
      <Button>Поиск</Button> 
    </Form>     
  );
}
