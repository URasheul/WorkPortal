
export async function getData() {
    const data = await new Promise<string>((res) => {
        setTimeout(() => {
            res("Данные получены");
        }, 2000);
    });

    return data;
};