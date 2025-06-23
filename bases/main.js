"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
    console.log(Validations.validateText('hola'));
    console.log(Validations.validateDate(new Date(1993, 7, 30)));
    console.log(Validations.validateDate(new Date()));
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map