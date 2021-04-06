export const fetchQuote = async () => {
  const res = fetch('https://uselessfacts.jsph.pl/random.json')
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return res;
};
