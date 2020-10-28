import React from 'react'
import axios from 'axios'
import { reservedDatesDepto } from '../../../constants'
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/locale/es'

import { MDBBtn } from 'mdbreact';

import './DatePickerRange.css'
import 'react-day-picker/lib/style.css';

const monthsInSpanish = [
    'Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
]

export default class DatePickerRange extends React.Component {

  state = {
    dates_list: null,
  }

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null, // Keep track of the last day for mouseEnter.
    };
  }

  componentDidMount(){
    axios
      .post(reservedDatesDepto,{
        depto_id: this.props.depto_id
      })
      .then(res => {
        this.setState({
          dates_list: this.parseDates(res.data.depto_reservation_list)
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }

  handleDayClick(day) {
    const { from, to, dates_list } = this.state;
    for (let i = 0; i < dates_list.length; i++) {
      if(dates_list[i].from <= day.setHours(0,0,0,0) && 
        day.setHours(0,0,0,0) <= dates_list[i].to){
        this.setState({
          from: null,
          to: null,
          enteredTo: null,
        });
      }
    }
    if (from && to && day >= from && day <= to) {
      this.handleResetClick()
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      for (let i = 0; i < dates_list.length; i++) {
        if(dates_list[i].from <= day.setHours(0,0,0,0) && 
          day.setHours(0,0,0,0) <= dates_list[i].to){
          this.setState({
            from: null,
            to: null,
            enteredTo: null,
          })
          return
        }
      }
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      for (let i = 0; i < dates_list.length; i++) {
        if(dates_list[i].from <= day.setHours(0,0,0,0) && 
          day.setHours(0,0,0,0) <= dates_list[i].to){
          this.setState({
            from: null,
            to: null,
            enteredTo: null,
          })
          return
        }
      }
      for (let i = 0; i < dates_list.length; i++) {
        if (from.setHours(0,0,0,0) <= dates_list[i].from && 
          dates_list[i].to <= day.setHours(0,0,0,0)){
          this.setState({
            from: null,
            to: null,
            enteredTo: null,
          })
          return
        }
      }
      this.setState({
        to: day,
        enteredTo: day,
      },this.props.getStartEndDate(from.toLocaleDateString('en-US'),day.toLocaleDateString('en-US')));
    }
  }

  handleDayMouseEnter(day) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }

  handleResetClick() {
    this.setState(
      this.getInitialState(),
      this.props.getStartEndDate(null,null)
    );
  }

  translateMonth = (month) => {
    for (let i = 0; i <= 11; i++) {
      return monthsInSpanish[month]
    }
  }

  translateDateToWordFormat = (date) => {
    return `${date.split('/')[1]} de 
      ${this.translateMonth(parseInt(date.split('/')[0])-1)} 
      del ${date.split('/')[2]}`
  }

  parseDates = (depto_reservation_list) => {
    var dates_list = []
    depto_reservation_list.forEach(depto => {
      var end_date = new Date(
        parseInt(depto.end_date.split("-")[0]),
        parseInt(depto.end_date.split("-")[1])-1,
        parseInt(depto.end_date.split("-")[2]), 
      )
      end_date.setDate(end_date.getDate()-1)
      end_date.toDateString()
      dates_list.push({
        from: new Date(
          parseInt(depto.start_date.split("-")[0]),
          parseInt(depto.start_date.split("-")[1])-1,
          parseInt(depto.start_date.split("-")[2]), 
        ),
        to: end_date
      })
    });
    return dates_list
  }

  render() {
    const { dates_list } = this.state
    const { from, to, enteredTo } = this.state;
    const modifiers = { 
      start: from, 
      end: enteredTo, 
      highlighted: dates_list
    };
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];

    return (
      <div>
        <div style={{color:'#0091EA'}}>
          <i style={{fontWeight:'', color:'red'}}>
            Los días en rojo ya están reservados
          </i><br/>
          {!from && !to && 'Por favor eliga el primer día.'}
          {from && !to && 'Por favor eliga el último día.'}
          {from &&
            to &&
            <span>
              Reserva para el día <i style={{fontWeight:'bold'}}> 
                {this.translateDateToWordFormat(from.toLocaleDateString('en-US'))} 
              </i><br/> al día <i style={{fontWeight:'bold'}}>
              {this.translateDateToWordFormat(to.toLocaleDateString('en-US'))}</i>
            </span>}{' '}
          {from && to && (
          <>
            <br/>
            <MDBBtn className="btn-deshacer" color="info" onClick={this.handleResetClick}>
              Deshacer
            </MDBBtn>
          </>
          )}
        </div>
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
          showWeekNumbers={true}
          locale='es'
          localeUtils={MomentLocaleUtils}
        />
        <Helmet>
          <style>
            {`.Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                background-color: #f0f8ff !important;
                color: #4a90e2;
              }
              .Range .DayPicker-Day {
                border-radius: 0 !important;
              }
              .DayPicker-Day--highlighted {
                background-color: #FF5252;
                color: white;
              }`
            }
        </style>
        </Helmet>
      </div>
    );
  }
}