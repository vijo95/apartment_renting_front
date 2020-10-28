import React, { Component } from 'react'
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo'

export default class PaymentPending extends Component {
  render() {
    return (
      <div>
         <PaymentInfo 
          color="warning-color"
          header="Pago Pendiente"
          title="Estamos procesando tu pago"
          description="No te preocupes, en menos de 3 días hábiles te avisaremos por e-mail si se acreditó. 
            Le hemos enviado un mail con los detalles de la reserva"
          color2="warning"
        />
      </div>
    )
  }
}
