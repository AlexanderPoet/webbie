import * as React from 'react';

interface ProgessSet {
  set: number[],
  weights: number[],
}

export default ({ set, weights }: ProgessSet) => {
  return (
      <div className='basis-1/2 h-14 rounded-lg flex items-center justify-around shadow-md shadow-aap-purple'>
        {set.map((repCount, i) => {
          return <div key={repCount}>{weights[i]} x {repCount}</div>
        })}
      </div>
  )
}