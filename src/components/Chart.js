import * as React from 'react';
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
export let data1 = [
    { x: 'Ita Airways', y: 803.437, r: Browser.isDevice ? '110' : '100', text: 'Ita Airways' },
    { x: 'Malta Air', y: 1.431801, r: Browser.isDevice ? '120' : '118.7', text: 'Malta Air' },
    { x: 'Wiazz Air', y: 505.502, r: '124.6', text: 'WIzz Air' },
    { x: 'Ryanair', y: 478.281, r: '150.8', text: 'Ryanair' },
    { x: 'Emirates', y: 323.857, r: '155.5', text: 'Emirates' },
    { x: 'Easyjet', y: 713.733, r: '160.6', text: 'Easyjet' }
];
function Chart() {
    return (<div className='control-pane'>
            <div className='control-section'>
                <AccumulationChartComponent  style={{width:"350px"}} id='pie-chart'  legendSettings={{
            visible: true,
            reverse: true
        }} enableSmartLabels={true} title="Airline companies emmision pie" enableBorderOnMouseMove={false} enableAnimation={true} load={load.bind(this)} tooltip={{ enable: true, format: '<b>${point.x}</b><br/>Emission per passenger: tones <b>${point.y} </b>' }}>
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}/>
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' innerRadius='20%' tooltipMappingName='r' dataLabel={{
            visible: true, position: Browser.isDevice ? 'Inside' : 'Outside', name: 'text', enableRotation: true,
            font: {
                fontWeight: '600',
            },
            connectorStyle: { length: '20px', type: 'Curve' }
        }} radius='r'>
                        </AccumulationSeriesDirective>
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>);
    function load(args) {
        let selectedTheme = window.location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    }
    ;
}
export default Chart;