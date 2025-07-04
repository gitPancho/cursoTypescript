namespace Validations {
    export const validateText = (text: string): boolean => {
        return text.length > 3 ? true : false;
    };
    export const validateDate = (myDate: Date): boolean => {
        return isNaN(myDate.valueOf()) ? false : true;
    };

    console.log(Validations.validateText('hola'));
    console.log(Validations.validateDate(new Date(1993, 7, 30)));
    console.log(validateDate(new Date()));
}
