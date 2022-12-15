export const panCardValidation = (text) => {
    let reger = /^([a-zA-Z]){5} ([0-9]) {4}([a-zA-Z]){1}?$/;
    if(reger.test(text)){
        return true;
    }
    return false;
}