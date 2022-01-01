import React, { useEffect, useState } from "react";
import { Button, Card, CardBody } from "reactstrap";

import { connect } from "react-redux";

import { Bar } from "react-chartjs-2";

const BarGraph = (props) => {
  const accessToken = `${props.login?.login?.token}`;

  let data = {
    token: accessToken,
    id: 1,
  };

  const [showGraph, setShowGraph] = useState(false);
  const [chartData, setChartData] = useState({});
  let graph = [];
  let graphdata = [];
  graph = props.result;
  graphdata = props.result?.map((gd) => {
    return {
      label: "",
      data: gd,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],

      borderWidth: 1,
    };
  });

  const Chart = () => {
    let time = [];
    let temp = [];
    let sensors = [];
    console.log("Chart Function");
    // for (const dataObj of graph) {
    //   dataObj?.data.map((t) => {
    //     time.push(t.time);
    //   });

    //   sensors.push(dataObj?.sensor);
    // }

    setChartData({
      labels: ["CDU/MDU", "SPD", "AfD", "FDP", "Grüne", "Linke"],
      datasets: [
        {
          label: "data",
          data: [10, 20, 40, 50, 90, 10],
          fill: true,
          backgroundColor: "yellow",
          borderColor: "yellow",
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, [graphdata && props.result?.length > 0]);
  return (
    <Card className="h-auto p-3">
      <CardBody className="p-0">
        <h3 className="text-center pt-4 pr-4 pl-4 pb-1 ">Ihr Ergebnis</h3>

        <Bar
          data={chartData}
          className="h-auto"
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: {
                ticks: {
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.result.mainResult,
  };
};

export default connect(mapStateToProps)(BarGraph);
