// Modules
import Marquee from 'react-fast-marquee';

const Ticker = () => {
  return (
    <Marquee className="ticker" gradient={false} speed={40}>
      Это бегущая строка
    </Marquee>
  );
};

export default Ticker;
