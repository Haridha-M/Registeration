import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit {
  private heatmapData = [
    [5, 10, 15, 20, 25],
    [4, 8, 12, 16, 20],
    [3, 6, 9, 12, 15],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 5],
  ];

  private svg1: any;
  private margin1 = 130;
  private width1 = 1000 - (this.margin1 * 2);
  private height1 = 400 - (this.margin1 * 2);

  private heatCreateSvg(): void {
    this.svg1 = d3.select("#heatmap")
      .attr("width", this.width1 + (this.margin1 * 2))
      .attr("height", this.height1 + (this.margin1 * 2));
  }
  private getColor(value: number): string {
    if (value >= 0 && value <= 7) {
      return " #18B872 ";
    } else if (value >=  8 && value <= 14) {
      return " #FDD83E";
    } else if (value >= 15 && value <= 21) {
      return "#F4B260";
    } else if (value >= 21 && value <= 25) {
      return "#D8373D";
    } else {
      return "gray";
    }
  }
  private drawHeatmap(data: number[][]): void {
    const heatmapSvg = d3.select("#heatmap")
      .attr("width", this.width1 + (this.margin1 * 2))
      .attr("height", this.height1 + (this.margin1 * 2));
  
    const cells = heatmapSvg.selectAll("rect.heatmap")
      .data(data.flat())
      .enter()
      .append("rect")
      .attr("x", (d, i) => this.margin1 + (i % 5) * 100)
      .attr("y", (d, i) => this.margin1 + Math.floor(i / 5) * 50)
      .attr("width", 100)
      .attr("height", 50)
      .style("fill", d => this.getColor(d))
      .style("stroke", "white") // Border color
      .style("stroke-width", 1); // Border width
  
    // Add text only to the cell in the first row and first column
    heatmapSvg.append("text")
      .text('1')
      .attr("x", this.margin1 + 50) // Center text horizontally in the cell
      .attr("y", this.margin1 + 25) // Center text vertically in the cell
      .attr("dy", "0.35em") // Adjust vertical alignment
      .style("text-anchor", "middle") // Center text horizontally
      .style("alignment-baseline", "middle"); // Center text vertically
// Add text to the cell in the first row and second column
heatmapSvg.append("text")
.text('10')
.attr("x", this.margin1 + 100 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically
heatmapSvg.append("text")
.text('30')
.attr("x", this.margin1 + 200 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the first row and fourth column
heatmapSvg.append("text")
.text('30')
.attr("x", this.margin1 + 300 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the first row and fifth column
heatmapSvg.append("text")
.text('30')
.attr("x", this.margin1 + 400 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

heatmapSvg.append("text")
.text('30')
.attr("x", this.margin1 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 50 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the first column and third row
heatmapSvg.append("text")
.text('30')
.attr("x", this.margin1 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 100 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the first column and fourth row
heatmapSvg.append("text")
.text('1')
.attr("x", this.margin1 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 150 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the first column and fifth row
heatmapSvg.append("text")
.text('1')
.attr("x", this.margin1 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 200 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically


  // Add text to the cell in the second row and second column
  heatmapSvg.append("text")
    .text('1')
    .attr("x", this.margin1 + 100 + 50) // Center text horizontally in the cell
    .attr("y", this.margin1 + 50 + 25) // Center text vertically in the cell
    .attr("dy", "0.35em") // Adjust vertical alignment
    .style("text-anchor", "middle") // Center text horizontally
    .style("alignment-baseline", "middle"); // Center text vertically
    // Add x-axis labels
    const xLabels = heatmapSvg.selectAll(".xLabel")
      .data(["Low", "Unlikely", "Possible", "Likely", "Certain"]) // Assuming the x-axis labels are 0 to 4
      .enter().append("text")
      .text(d => d)
      .attr("x", (d, i) => this.margin1 + i * 100 + 20)
      .attr("y", this.height1 + this.margin1 + 125)
      .style("text-anchor", "middle");
  
  // Add text to the cell in the second row and third column
  heatmapSvg.append("text")
    .text('1')
    .attr("x", this.margin1 + 200 + 50) // Center text horizontally in the cell
    .attr("y", this.margin1 + 50 + 25) // Center text vertically in the cell
    .attr("dy", "0.35em") // Adjust vertical alignment
    .style("text-anchor", "middle") // Center text horizontally
    .style("alignment-baseline", "middle"); // Center text vertically

  // Add text to the cell in the second row and fourth column
  heatmapSvg.append("text")
    .text('1')
    .attr("x", this.margin1 + 300 + 50) // Center text horizontally in the cell
    .attr("y", this.margin1 + 50 + 25) // Center text vertically in the cell
    .attr("dy", "0.35em") // Adjust vertical alignment
    .style("text-anchor", "middle") // Center text horizontally
    .style("alignment-baseline", "middle"); // Center text vertically

  // Add text to the cell in the second row and fifth column
  heatmapSvg.append("text")
    .text('1')
    .attr("x", this.margin1 + 400 + 50) // Center text horizontally in the cell
    .attr("y", this.margin1 + 50 + 25) // Center text vertically in the cell
    .attr("dy", "0.35em") // Adjust vertical alignment
    .style("text-anchor", "middle") // Center text horizontally
    .style("alignment-baseline", "middle"); // Center text vertically

     // Add text to the cell in the second column and third row
  heatmapSvg.append("text")
  .text('1')
  .attr("x", this.margin1 + 100 + 50) // Center text horizontally in the cell
  .attr("y", this.margin1 + 100 + 25) // Center text vertically in the cell
  .attr("dy", "0.35em") // Adjust vertical alignment
  .style("text-anchor", "middle") // Center text horizontally
  .style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the second column and fourth row
heatmapSvg.append("text")
  .text('1')
  .attr("x", this.margin1 + 100 + 50) // Center text horizontally in the cell
  .attr("y", this.margin1 + 150 + 25) // Center text vertically in the cell
  .attr("dy", "0.35em") // Adjust vertical alignment
  .style("text-anchor", "middle") // Center text horizontally
  .style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the second column and fifth row
heatmapSvg.append("text")
  .text('1')
  .attr("x", this.margin1 + 100 + 50) // Center text horizontally in the cell
  .attr("y", this.margin1 + 200 + 25) // Center text vertically in the cell
  .attr("dy", "0.35em") // Adjust vertical alignment
  .style("text-anchor", "middle") // Center text horizontally
  .style("alignment-baseline", "middle"); // Center text vertically
 
  // Add text to the cell in the third row and third column
heatmapSvg.append("text")
.text('1')
.attr("x", this.margin1 + 200 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 100 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the third row and fourth column
heatmapSvg.append("text")
.text('1')
.attr("x", this.margin1 + 300 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 100 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the third row and fifth column
heatmapSvg.append("text")
.text('1')
.attr("x", this.margin1 + 400 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 100 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the fourth row and third column
heatmapSvg.append("text")
.text('1')
.attr("x", this.margin1 + 200 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 150 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the fifth row and third column
heatmapSvg.append("text")
.text('1')
.attr("x", this.margin1 + 200 + 50) // Center text horizontally in the cell
.attr("y", this.margin1 + 200 + 25) // Center text vertically in the cell
.attr("dy", "0.35em") // Adjust vertical alignment
.style("text-anchor", "middle") // Center text horizontally
.style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the fourth row and fourth column
heatmapSvg.append("text")
  .text('1')
  .attr("x", this.margin1 + 300 + 50) // Center text horizontally in the cell
  .attr("y", this.margin1 + 150 + 25) // Center text vertically in the cell
  .attr("dy", "0.35em") // Adjust vertical alignment
  .style("text-anchor", "middle") // Center text horizontally
  .style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the fourth row and fifth column
heatmapSvg.append("text")
  .text('1')
  .attr("x", this.margin1 + 400 + 50) // Center text horizontally in the cell
  .attr("y", this.margin1 + 150 + 25) // Center text vertically in the cell
  .attr("dy", "0.35em") // Adjust vertical alignment
  .style("text-anchor", "middle") // Center text horizontally
  .style("alignment-baseline", "middle"); // Center text vertically

// Add text to the cell in the fifth row and fourth column
heatmapSvg.append("text")
  .text('1')
  .attr("x", this.margin1 + 300 + 50) // Center text horizontally in the cell
  .attr("y", this.margin1 + 200 + 25) // Center text vertically in the cell
  .attr("dy", "0.35em") // Adjust vertical alignment
  .style("text-anchor", "middle") // Center text horizontally
  .style("alignment-baseline", "middle"); // Center text vertically
// Add text to the cell in the fifth row and fifth column
heatmapSvg.append("text")
  .text('1')
  .attr("x", this.margin1 + 400 + 50) // Center text horizontally in the cell
  .attr("y", this.margin1 + 200 + 25) // Center text vertically in the cell
  .attr("dy", "0.35em") // Adjust vertical alignment
  .style("text-anchor", "middle") // Center text horizontally
  .style("alignment-baseline", "middle"); // Center text vertically


    // Add y-axis labels
    const yLabels = heatmapSvg.selectAll(".yLabel")
      .data(["Catastrophic", "Major", "Moderate", "Minor", "Insignificant"])
      .enter().append("text")
      .text(d => d)
      .attr("x", this.margin1 - 20)
      .attr("y", (d, i) => this.margin1 + i * 50 + 25)
      .style("text-anchor", "end");
  }
  
  
  


  ngOnInit(): void {
    this.heatCreateSvg();
    this.drawHeatmap(this.heatmapData);
  }

}
