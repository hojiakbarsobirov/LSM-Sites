import React, { Component } from "react";
import Chart from "react-apexcharts";

class StatisticPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
        }
      },
      series: [
        {
          name: "series-1",
          data: [31, 39, 21, 27, 37, 61, 73, 92]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              className="w-full"
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="470"
             
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StatisticPage;
