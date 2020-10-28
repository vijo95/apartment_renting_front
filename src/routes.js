import React from "react";
import { Switch, Route } from "react-router-dom";
import Hoc from "./hoc";

import Home from './container/pages/Home/Home'

import Rooms from './container/pages/Rooms/Rooms'
import SingleRoom from './container/pages/SingleRoom/SingleRoom'

import Checkout from './container/pages/Checkout/Checkout'
import Payment from './container/pages/Payment/Payment'

import PaymentSuccess from './container/pages/PaymentInfoPages/PaymentSuccess'
import PaymentPending from './container/pages/PaymentInfoPages/PaymentPending'
import PaymentRejected from './container/pages/PaymentInfoPages/PaymentRejected'

const BaseRouter = () => (
  <Hoc>
    <Switch>
      <Route exact path="/" component={Home} />
      
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/single-room/:depto_id" component={SingleRoom} />
      
      <Route exact path="/checkout/" component={Checkout} />
      <Route exact path="/payment/" component={Payment} />

      <Route exact path="/payment-success/" component={PaymentSuccess}/>
      <Route exact path="/payment-pending/" component={PaymentPending}/>
      <Route exact path="/payment-rejected/" component={PaymentRejected}/>
    </Switch>
  </Hoc>
)

export default BaseRouter;