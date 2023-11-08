import { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { convert, toCelsius, toFarenheit } from './../lib/Converter';
export default class Calculator extends Component {
  state = {
    scale: 'c',
    temperature: '',
  };
  handleChange = (e, scale) => {
    this.setState({
      scale: scale,
      temperature: e.target.value,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const farenheit =
      scale === 'c' ? convert(temperature, toFarenheit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={farenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}
