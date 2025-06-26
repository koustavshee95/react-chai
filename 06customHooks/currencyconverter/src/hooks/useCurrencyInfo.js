import { useEffect, useState } from "react";

//custom hooks
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //convert string to json from api data.
      .then((res) => setData(res[currency])); //hold ta data.
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;

//let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
