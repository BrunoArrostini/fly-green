import React from 'react';
import {Bar} from 'react-chartjs-2';


const BarChart = ({label1, label2, data1, data2}) => {
    
    return (
      <div>
        <Bar
          data={{
            labels: [label1,label2 ],
            datasets: [
              {
                label: 'Emissions',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data:[ data1, data2 ]
              }
            ]
          }}
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


export default BarChart