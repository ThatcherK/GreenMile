
import React,{useState} from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const data02=[{
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }]
  
export default function Graph() {
    
    
    return (
        <PieChart width={100} height={100}>
        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={40} fill="#8BC34A" labelLine={false}/>
      </PieChart>
    )
}
