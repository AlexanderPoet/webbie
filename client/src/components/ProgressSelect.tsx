import * as React from 'react';

interface ProgessSelect {
  name: string,
  label?: string,
  value: number,
  onChange: React.FormEventHandler,
  options: string[]
}

export default ({ name, value, onChange, options, label }: ProgessSelect) => {
  const capitalizeLabel = (str: string) => {
    return str[0].toLocaleUpperCase() + str.substring(1);
  }
  const capitalizedLabel = capitalizeLabel(label || name);
  return (
    <div className='basis-1/4 h-14 rounded-lg flex items-center justify-center shadow-md shadow-aap-purple'>
      <label htmlFor={`${name}-select`}>{capitalizedLabel}</label>
      <select name={name} id={`${name}-select`} value={value} onChange={onChange}>
        {options.map((x, i) => <option value={x} key={`${name}-opt-${x}`}>{x}</option>)}
      </select>
    </div>
  )
}