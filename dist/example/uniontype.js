"use strict";
const uniontype = (weight) => {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
};
console.log(Math.floor(uniontype(100)));
//# sourceMappingURL=unionType.js.map