"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCpf = void 0;
function validateCpf(cpf) {
    let cleansedCpf = cleanString(cpf);
    let checkCpf = cleansedCpf.slice(0, -2);
    for (let j = 0; j <= 1; j++) {
        let sum = 0;
        let digit;
        for (let i = 0; i < checkCpf.length; i++) {
            sum += Number(checkCpf[i]) * (10 + j - i);
        }
        ;
        if (sum % 11 < 2) {
            digit = 0;
        }
        else {
            digit = 11 - sum % 11;
        }
        ;
        checkCpf += digit.toString();
    }
    if (cleansedCpf === checkCpf) {
        return true;
    }
    ;
    return false;
}
exports.default = validateCpf;
;
function cleanString(cpf) {
    return cpf.replace(/\.|\-/g, "");
}
function formatCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
exports.formatCpf = formatCpf;
