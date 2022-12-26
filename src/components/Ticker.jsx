// Modules
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import { Api } from '../helpers/api';
// Components
import TickerBlock from './TickerBlock';

const tickerSpeed = 30;

const Ticker = () => {
  // States
  const [tickerData, setTickerData] = useState();

  useEffect(() => {
    // Ticker fetch
    const DocumentsApi = new Api('http://tmex.gov.tm:8765/api/tradings', tickerData, setTickerData);
    DocumentsApi.get();
  }, []);

  return (
    <Marquee className="ticker" gradient={false} speed={tickerSpeed}>
      <div className="ticker-wrapper">
        {tickerData
          ? tickerData.data.map((item) => {
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
            })
          : ''}
      </div>
    </Marquee>
  );
};

export default Ticker;
