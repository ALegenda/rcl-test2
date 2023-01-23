import {
    appendNew,
    expandBySkip,
    findById,
    findIndexById,
    removeById,
    updateById,
} from './functions';

class Instance {
    public static findById = findById;
    public static findIndexById = findIndexById;
    public static expandBySkip = expandBySkip;
    public static appendNew = appendNew;
    public static updateById = updateById;
    public static removeById = removeById;
}

export default Instance;
