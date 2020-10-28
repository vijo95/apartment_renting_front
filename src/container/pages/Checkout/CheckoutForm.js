import React from 'react';
import axios from 'axios'
import { submitCheckout } from '../../../constants'
import Cookie from 'universal-cookie'
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class CheckoutForm extends React.Component {
  state = {
    customer_cookie_id: '',

    fname: '',
    lname: '',
    email: '',
    phone: '',

    loading: false,
  };

  componentDidMount(){
    const cookie = new Cookie();
    this.setState({
      customer_cookie_id: cookie.get('customer_id')
    })
  }

  submitHandler = event => {
    event.preventDefault();
    this.setState({
      loading:true
    })
    event.target.className += ' was-validated';
    const {
      fname,lname,
      email, phone,
      customer_cookie_id
    } = this.state

    if(this.isEmptyOrSpace(fname) || this.isEmptyOrSpace(lname) ||
      this.isEmptyOrSpace(email) || this.isEmptyOrSpace(phone) || 
      this.isEmptyOrSpace(customer_cookie_id)){
      this.setState({
        loading:false
      })
      return
    } else {
      axios
        .post(submitCheckout,{
          customer_cookie_id: customer_cookie_id,
          name: fname,
          last_name: lname,
          phone: phone,
          email: email
        })
        .then(res => {
          if(res.data.message === "ok"){
            window.location.href = "/payment/";
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading:false
          })
        })
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isEmptyOrSpace = (string) => {
    return string === '' || string.trim() === ''
  }

  render() {

    const { loading } = this.state

    return (
      <div>
        { loading ? <div className="loader"></div> :
          <form
            className='needs-validation'
            onSubmit={this.submitHandler}
            noValidate
            style={{padding:'15px'}}
          >
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput
                  icon='user'
                  value={this.state.fname}
                  name='fname'
                  onChange={this.changeHandler}
                  type='text'
                  id='materialFormRegisterNameEx'
                  label='Nombre(s)'
                  outline
                  required
                >
                  <div className='invalid-feedback ml-3 pl-3'>
                    Por favor ingrese su nombre.
                  </div>
                  <div className='valid-feedback ml-3 pl-3'>Tiene buena pinta</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput
                  icon='address-card'
                  value={this.state.lname}
                  name='lname'
                  onChange={this.changeHandler}
                  type='text'
                  id='materialFormRegisterEmailEx2'
                  label='Apellido(s)'
                  outline
                  required
                >
                  <div className='invalid-feedback ml-3 pl-3'>
                    Por favor ingrese su apellido.
                  </div>
                  <div className='valid-feedback ml-3 pl-3'>Tiene buena pinta</div>
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput
                  icon='at'
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type='email'
                  id='materialFormRegisterConfirmEx3'
                  name='email'
                  label='E-mail'
                  outline
                  required
                >
                  <div className='invalid-feedback ml-3 pl-3'>
                    Por favor ingrese una dirección de e-mail.
                  </div>
                  <small id='emailHelp' className='form-text text-muted'>
                    A este e-mail le enviaremos los detalles de la reserva
                  </small>
                  <div className='valid-feedback ml-3 pl-3'>Tiene buena pinta</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput
                  icon='mobile-alt'
                  value={this.state.phone}
                  onChange={this.changeHandler}
                  type='text'
                  id='materialFormRegisterPasswordEx4'
                  name='phone'
                  label='Número de teléfono móvil o fijo'
                  outline
                  required
                >
                  <div className='invalid-feedback ml-3 pl-3'>
                    Por favor ingrese su número de teléfono móvil o fijo.
                  </div>
                  <div className='valid-feedback ml-3 pl-3'>Tiene buena pinta</div>
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBCol style={{textAlign:'center'}}>
              <MDBBtn style={{borderRadius:'5rem'}} color='info' type='submit'>
              <i className="fas fa-dollar-sign mr-2"></i>
                Continuar al Pago
              </MDBBtn>
            </MDBCol>
          </form>
        }
      </div>
    );
  }
}

export default CheckoutForm;