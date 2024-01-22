// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 4 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
  "use strict";
  // -----------------------------------------------------------------------
  // Total revenue chart
  // -----------------------------------------------------------------------

  var options_total_revenue = {
    series: [
      {
        name: "2020 ",
        data: [
          800000, 1200000, 1400000, 1300000, 1200000, 1400000, 1300000, 1300000,
          1200000,
        ],
      },
      {
        name: "2016 ",
        data: [
          200000, 400000, 500000, 300000, 400000, 500000, 300000, 300000,
          400000,
        ],
      },
      {
        name: "2015 ",
        data: [
          100000, 200000, 400000, 600000, 200000, 400000, 600000, 600000,
          200000,
        ],
      },
    ],
    chart: {
      fontFamily: "Poppins,sans-serif",
      type: "bar",
      height: 300,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
    },
    colors: ["#1e88e5", "#21c1d6", "#fc4b6c"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
      ],
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
      theme: "dark",
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  var chart_column_stacked = new ApexCharts(
    document.querySelector("#total-revenue"),
    options_total_revenue
  );
  chart_column_stacked.render();

  // -----------------------------------------------------------------------
  // sales difference
  // -----------------------------------------------------------------------

  var sales_difference = {
    series: [25, 10],
    labels: ["A ", "B "],
    chart: {
      type: "donut",
      height: 115,
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
          size: "60%",
          labels: {
            show: false,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: false,
              color: "#a1aab2",
              fontSize: "13px",
              label: "Visits",
            },
          },
        },
      },
    },
    colors: ["#21c1d6", "#f2f4f8"],
    tooltip: {
      show: true,
      fillSeriesColor: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 426,
        options: {
          chart: {
            offsetX: -35,
            width: 200,
          },
        },
      },
    ],
  };

  var chart_pie_donut = new ApexCharts(
    document.querySelector("#sales-difference"),
    sales_difference
  );
  chart_pie_donut.render();
  // -----------------------------------------------------------------------
  // world map
  // -----------------------------------------------------------------------
  jQuery("#visitfromworld").vectorMap({
    map: "world_mill_en",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderOpacity: 0.9,
    borderWidth: 1,
    zoomOnScroll: false,
    color: "#ddd",
    regionStyle: {
      initial: {
        fill: "rgba(0,0,0,.1)",
        "stroke-width": 1,
        stroke: "#black",
      },
    },
    markerStyle: {
      initial: {
        r: 5,
        fill: "#26c6da",
        "fill-opacity": 1,
        stroke: "#fff",
        "stroke-width": 1,
        "stroke-opacity": 1,
      },
    },
    enableZoom: true,
    hoverColor: "#79e580",
    markers: [
      {
        latLng: [21.0, 78.0],
        name: "India : 9347",
        style: { fill: "#398bf7" },
      },
      {
        latLng: [-33.0, 151.0],
        name: "Australia : 250",
        style: { fill: "#398bf7" },
      },
      {
        latLng: [36.77, -119.41],
        name: "USA : 250",
        style: { fill: "#398bf7" },
      },
      {
        latLng: [55.37, -3.41],
        name: "UK   : 250",
        style: { fill: "#398bf7" },
      },
      {
        latLng: [25.2, 55.27],
        name: "UAE : 250",
        style: { fill: "#398bf7" },
      },
    ],
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#fff", "#ccc"],
    selectedColor: "#c9dfaf",
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function (element, code, region) {
      var message =
        'You clicked "' +
        region +
        '" which has the code: ' +
        code.toUpperCase();
      alert(message);
    },
  });
  // -----------------------------------------------------------------------
  // sparkline chart
  // -----------------------------------------------------------------------

  var option_unique_visit = {
    series: [
      {
        name: "",
        data: [4, 5, 2, 10, 9, 12, 4, 9],
      },
    ],
    chart: {
      type: "bar",
      height: 70,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#26c6da"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "95%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
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
    document.querySelector("#unique-visit"),
    option_unique_visit
  );
  chart_column_basic.render();

  var option_total_visit = {
    series: [
      {
        name: "",
        data: [0, 5, 6, 10, 9, 12, 4, 9],
      },
    ],
    chart: {
      fontFamily: "Poppins,sans-serif",
      type: "bar",
      height: 70,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#7460ee"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "95%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
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
    document.querySelector("#total-visit"),
    option_total_visit
  );
  chart_column_basic.render();

  var option_bounce_rate = {
    series: [
      {
        name: "",
        data: [0, 5, 6, 10, 9, 12, 4, 9],
      },
    ],
    chart: {
      type: "bar",
      height: 70,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#03a9f3"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "95%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
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
    document.querySelector("#bounce-rate"),
    option_bounce_rate
  );
  chart_column_basic.render();

  var option_page_views = {
    series: [
      {
        name: "",
        data: [0, 5, 6, 10, 9, 12, 4, 9],
      },
    ],
    chart: {
      type: "bar",
      height: 70,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#f62d51"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "95%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
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
    document.querySelector("#page-views"),
    option_page_views
  );
  chart_column_basic.render();
});
// -----------------------------------------------------------------------
// Gauge chart option
// -----------------------------------------------------------------------

var sales_prediction = {
  chart: {
    height: 150,
    type: "radialBar",
    fontFamily: "Poppins,sans-serif",
    sparkline: {
      enabled: true,
    },
  },
  series: [100],
  colors: ["#9e8bfe"],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      track: {
        background: "#E0E0E0",
        startAngle: -135,
        endAngle: 135,
      },
      hollow: {
        size: "30%",
        background: "transparent",
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: false,
        },
        total: {
          show: true,
          fontSize: "20px",
          color: "#000",
          label: "91.4 %",
        },
      },
    },
  },
  grid: {
    padding: {
      top: 20,
    },
  },
  fill: {
    type: "solid",
  },
  stroke: {
    lineCap: "butt",
  },
  tooltip: {
    enabled: true,
    fillSeriesColor: false,
    theme: "dark",
  },
  labels: ["Sales Prediction "],
};

new ApexCharts(
  document.querySelector("#sales-prediction"),
  sales_prediction
).render();
