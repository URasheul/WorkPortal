import { IDocument} from "@/interfaces/doc.interfaces";
import { DOCUMENT_LIST } from "./db";

export async function getDocumetById(id: string) {

    const data = await new Promise<string>((res) => {
        setTimeout(() => {
            res(`Данные с id:${id} получены`);
        }, 3000);
    });

    return data;
};


export async function getDocumetsList() {    

      const response = await new Promise<IDocument[]>(res => {       
            res(DOCUMENT_LIST);           
    });
    return response;
}