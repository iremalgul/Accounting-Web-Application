// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 1 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
  "use strict";
  // -----------------------------------------------------------------------
  // Sales overview
  // -----------------------------------------------------------------------

  var options_Sales_Overview = {
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
      strokeDashArray: 3,
      borderColor: "rgba(0,0,0,.1)",
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
      colors: ["#1e88e5", "#21c1d6"],
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 767,
        options: {
          stroke: {
            show: false,
            width: 5,
            colors: ["transparent"],
          },
        },
      },
    ],
  };

  var chart_column_basic = new ApexCharts(
    document.querySelector("#sales-overview"),
    options_Sales_Overview
  );
  chart_column_basic.render();

  // -----------------------------------------------------------------------
  // Newsletter
  // -----------------------------------------------------------------------

  var option_Newsletter_Campaign = {
    series: [
      {
        name: "Open Rate ",
        data: [0, 5, 6, 8, 25, 9, 8, 24],
      },
      {
        name: "Recurring  Payments ",
        data: [0, 3, 1, 2, 8, 1, 5, 1],
      },
    ],
    chart: {
      fontFamily: "Poppins,sans-serif",
      height: 270,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 100],
      },
      colors: ["#21c1d6", "#1e88e5"],
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "rgba(0,0,0,.1)",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#21c1d6", "#1e88e5"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 3,
      strokeColors: "transparent",
    },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
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
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };

  var chart_area_spline = new ApexCharts(
    document.querySelector("#newsletter-campaign"),
    option_Newsletter_Campaign
  );
  chart_area_spline.render();

  // -----------------------------------------------------------------------
  // Our visitor
  // -----------------------------------------------------------------------

  var option_Our_Visitors = {
    series: [50, 40, 30, 10],
    labels: ["Mobile", "Tablet", "Other", "Desktop"],
    chart: {
      type: "donut",
      height: 250,
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
              label: "Our Visitor",
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
        breakpoint: 1025,
        options: {
          chart: {
            height: 270,
          },
        },
      },
      {
        breakpoint: 426,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  };

  var chart_pie_donut = new ApexCharts(
    document.querySelector("#our-visitors"),
    option_Our_Visitors
  );
  chart_pie_donut.render();

  // -----------------------------------------------------------------------
  // Badnwidth usage
  // -----------------------------------------------------------------------

  var option_Bandwidth_usage = {
    series: [
      {
        name: "",
        labels: ["0", "4", "8", "12", "16", "20", "24", "30"],
        data: [5, 0, 12, 1, 8, 3, 12, 15],
      },
    ],
    chart: {
      height: 70,
      type: "line",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#fff"],
    fill: {
      type: "solid",
      opacity: 1,
      colors: ["#fff"],
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      lineCap: "square",
      colors: ["#fff"],
      width: 4,
    },
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: "transparent",
      shape: "square",
      hover: {
        size: 7,
      },
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
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "10px",
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
  };

  var chart_line_basic = new ApexCharts(
    document.querySelector("#bandwidth-usage"),
    option_Bandwidth_usage
  );
  chart_line_basic.render();

  // -----------------------------------------------------------------------
  // Download count
  // -----------------------------------------------------------------------

  var option_Download_count = {
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
    option_Download_count
  );
  chart_column_basic.render();
});
