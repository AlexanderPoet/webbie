import * as React from 'react';

interface ProgessFullChart {
  sets: number[],
  weights: number[];
}

export default ({ sets, weights }: ProgessFullChart) => {
  console.log('sets:' ,sets, 'weights:', weights)
  return (
    <table className='table-auto'>
      <thead>
        <tr>
          {[...Array(3)].map( (x, i)=> <th>{`Set ${i + 1}`}</th>)}
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}