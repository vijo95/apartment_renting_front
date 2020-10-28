import React, {Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class NativeSelects extends Component {
  state = {
    name: 'hai',
    guests: ''
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      ...this.state,
      [name]: event.target.value,
    },this.props.roomFilter("guests",parseInt(event.target.value)))

  };

  render() {

    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-guests-native-simple">Húespedes</InputLabel>
          <Select
            native
            value={this.state.guests}
            onChange={this.handleChange}
            label="Huéspedes"
            inputProps={{
              name: 'guests',
              id: 'outlined-guests-native-simple',
            }}
            className="select-guests"
          >
            <option aria-label="None" value="" />
            <option value={1}>Sólo 1</option>
            <option value={2}>Hasta 2</option>
            <option value={3}>Hasta 3</option>
            <option value={4}>Hasta 4</option>
            <option value={5}>Hasta 5</option>
            <option value={6}>Hasta 6</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}
