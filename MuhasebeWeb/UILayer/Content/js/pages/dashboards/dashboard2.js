// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 2 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
  "use strict";
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
      height: 260,
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
      height: 220,
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
    document.querySelector("#visitor"),
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
    document.querySelector("#bandhwidth-usage"),
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

  // -----------------------------------------------------------------------
  // This is for the map
  // -----------------------------------------------------------------------

  $("#usa").vectorMap({
    map: "us_aea_en",
    backgroundColor: "transparent",
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: "#c9d6de",
      },
    },
    markers: [
      {
        latLng: [40.71, -74.0],
        name: "Newyork: 250",
        style: { fill: "#1e88e5" },
      },
      {
        latLng: [39.01, -98.48],
        name: "Kansas: 250",
        style: { fill: "#fc4b6c" },
      },
      {
        latLng: [37.38, -122.05],
        name: "Vally : 250",
        style: { fill: "#26c6da" },
      },
    ],
  });
});
