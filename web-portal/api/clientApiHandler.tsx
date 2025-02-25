import { IDocument} from "@/interfaces/doc.interfaces";
import { DOCUMENT_LIST } from "./db";

export async function getDocumetById(id: string){

    
    const data = {
        title: 'Название',
        description: '22222.222222.2222.22',
        date: '2025-01-01',
        status: 'Согласован',
        file: `Документ с id: ${id} загружен`
    };

    return data;
};


export async function getDocumetsList() {    

      const response = await new Promise<IDocument[]>(res => {       
            res(DOCUMENT_LIST);           
    });
    return response;
}