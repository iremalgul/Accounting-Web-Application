// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 6 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
  "use strict";
  // -----------------------------------------------------------------------
  // Sales overview
  // -----------------------------------------------------------------------

  var sales_overview = {
    series: [
      {
        name: "Pixel ",
        data: [9, 5, 3, 7, 5, 10, 3],
      },
      {
        name: "Ample ",
        data: [6, 3, 9, 5, 4, 6, 4],
      },
    ],
    chart: {
      fontFamily: "Poppins,sans-serif",
      type: "bar",
      height: 330,
      offsetY: 10,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 2,
      borderColor: "rgba(0,0,0,0.2)",
    },
    colors: ["#1e88e5", "#21c1d6"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "flat",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      tickAmount: "16",
      tickPlacement: "on",
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };

  var chart_column_basic = new ApexCharts(
    document.querySelector("#sales-overview"),
    sales_overview
  );
  chart_column_basic.render();

  // -----------------------------------------------------------------------
  // Our visitor
  // -----------------------------------------------------------------------

  var product_sales = {
    series: [50, 40, 30, 10],
    labels: ["Mobile", "Tablet", "Other", "Desktop"],
    chart: {
      type: "donut",
      height: 230,
      fontFamily: "Poppins,sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: "83",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: "#a1aab2",
              fontSize: "13px",
              label: "Yearly Sales",
            },
          },
        },
      },
    },
    colors: ["#1e88e5", "#26c6da", "#eceff1", "#745af2"],
    tooltip: {
      show: true,
      fillSeriesColor: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  var chart_pie_donut = new ApexCharts(
    document.querySelector("#product-sales"),
    product_sales
  );
  chart_pie_donut.render();

  // -----------------------------------------------------------------------
  // sparkline charts
  // -----------------------------------------------------------------------
  //  var sparklineLogin = function() {

  var product_a_sales = {
    series: [
      {
        name: "",
        type: "area",
        data: [2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2],
      },
    ],
    chart: {
      type: "line",
      height: 50,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
      colors: ["#26c6da"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    markers: {
      size: 0,
      strokeColors: "transparent",
      strokeWidth: 2,
      shape: "circle",
      colors: ["#4fc3f7"],
    },
    colors: ["#26c6da"],
    fill: {
      type: "solid",
      colors: ["#26c6da"],
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "8px",
        fontFamily: "Poppins,sans-serif",
      },
      x: {
        show: false,
      },
      y: {
        formatter: undefined,
      },
      marker: {
        show: true,
      },
      followCursor: true,
    },
    legend: {
      show: false,
    },
  };

  var chart_area_basic = new ApexCharts(
    document.querySelector("#product-a-sales"),
    product_a_sales
  );
  chart_area_basic.render();

  var product_b_sales = {
    series: [
      {
        name: "",
        type: "area",
        data: [0, 2, 8, 6, 8, 5, 6, 4, 8, 6, 6, 2],
      },
    ],
    chart: {
      type: "line",
      height: 50,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
      colors: ["#009efb"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    markers: {
      size: 0,
      strokeColors: "transparent",
      strokeWidth: 2,
      shape: "circle",
      colors: ["#4fc3f7"],
    },
    colors: ["#009efb"],
    fill: {
      type: "solid",
      colors: ["#009efb"],
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "8px",
        fontFamily: "Poppins,sans-serif",
      },
      x: {
        show: false,
      },
      y: {
        formatter: undefined,
      },
      marker: {
        show: true,
      },
      followCursor: true,
    },
    legend: {
      show: false,
    },
  };

  var chart_area_basic = new ApexCharts(
    document.querySelector("#product-b-sales"),
    product_b_sales
  );
  chart_area_basic.render();

  var product_c_sales = {
    series: [
      {
        name: "",
        type: "area",
        data: [2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2],
      },
    ],
    chart: {
      type: "line",
      height: 50,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
      colors: ["#7460ee"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    colors: ["#7460ee"],
    markers: {
      size: 0,
      strokeColors: "transparent",
      strokeWidth: 2,
      shape: "circle",
      colors: ["#4fc3f7"],
    },
    fill: {
      type: "solid",
      colors: ["#7460ee"],
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "8px",
        fontFamily: "Poppins,sans-serif",
      },
      x: {
        show: false,
      },
      y: {
        formatter: undefined,
      },
      marker: {
        show: true,
      },
      followCursor: true,
    },
    legend: {
      show: false,
    },
  };

  var chart_area_basic = new ApexCharts(
    document.querySelector("#product-c-sales"),
    product_c_sales
  );
  chart_area_basic.render();

  var download_count = {
    series: [
      {
        name: "",
        data: [4, 5, 2, 10, 9, 12, 4, 9, 4, 5, 3, 10],
      },
    ],
    chart: {
      type: "bar",
      fontFamily: "Poppins,sans-serif",
      height: 70,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["rgba(255, 255, 255, 0.5)"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "60%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 6,
      colors: ["transparent"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: "Poppins,sans-serif",
      },
      x: {
        show: false,
      },
      y: {
        formatter: undefined,
      },
    },
  };

  var chart_column_basic = new ApexCharts(
    document.querySelector("#download-count"),
    download_count
  );
  chart_column_basic.render();
});
