"use strict";
var _a;
const getCustomer = (id) => {
    return id === 0
        ? null
        : {
            id,
            name: 'John',
            age: 30,
            salary: 1000,
            address: { city: 'New York', state: 'NY' },
        };
};
const customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.address) === null || _a === void 0 ? void 0 : _a.city);
//# sourceMappingURL=optionalChaining.js.map