export default function BoilingVerdict({ celsius }) {
  let verdict = '';
  if (celsius >= 100) {
    verdict = 'Water Will Boil';
  } else if (celsius < 100) {
    verdict = 'Water Will Not Boil';
  } else {
    verdict = '';
  }
  return <p className="verdict">{verdict}</p>;
}
