'use client';

import { DocumentList } from "@/components";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


export default function SearchResultMain() { 

  const state = useSelector<RootState>((s) => s.searchData);  
    console.log(state);
    
  
  return (
    <div>
      <DocumentList data={[]}/>
    </div>
  );

}
  