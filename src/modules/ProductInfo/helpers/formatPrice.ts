export default function formatPrice(price: number, currency: string = "USD") {
    const numberFormat = Intl.NumberFormat("en", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        useGrouping: false,
    })
    return numberFormat.format(price);
}