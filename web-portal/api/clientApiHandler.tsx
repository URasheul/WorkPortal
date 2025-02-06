import { IDocument} from "@/interfaces/doc.interfaces";

export async function getData() {
    const data = await new Promise<string>((res) => {
        setTimeout(() => {
            res("Данные получены");
        }, 2000);
    });

    return data;
};


export async function getDocumetsList() {

    const documentsList = [
        { id: 1, docNumb: "20871.546371.3001.08", title: "Чертеж расположения оборудования в помещении сепараторов жидких отходов и палубы надстройки 4 ярю в районе 35 шп. - 180шп. ЛБ"},
        { id: 2, docNumb: "20871.544329.1009.10", title: "Чертеж расположения оборудования в помещении сепараторов жидких отходов и палубы надстройки 4 ярю в районе 35 шп. - 180шп. ЛБ"},
        { id: 3, docNumb: "20871.332511.1055.11", title: "Чертеж расположения оборудования в помещении сепараторов жидких отходов"},
        { id: 4, docNumb: "20871.332511.1055.11", title: "Чертеж расположения оборудования в помещении"},
      ];

      const response = await new Promise<IDocument[]>(res => {
        setTimeout(() => {
            res(documentsList);
        }, 3000);    
    });
    return response;
}