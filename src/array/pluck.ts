export const pluck = (elements : [], field: string) =>{
    return elements.map((element) => element[field]); 
};