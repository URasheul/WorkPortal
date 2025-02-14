import ResultData from "@/components/ResultData/ResultData";



export default async function SearchResultMain({ searchParams } : {searchParams : Promise<{[key : string] : string | string[] | undefined}>}) { 

  const data = await searchParams;
  console.log(data);
   
  
  return (
    <div>
      Results
      <ResultData id={'1'}/>
    </div>
  );

}
  