import * as React from 'react';
const { useState } = React;

const Checkbox = () => {
  const [checked, setChecked] = useState(false); // fancy async, never forget
  const setActive = () => {
    setChecked(!checked)
  }
  return (
    <>
      <input type="checkbox" className="accent-aap-purple" checked={checked} onChange={setActive} />
    </>
  );
};

interface ProgessSet {
  set: number[],
  weights: number[],
}

export default ({ set, weights }: ProgessSet) => {

  return (
    <div className='basis-1/2 h-14 rounded-lg flex items-center justify-around shadow-md shadow-aap-purple'>
      {set.map((repCount, i) => {
        console.log(repCount);
        return (
          <>
            <Checkbox key={repCount} />
            <div key={repCount}>{weights[i]} x {repCount}</div>
          </>
        );
      })}
    </div>
  )
}