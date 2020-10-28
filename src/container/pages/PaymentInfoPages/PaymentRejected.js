import React, { Component } from 'react'
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo'

export default class PaymentRejected extends Component {
  render() {
    return (
      <div>
        <PaymentInfo 
          color="danger-color"
          header="Pago Rechazado"
          title="Autorizar Pago"
          description="Debes autorizar ante tu tarjeta el pago del monto."
          color2="danger"
        />
      </div>
    )
  }
}
