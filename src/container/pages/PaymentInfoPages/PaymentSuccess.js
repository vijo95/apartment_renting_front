import React, { Component } from 'react'
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo'

export default class PaymentSuccess extends Component {
  render() {
    return (
      <div>
        <PaymentInfo 
          color="success-color"
          header="¡Listo!"
          title="Se acreditó tu pago"
          description="En tu resumen verás el cargo como Deptos CP, 
            le hemos enviado un e-mail con mas detalles"
          color2="success"
        />
      </div>
    )
  }
}
