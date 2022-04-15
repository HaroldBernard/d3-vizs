import * as d3 from "d3";
import React, { useEffect } from "react";
import { Dimensions } from "./Bar";

export function Interactive(dimensions: Dimensions) {
    const ref = React.useRef();
    useEffect(() => {
        if (ref.current) {
            const parentEl = ref.current;
            const data = [
                {
                    humans:4,
                    day:"monday"
                }, 
                {
                    humans:8,
                    day:"tuesday"
                }, 
                {
                    humans:15,
                    day:"wednesday"
                }, 
                {
                    humans:16,
                    day:"thursday"
                }, 
                {
                    humans:23,
                    day:"friday"
                }, 
                {
                    humans:42,
                    day:"saturday"
                }
            ];

            const xScale = d3
                .scaleBand()
                .range([0, dimensions.width ])
                // @ts-ignore
                .domain( data.map((s) => s.day))
                .padding(.2)
                
            const yScale = d3
                .scaleLinear()
                .range([dimensions.height, 0])
                // @ts-ignore
                .domain([0, 45])

            const toolTip = d3.select(parentEl)
                .append("g")
                .style("visibility", "hidden")
                .style("position", "absolute")
                .style("background", "#ffff")
                .text("")
                .style("color", "black")
                .style("font-size", "16px");

            let svg = d3
                .select(parentEl)
                .append("svg")
                .attr("width", dimensions.width) 
                .attr("height", dimensions.height) 
                .attr("viewBox", `-30 -10 ${dimensions.width +20 } ${dimensions.height +20 }`)
                .append("g").call(d3.axisLeft(yScale))
                .append("g").call(d3.axisBottom(xScale).ticks(6))
            
            svg.selectAll()
                .data(data)
                .enter().append("rect")
                // @ts-ignore
                .attr('x', (s) => xScale(s.day))
                .attr('y', (s) => yScale(s.humans))
                .attr("width", xScale.bandwidth )
                .attr('height', dimensions.height )
                .attr("fill", "#000")
                .style("margin-right", 6)
                
                .on("mouseover", (d, i) => {
                    toolTip.text(`There are ${i.humans} people at the beach ${i.day} `); 
                    return toolTip.style("visibility", "visible");
                })
                .on("mousemove", function(){return toolTip.style("top", "960px").style("left", "350px");})
                .on("mouseout", function(){return toolTip.style("visibility", "hidden");});
           
        }
    })
                    // @ts-ignore
    return <div style={{padding: "24px"}} ref={ref} />;

}