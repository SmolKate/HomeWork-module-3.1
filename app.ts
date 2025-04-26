interface totalPriceArgs {
    price: number
    discount?: number | undefined
    isInstallment?: boolean | undefined
    months?: number | undefined
}

const totalPrice = (args: totalPriceArgs) => {
    const { price, discount, isInstallment, months } = args
    const installmentMonths = isInstallment && months ? months : 1
    const priceDiscount = 1 - Number(discount) / 100
    return price * priceDiscount / installmentMonths
}

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log(price)