
export const updateObject = (oldObject, updatedObject) => {
    const a = Object.assign({}, oldObject, updatedObject);
        return a;
        // return {
        //     ...oldObject,
        //     ...updatedObject
        // };
    };