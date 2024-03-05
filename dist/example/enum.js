"use strict";
var shirtSize;
(function (shirtSize) {
    shirtSize[shirtSize["small"] = 1] = "small";
    shirtSize[shirtSize["medium"] = 2] = "medium";
    shirtSize[shirtSize["large"] = 3] = "large";
})(shirtSize || (shirtSize = {}));
let mySize = shirtSize.medium;
console.log(mySize);
//# sourceMappingURL=enum.js.map