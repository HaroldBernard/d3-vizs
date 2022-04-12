import * as d3 from "d3";
import React, { useEffect } from "react";

const sample = [
  {
    language: "Rust",
    value: 78.9,
    color: "#000000",
  },
  {
    language: "Kotlin",
    value: 75.1,
    color: "#00a2ee",
  },
  {
    language: "Python",
    value: 68.0,
    color: "#fbcb39",
  },
  {
    language: "TypeScript",
    value: 67.0,
    color: "#007bc8",
  },
  {
    language: "Go",
    value: 65.6,
    color: "#65cedb",
  },
  {
    language: "Swift",
    value: 65.1,
    color: "#ff6e52",
  },
  {
    language: "JavaScript",
    value: 61.9,
    color: "#f9de3f",
  },
  {
    language: "C#",
    value: 60.4,
    color: "#5d2f8e",
  },
  {
    language: "F#",
    value: 59.6,
    color: "#008fc9",
  },
  {
    language: "Clojure",
    value: 59.6,
    color: "#507dca",
  },
];

export type Dimensions = {
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
};

export function Bar(dimensions: Dimensions) {
  console.log(dimensions)
  const ref = React.useRef(null);
  useEffect(() => {
    const svg = d3.select(ref.current);

    const chart = svg
      .append("g")
      .attr(
        "transform",
        `translate(30, 20)`
      );

    // creates y axis
    const yScale = d3
      .scaleLinear()
      .range([dimensions.height, 0])
      .domain([0, 100]);

    // adds Yaxis to the chart svg
    chart.append("g").call(d3.axisLeft(yScale));

    const xScale = d3
      .scaleBand()
      .range([0, dimensions.width])
      .domain(sample.map((s) => s.language))
      .padding(.3);

    chart
      .append("g")
      .attr("transform", `translate(0, ${dimensions.height} -10)`)
      .call(d3.axisBottom(xScale));

    chart.selectAll()
      .data(sample)
      .enter()
      .append('rect')
      // @ts-ignore
      .attr('x', (s) => xScale(s.language))
      .attr('y', (s) => yScale(s.value))
      .attr('height', (s) => dimensions.height + yScale(s.value))
      .attr('width', xScale.bandwidth())
  }, [dimensions]);

  return <svg width={dimensions.width} height={dimensions.height} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} ref={ref} />;
}
