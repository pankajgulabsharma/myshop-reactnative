
export function getCommaSeparatedAmount(decimal=2,amount=0) {
  const fixedNumber = Number.parseFloat(amount).toFixed(decimal);
    return String(fixedNumber).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
