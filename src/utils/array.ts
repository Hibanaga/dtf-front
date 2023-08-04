export const chunkArray = (arr: any[], cnt: number) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

export function dedupeObjects(array: any[], key: string): any[] {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[key] === item[key]
        )),
    );
}

export function groupObjects(
    elements: any[],
    onId: (element: any) => string,
    onData?: (element: any, id: string) => any,
): any[] {
    const output: { id: string, data: any, elements: any[] }[] = [];

    const addToGroup = (groupId: any, groupData: any, element: any) => {
        let addressGroupIndex = output.findIndex(group => group.id === groupId);
        if (addressGroupIndex === -1) {
            output.push({
                id: groupId,
                data: groupData,
                elements: [],
            });
            addressGroupIndex = output.findIndex(group => group.id === groupId);
        }
        output[addressGroupIndex] = {
            ...output[addressGroupIndex],
            elements: dedupeObjects([
                ...output[addressGroupIndex].elements,
                element,
            ], 'id'),
        };
    };

    elements.forEach(element => {
        const id = onId(element);
        const data = onData && onData(element, id) || null;
        addToGroup(id, data, element);
    });

    return output;
}
