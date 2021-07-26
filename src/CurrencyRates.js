import {
  useQuery,
  gql,
} from "@apollo/client";
import ChildComponent from './ChildComponent';

const EXCHANGE_RATES = gql`
  query GetExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
      name
    }
  }
`;

export default function CurrencyRates() {


  let addColor  = function addColor(event){
    const li = event.target.closest('li');
    console.log(li)
  }

  setTimeout(()=>{
    
    const ul = document.querySelector('ul');
    ul.addEventListener('click',addColor);

  },5000);

  

  const { loading, error, data, refetch } = useQuery(EXCHANGE_RATES,{
      variables : {
          currency:'USD'
      }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      <div className="item-container">
      {/* <button onClick={()=>refetch()}>Refetch</button> */}
      <ChildComponent refetch={refetch}/>
    <ul className="container">
      {data.rates.map(({ currency, rate, name }) => name && (
        <li key={currency} className="item">
          <img height="100" src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg" alt="img" style={{display:'inline'}}></img>
          {/* {name} */}
          <h3>Name : {name}</h3>
          <h4>Currency : {currency}</h4>
          <p>Rate : {rate} </p>
          
        </li>
      ))}
    </ul>
    </div>
  );
}
