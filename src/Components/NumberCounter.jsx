import React from 'react';
import CountUp from 'react-countup';

function NumberCounter() {
  const Counter = ({ end, label, isPercentage }) => {
    return (
      <div className="text-center mx-4 sm:mx-6 md:mx-8">
        <h2 className="text-red-600 text-2xl sm:text-3xl md:text-4xl font-bold font-k">
          <CountUp end={end} duration={2.5} />
          {isPercentage ? '%' : '+'}
        </h2>
        <p className="text-black text-sm sm:text-base md:text-lg mt-1 sm:mt-2">{label}</p>
      </div>
    );
  };

  return (
    <div className="bg-pink-100 py-10 sm:py-16 md:py-20">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <Counter end={115} label="Branch Shop" />
        <span className="text-red-600 text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-4">~~</span>
        <Counter end={85} label="Staffs" />
        <span className="text-red-600 text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-4">~~</span>
        <Counter end={120} label="Flavor Variants" />
        <span className="text-red-600 text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-4">~~</span>
        <Counter end={90} label="Positive Review" isPercentage={true} />
      </div>
    </div>
  );
}

export default NumberCounter;
