const generateSummary = (cartItems) => {
  if (cartItems.length > 0) {
    let totalQty = 0
    let grossAmount = 0
    let totalDiscount = 0
    let netAmount = 0
    let totalCharges = 0

    cartItems.forEach((itemLine) => {
      totalQty = totalQty + itemLine?.LineQty

      totalCharges =
        totalCharges +
        itemLine?.chargeDetails?.chargesInfo?.reduce(
          (total, currentValue) => total + currentValue.amount,
          0,
        )
      grossAmount =
        grossAmount + itemLine?.SP * itemLine?.LineQty + totalCharges
      totalDiscount = totalDiscount + itemLine?.ItemTotalDiscAmt
      netAmount = netAmount + itemLine?.LineAmtAftrDisc
    })
    return {
      totalQty: totalQty.toFixed(2),
      grossAmount: grossAmount.toFixed(2),
      totalDiscount: totalDiscount.toFixed(2),
      netAmount: netAmount.toFixed(2),
      totalCharges: totalCharges.toFixed(2),
      received: (0.0).toFixed(2),
      balance: netAmount.toFixed(2),
      changeDue: (0).toFixed(2),
    }
  }
}

export default generateSummary
