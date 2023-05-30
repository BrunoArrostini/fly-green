import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto';

const state = {
  labels: ['Malta Air', 'Ryanair', 'Wizz Air',
           'Emirates', 'easyjet', 'Ita Airways'],
  datasets: [
    {
      label: 'Emissions in tones',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#A2D9CE'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      '#A2E9CE'
      ],
      data: [1.431801, 478.241, 505.502, 323.587, 713.733, 803.487, 247.193]
    }
  ]
}

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Emissions',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}