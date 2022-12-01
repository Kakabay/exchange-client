// Modules
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
// Components
import TickerBlock from './TickerBlock';
import axios from 'axios';

const Ticker = () => {
  // States
  const [tickerData, setTickerData] = useState();
  useEffect(() => {
    axios.get('http://tmex.gov.tm:8765/api/tradings').then((res) => {
      setTickerData(res.data);
    });
  }, []);

  if (!tickerData) return null;

  return (
    <Marquee className="ticker" gradient={false} speed={40}>
      <div className="ticker-wrapper">
        {tickerData.data.map((item) => {
          return (
            <TickerBlock
              key={item.id}
              title={item.title}
              change={item.price_change}
              price={item.price}
              oldPrice={item.old_price}
              currency={item.currency}
            />
          );
        })}
      </div>
    </Marquee>
  );
};

{
  /* <TickerBlock
  title={item.title}
  change={item.price_change}
  price={item.price}
  oldPrice={item.old_price}
  currency={item.currency}
/>; */
}
export default Ticker;
