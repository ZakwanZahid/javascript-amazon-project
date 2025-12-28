import {formatCurrency} from '../scripts/utils/formatCurrency.js';


if (formatCurrency(2095) === '20.95') {
    console.log('Test passed: formatCurrency(2095) === "20.95"');

}
else {
    console.error('Test failed: formatCurrency(2095) !== "20.95"');
}


if (formatCurrency(100) === '1.00') {
    console.log('Test passed: formatCurrency(100) === "1.00"');
}
else {
    console.error('Test failed: formatCurrency(100) !== "1.00"');
}
if (formatCurrency(9999) === '99.99') {
    console.log('Test passed: formatCurrency(9999) === "99.99"');
} else {
    console.error('Test failed: formatCurrency(9999) !== "99.99"');
}