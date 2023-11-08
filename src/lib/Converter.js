export function toCelsius(farenheit) {
  return (5 * (farenheit - 32)) / 9;
}
export function toFarenheit(celsius) {
  return (9 * celsius) / 5 + 32;
}

export function convert(temperature, convertTo) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertTo(input);
  const roundedOutput = Math.round(output * 1000) / 1000;
  return roundedOutput.toString();
}
