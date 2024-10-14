import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

type MpxSliderProps = {
  multipliers: number[];
};

export default function MpxSlider({ multipliers }: MpxSliderProps) {
  const [valueIndex, setValueIndex] = useState(0);
  const itemsPerPage = 10;
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const getDisplayedItems = () => {
    const result:any = [];
    for (let i = 0; i < itemsPerPage; i++) {
      result.push(multipliers[(valueIndex + i) % multipliers.length]);
    }
    console.log(result);

    return result;
  };

  const handlePrev = () => {
    setValueIndex((prevIndex) => (prevIndex - 1 + multipliers.length) % multipliers.length);
  };

  const handleNext = () => {
    setValueIndex((prevIndex) => (prevIndex + 1) % multipliers.length);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className='image-slider-img'>
        {getDisplayedItems().map((item:any, index:any) => (
          <button onClick={(e)=> console.log(item)} key={index} style={{ padding: '0 10px' }}>{item}</button>
        ))}
      </div>
      <button onClick={handlePrev}>
        <ArrowBigLeft />
      </button>
      <button onClick={handleNext}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
