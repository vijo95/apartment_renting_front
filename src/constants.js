const localhost = "http://localhost:8000"
const realHost = "https://deptos-cp.herokuapp.com"

const apiURL = "/api"

export const endpoint = `${realHost}${apiURL}`

export const newCustomer = `${endpoint}/new-customer/`

export const deptos = `${endpoint}/deptos/`
export const deptoDetail = `${endpoint}/depto-detail/`

export const reservedDatesDepto = `${endpoint}/reserved-dates-depto/`
export const reserveDepto = `${endpoint}/reserve-depto/`
export const customerReservations = `${endpoint}/customer-reservations/`
export const deleteDeptoReservation = `${endpoint}/delete-depto-reservation/`

export const submitCheckout = `${endpoint}/submit-checkout/`
export const submitPayment = `${endpoint}/submit-payment/`