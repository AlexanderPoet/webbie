import * as React from 'react';
import ProgressSelect from './ProgressSelect';
const { useState, useEffect } = React;
interface ORMData {
  timesToLift: number[],
  ORM: {
    [max: number]: number[],
  }
}

const tableData: ORMData = require('../lib/weightData.json');

export default () => {
  const [day, setDay] = useState(0); // something async in future
  const [max, setMax] = useState(200); // cookie check local storage etc
  const updateMax = (e: React.FormEvent<HTMLSelectElement>) => {
    setMax(Number(e.currentTarget.value));
  }
  const updateDay = (e: React.FormEvent<HTMLSelectElement>) => {
    setDay(Number(e.currentTarget.value));
  }

  const { ORM, timesToLift } = tableData;
  const getTodaysWorkout = (day: number, max: number) => {
    const i = day * 3;
    const j = i + 3;
    const orm = ORM[max].slice(i, j);
    const ttl = timesToLift.slice(i, j);
    return [orm, ttl];
  };
  const [weights, reps] = getTodaysWorkout(day, max);
  const oneRepMaxOptions = Object.keys(ORM);
  const dayOptions = [...Array(14)].map((x, i) => String(i));
  return (
    <div className="container mx-auto">
      <div>Progression Table here</div>
      <h1 style={{ display: "inline" }}>Day</h1>
      <ProgressSelect name="day" value={day} onChange={updateDay} options={dayOptions} />
      <h1 style={{ display: "inline" }}>Starting max:</h1>
      <ProgressSelect name="max" value={max} onChange={updateMax} options={oneRepMaxOptions} />
      {reps.map((repCount, i) => {
        return <p key={repCount}>{weights[i]} x {repCount}</p>
      })}
    </div>
  )
};