import React from 'react'
import { Radio } from "antd";
import { useState } from 'react';
const plainOptions = ['500USDT', '1000USDT'];
function Home() {
  const [value1, setValue1] = useState('500USDT');
  const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };
  return (
    <div>
       <Radio.Group options={plainOptions} onChange={onChange1} value={value1} size='middle'>
       </Radio.Group>
    </div>
  )
}

export default Home