import * as React from 'react';

interface ProgessSetCard {
  index: number,
  day: number,
  set: number[],
  weights: number[],
  onClick: (e: React.MouseEvent<HTMLDivElement>, i: number) => void;
}

export default ({ index, day, set, weights, onClick }: ProgessSetCard) => {
  const active = day === index;
  const disabled = index < day;
  const shadowColor = active ? 'shadow-aap-purple' : '';
  const backgroundColor = disabled ? 'bg-neutral-500' : '';
  return (
      <div className={`h-18 p-2 rounded-lg text-center shadow-md ${backgroundColor} ${shadowColor}`}
        onClick={(e) => onClick(e, index)}>
        {set.map((repCount, i) => {
          return <div className="" key={`${repCount}-${weights[i]}-${i}`}>{weights[i]} x {repCount}</div>
        })}
      </div>
  )
}