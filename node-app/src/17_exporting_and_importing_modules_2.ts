import { add } from "./16_exporting_and_importing_modules_1";
import { subtract } from "./16_exporting_and_importing_modules_1";

const result1 = add(1, 2);
console.log(result1);

const result2 = subtract(2, 1);
console.log(result2);

import Calculator from './16_exporting_and_importing_modules_1';

const calc = new Calculator();
console.log(calc.add(10, 5));