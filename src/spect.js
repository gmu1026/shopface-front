import React from 'react';
import Spectrum from 'react-spectrum';

const spect = () => {
  return (
    <div className="spectrum" name="color">
      <Spectrum
        colors={[
          '#0070C0',
          '#00B050',
          '#FFC000',
          '#7030A0',
          '#C00000',
          '#4BACC6',
          '#9BBB59',
          '#F79646',
          '#C0504D',
          '#7F7F7F',
        ]}
      />
    </div>
  );
};
export default spect;
