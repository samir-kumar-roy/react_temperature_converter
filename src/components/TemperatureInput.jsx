const scaleNames = {
  c: 'Celsius',
  f: 'Farenhiet',
};
export default function TemperatureInput({
  scale,
  temperature,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleNames[scale]}:</legend>
      <input
        type="text"
        value={temperature}
        onChange={e => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
