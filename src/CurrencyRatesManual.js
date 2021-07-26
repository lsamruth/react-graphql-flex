import { useLazyQuery, useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

export default function CurrencyRatesManual() {
  const [getRates, { data, loading, error }] = useLazyQuery(EXCHANGE_RATES, {
    variables: {
      currency: "INR",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <button onClick={getRates}>Get rates</button>
      {data && <ul>
        {data.rates.map(({ currency, rate }) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>}
    </>
  );
}
