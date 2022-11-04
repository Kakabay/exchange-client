// Modules
import Marquee from 'react-fast-marquee';
import TickerBlock from './TickerBlock';

const Ticker = () => {
  const plus = 0.56;
  const minus = -0.56;
  return (
    <Marquee className="ticker" gradient={false} speed={40}>
      <div className="ticker-wrapper">
        <TickerBlock status={minus} />
        <TickerBlock status={plus} />
        <TickerBlock status={plus} />
        <TickerBlock status={minus} />
        <TickerBlock status={plus} />
        <TickerBlock status={minus} />
        <TickerBlock status={minus} />
        <TickerBlock status={plus} />
        <TickerBlock status={minus} />
        <TickerBlock status={plus} />
      </div>
    </Marquee>
  );
};

export default Ticker;
