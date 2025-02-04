import React from 'react';
interface ChartProps {
    chartData: {
        name: string;
        value: number;
    }[];
}
declare const ChartComponent: React.FC<ChartProps>;
export default ChartComponent;
