var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart extends Component {
	render() {
		const options = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "New Year Resolutions",
			exportEnabled: true,
			title:{
				text: "Top Categories of New Year's Resolution"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Health" },
					{ y: 22, label: "Finance" },
					{ y: 15, label: "Education" },
					{ y: 19, label: "Career" },
					{ y: 5, label: "Family" },
					{ y: 7, label: "Real Estate" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
module.exports = PieChart;