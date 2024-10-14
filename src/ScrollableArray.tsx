import React from 'react';

type ScrollableArrayProps = {
  values: number[];
};

export default function ScrollableArray({ values }: ScrollableArrayProps) {
  return (
    <div style={{ width: '300px', overflowX: 'auto', whiteSpace: 'nowrap', border: '1px solid black', padding: '10px' }}>
      {values.map((value, index) => (
        <span key={index} style={{ display: 'inline-block', padding: '0 10px' }}>
          {value}
        </span>
      ))}
    </div>
  );
}
