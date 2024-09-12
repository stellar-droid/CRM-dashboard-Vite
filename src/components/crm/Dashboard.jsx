// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh Wani
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap

import { useNavigate } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Imgstatus4 from "../../assets/images/Imgstatus4.svg";
import Element1 from "../../assets/images/Element1.png";
import Element2 from "../../assets/images/Element2.png";

import Boostup2 from "../../assets/images/Boostup2.png";

// import { Chart } from 'primereact/chart';
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [chartData1, setChartData1] = useState({});
  const [chartOptions1, setChartOptions1] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [chartOptions2, setChartOptions2] = useState({});

  // dumbbell graph start
  const dumbbell = {
    series: [
      {
        data: [
          {
            x: "2008",
            y: [2800, 4500],
          },
          {
            x: "2009",
            y: [3200, 4100],
          },
          {
            x: "2010",
            y: [2950, 7800],
          },
          {
            x: "2011",
            y: [3000, 4600],
          },
          {
            x: "2012",
            y: [3500, 4100],
          },
          {
            x: "2013",
            y: [4500, 6500],
          },
          {
            x: "2014",
            y: [4100, 5600],
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "rangeBar",
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [["#008FFB", "#00E396"]],
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: "top",
        horizontalAlign: "left",
        customLegendItems: ["Product A", "Product B"],
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          gradientToColors: ["#00E396"],
          inverseColors: true,
          stops: [0, 100],
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        tickPlacement: "on",
      },
    },
  };
  useEffect(() => {
    setChartData(dumbbell);
    setChartOptions(dumbbell.options);
  }, []);
  // bar graph end

  // Spline chart start
  const dataSpline = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData1(dataSpline);
    setChartOptions1(dataSpline.options);
  }, []);
  // Spline chart end

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          yAxisID: "y",
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: "Dataset 2",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          yAxisID: "y1",
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData2(data);
    setChartOptions2(options);
  }, []);

  const handleClickLead = () => {
    navigate("/leads");
  };
  const handleClickOppurtunities = () => {
    navigate("/pricingmodel");
  };

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleSelect = (value) => {
    console.log("Selected:", value);
  };

  return (
    <>
      <div className="crm-header">
        <h2>Dashboard</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            <i className="bi bi-house-door"></i> Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="crm-statistic">
        <Row>
          <Col className="col-12 col-xl-4">
            <div className="statistic-inner color-green" onClick={handleClickLead}>
              <span>Total Leads</span>
              <h4>16453</h4>
              <small>Sales CRM Leads</small>
              <img src={Boostup2} alt="Boostup2" />
            </div>
          </Col>
          <Col className="col-12 col-xl-4">
            <div className="statistic-inner color-red" onClick={handleClickOppurtunities}>
              <span>Total Opportunities</span>
              <h4>13616</h4>
              <small>Sales CRM Opportunities</small>
              <img src={Element1} alt="Element1" />
            </div>
          </Col>
          <Col className="col-12 col-xl-4">
            <div className="statistic-inner color-yellow">
              <span>Total Leads</span>
              <h4>16453</h4>
              <small>Sales CRM Leads</small>
              <img src={Element2} alt="Element2" />
            </div>
          </Col>
        </Row>
      </div>
      <Row className="mt-3">
        <Col xl="6">
          <Card>
            <Card.Header>Domestic : Revenue Dumbell Charts</Card.Header>
            <Card.Body>
              <ReactApexChart
                options={dumbbell.options}
                series={dumbbell.series}
                type="rangeBar"
                height={350}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="pie-chart">
            <Card.Header>Domestic : Revenue Spline CHART</Card.Header>
            <Card.Body id="chart">
              <ReactApexChart
                options={dataSpline.options}
                series={dataSpline.series}
                type="area"
                height={350}
              />
              <div id="html-dist"></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xl="12">
          <Card>
            <Card.Header>Datatable</Card.Header>
            <Card.Body>
              <DataTable
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "50rem" }}
              >
                <Column
                  field="name"
                  header="Name"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="country.name"
                  header="Country"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="company"
                  header="Company"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="representative.name"
                  header="Representative"
                  style={{ width: "25%" }}
                ></Column>
              </DataTable>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
