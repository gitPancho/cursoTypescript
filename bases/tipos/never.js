"use strict";
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 123;
    };
    error('auxilio');
})();
