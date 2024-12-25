
// product card
export default function formatPrice(price: number, currency: string = "USD") {
    const numberFormat = Intl.NumberFormat("en", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
        useGrouping: false,
    })
    return numberFormat.format(price);
}

// total item


// product info

// checkout
