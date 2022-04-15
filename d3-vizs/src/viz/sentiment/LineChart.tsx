// import * as d3 from 'd3';
import React from 'react';
// import moment from 'moment-timezone';
// import { get, isEmpty } from 'lodash';
// import { stringutils } from '~/shared/utils';
// import { useParsedReportData } from '~/shared/hooks';

// type TimeseriesData = {
//     lines: {
//         id: string;
//         is_nested: boolean;
//         buckets: {
//             key: string;
//             doc_count: number;
//             buckets?: {
//                 doc_count: number;
//                 key: string;
//             }[];
//         }[];
//     }[];
// }

// type SentimentData = {
//   key: string;
//   Positive: number;
//   Neutral: number;
//   Negative: number;
// };

// type Buckets = {
//   doc_count: number;
//   key: Date;
// }[];

// type Dimensions = {
//   width: number;
//   height: number;
//   margin: { top: number; right: number; bottom: number; left: number };
// };

// type SentimentDataMap = {
//   [k: string]: SentimentData;
// };

// const EmptyEntry: SentimentData = {
//   key: '',
//   Positive: 0,
//   Neutral: 0,
//   Negative: 0,
// };

// const formatKey = (s: string): string => {
//   return moment(s).format('MMM D');
// };

// const parsetime = (d: TimeseriesData): Buckets => {
//   const bucket: Buckets = [];
//   if (d && d.lines) {
//     const { buckets } = d.lines[0];

//     buckets.forEach(b => {
//       const { buckets: items } = b;
//       items &&
//         items.forEach(i => {
//           bucket.push({
//             doc_count: i.doc_count,
//             key: new Date(i.key),
//           });
//         });
//     });
//   }
//   return bucket;
// };

// const parse = (d: TimeseriesData): SentimentData[] => {
//   const map: SentimentDataMap = {};

//   if (d && d.lines) {
//     const { buckets } = d.lines[0];

//     buckets.forEach(b => {
//       const { key: category, buckets: items } = b;
//       items &&
//         items.forEach(i => {
//           const { key: date, doc_count } = i;
//           const key = formatKey(date);
//           const sentimentKey = stringutils.capitalize(category);
//           map[key] = {
//             ...get(map, key, EmptyEntry),
//             key,
//             [sentimentKey]: doc_count,
//           };
//         });
//     });
//   }

//   return Object.values(map);
// };

// const LineChart = (reportID: string, dimensions: Dimensions) => {
//   const svgRef = React.useRef();
//   const { width, height, margin } = dimensions;
//   const svgWidth = width + margin.left + margin.right;
//   const svgHeight = height + margin.top + margin.bottom;
//   const timedata = useParsedReportData(reportID, parsetime);
//   const { data } = useParsedReportData(reportID, parse);

//   React.useEffect(() => {
//     const xScale = d3
//       .scaleTime()
//       .domain(d3.extent(timedata.data, d => d.key) as [Date, Date])
//       .range([0, width]);
//     const yScale = d3
//       .scaleLinear()
//       .domain([
//         0,
//         d3.max(data, d => d.Positive + d.Negative + d.Neutral + 10),
//       ] as [number, number])
//       .range([height, 0]);
//     // Create root container where we will append all other chart elements
//     const svgEl = d3.select(svgRef.current);
//     svgEl.selectAll('*').remove(); // Clear svg content before adding new elements
//     const svg = svgEl
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);
//     // Add X grid lines with labels
//     const xAxis = d3
//       .axisBottom(xScale)
//       .ticks(5)
//       .tickSize(-height + margin.bottom);
//     const xAxisGroup = svg
//       .append('g')
//       .attr('transform', `translate(0, ${height - margin.bottom})`)
//       .call(xAxis);
//     xAxisGroup.select('.domain').remove();
//     xAxisGroup.selectAll('line').attr('stroke', 'rgba(255, 255, 255, 0.2)');
//     xAxisGroup
//       .selectAll('text')
//       .attr('opacity', 0.5)
//       .attr('color', 'white')
//       .attr('font-size', '0.75rem');
//     // Add Y grid lines with labels
//     const yAxis = d3.axisLeft(yScale).ticks(5).tickSize(-width);
//     const yAxisGroup = svg.append('g').call(yAxis);
//     yAxisGroup.select('.domain').remove();
//     yAxisGroup.selectAll('line').attr('stroke', 'rgba(255, 255, 255, 0.2)');
//     yAxisGroup
//       .selectAll('text')
//       .attr('opacity', 0.5)
//       .attr('color', 'white')
//       .attr('font-size', '0.75rem');
//     // Draw the lines
//     const line = d3
//       .line()
//       .x(d => xScale(d.key) as number)
//       .y(d => yScale(d.value) as number);
//     svg
//       .selectAll('.line')
//       .data(data)
//       .enter()
//       .append('path')
//       .attr('fill', 'none')
//       .attr('stroke', '#FF5630')
//       .attr('stroke-width', 3)
//       .attr('d', d => line(d.Positive));
//   }, [data]); // Redraw chart if data changes

//   return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
// };

// export default LineChart;
