import * as React from 'react';

interface ProgessSelect {
  name: string,
  value: number,
  onChange: React.FormEventHandler,
  options: string[]
}

export default ({name, value, onChange, options}: ProgessSelect) => {
  return (
    <select name={name} id={`${name}-select`} value={value} onChange={onChange}>
      {options.map((x, i) => <option value={x} key={`${name}-opt-${x}`}>{x}</option>)}
    </select>
  )
}