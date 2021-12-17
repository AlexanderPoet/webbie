import * as React from 'react';
import ProgressFullChart from './ProgressFullChart';
import ProgressSelect from './ProgressSelect';
import ProgressSet from './ProgressSet';
import ProgressSetCard from './ProgressSetCard';
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
  const [showFullChart, setShowFullChart] = useState(true);
  const updateMax = (e: React.FormEvent<HTMLSelectElement>) => {
    setMax(Number(e.currentTarget.value));
  }
  const updateDaySelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setDay(Number(e.currentTarget.value));
  }
  const updateDayClick = (e:  React.MouseEvent<HTMLDivElement>, index: number) => {
    setDay(index);
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
    <div className="container font-mono h-5/6 my-12 mx-auto px-4 bg-neutral-50 shadow-2xl shadow-indigo-500/50">
      <h1>Progression is here!</h1>
      <div className='flex flex-row'>
        <ProgressSelect name="day" value={day} onChange={updateDaySelect} options={dayOptions} />
        <ProgressSelect name="max" label="Starting Max" value={max} onChange={updateMax} options={oneRepMaxOptions} />
        <ProgressSet set={reps} weights={weights} />
      </div>
      <br />
      <div>
        <div className='grid grid-cols-6 gap-4'>
          {dayOptions.map((x, i) => {
            const [weights, set] = getTodaysWorkout(i, max)
            return <ProgressSetCard {...{ index: i, day, weights, set, key: `fullday#${i}`, onClick: updateDayClick}} />;
          })
          }
        </div>
      </div>
    </div>
  );
};