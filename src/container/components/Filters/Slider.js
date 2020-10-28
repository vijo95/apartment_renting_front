import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';


export default class ContinuousSlider extends Component {

  state = {
    value: 5000,
  }

  handleChange = (event) => {
    event.preventDefault()
    if(0 <= parseInt(event.target.outerText)){
      this.setState({
        value:parseInt(event.target.outerText),
      },this.props.roomFilter("price",parseInt(event.target.outerText)))
    }
  };
  
  render(){

    return (
      <div>
        <label htmlFor="price">
          Máximo precio: ${this.state.value}
        </label>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider
              onChange={this.handleChange}
              defaultValue={5000}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={10000}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
