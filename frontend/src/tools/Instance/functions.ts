import {
    IItemWithId,
} from './types';

export function findById<IItem extends IItemWithId>(id: string, items: IItem[]): IItem | null {
    return items.find((item) => item.id === id) || null;
}

export function findIndexById<IItem extends IItemWithId>(id: string, items: IItem[]): number {
    return items.findIndex((item) => item.id === id);
}

export function expandBySkip<IItem extends IItemWithId>(skip: number, oldItems: IItem[] | null, newItems: IItem[]): [IItem[]] {
    return [[...(skip === 0 ? [] : oldItems || []), ...newItems]];
}

export function appendNew<IItem extends IItemWithId>(item: IItem, items: IItem[] | null, total: number | null, destination: 'start' | 'end' = 'end'): [IItem[], number] {
    if (!items) {
        return [[item], 1];
    }

    const newItems = [...items];
    const newTotal = (total || items.length) + 1;

    switch (destination) {
        case 'start': {
            newItems.unshift(item);
            break;
        }
        case 'end': {
            newItems.push(item);
            break;
        }
    }

    return [newItems, newTotal];
}

export function updateById<IItem extends IItemWithId>(item: IItem, items: IItem[] | null): [IItem[] | null] {
    if (!items) {
        return [items];
    }

    const index = items.findIndex((elem) => elem.id === item.id);

    if (index === -1) {
        return [items];
    }

    const newItems = [...items];

    newItems[index] = item;

    return [newItems];
}

export function removeById<IItem extends IItemWithId>(id: string, items: IItem[] | null, total: number | null): [IItem[] | null, number] {
    const newItems = items ? items.filter((item) => item.id !== id) : null;
    const newTotal = total !== null && total - 1 >= 0 ? total - 1 : 0;

    return [newItems, newTotal];
}
