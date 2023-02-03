export default function validateCpf(cpf:string) {
  let cleansedCpf = cleanString(cpf);
  let checkCpf = cleansedCpf.slice(0, -2);

  for(let j = 0; j <= 1; j++) {
  
    let sum = 0;
    let digit:number;
    
    for(let i = 0; i < checkCpf.length; i++) {
      sum += Number(checkCpf[i]) * ( 10 + j - i);
    };
  
    if(sum/11 < 2) {
      digit = 0;
    }else {
      digit = 11 - sum % 11;
    };
  
    checkCpf += digit.toString();
  }

  if(cleansedCpf === checkCpf) {
    return true
  };

  return false;
};

function cleanString(cpf:string) {
  return cpf.replace(/\.|\-/g, "");
}

export function formatCpf(cpf:string){
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}