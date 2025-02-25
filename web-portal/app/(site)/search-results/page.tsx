'use client';

import { getDocumetsList } from "@/api/clientApiHandler";
import { DocumentList } from "@/components";
import ResultData from "@/components/ResultData/ResultData";
import { IDocument } from "@/interfaces/doc.interfaces";
import { useEffect, useState } from "react";



export default function SearchResultMain({ searchParams } : {searchParams : Promise<{[key : string] : string | undefined}>}) { 

  const [params, setParams] = useState<{[key : string] : string | undefined}>({});
  const [documentsData, setDocumetsData] = useState<IDocument[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [seletedItem, setSelectedItem] = useState<number>();

  useEffect(() => {
    getData();    
  }, []);

  async function getData() {   
      const data = await searchParams;
      const info = await getDocumetsList();
      setDocumetsData(info);
      setIsLoading(false);
      setParams(data);   
  }

  function onItemClick(id: number) {
    setSelectedItem(id);
  }
   
  return (    
    <>   
      <DocumentList data={documentsData} onClick={onItemClick}/>
      {seletedItem && <ResultData id={`${seletedItem}`}/>}
    </>
  );

}
  