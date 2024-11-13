// const check=require("./script.js");
// console.log("add ",check.add(5,3));
// console.log("subtract ",check.subtract(5,3));
// console.log("PI: ",check.PI);
// console.log("multiply ",check.multiply(5,3));

import { add,subtract,PI} from "./script2.js";
import * as obj from "./script2.js";
import multiply from "./script2.js";
console.log("add ",obj.add(5,3));
console.log("subtract ",obj.subtract(5,3));
console.log("PI: ",obj.PI);
console.log("multiply ",multiply(5,3));
