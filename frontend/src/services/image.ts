import QuickChart from "quickchart-js";

const getChart = async (
  bugQuantity: number,
  flagsQuantity: number,
  prQuantity: number,
  testCasesQuantity: number
) => {
  const chart = new QuickChart();

  chart.setWidth(300);
  chart.setHeight(200);
  chart.setVersion("2");

  chart.setConfig({
    type: "pie",
    data: {
      datasets: [
        {
          data: [bugQuantity, flagsQuantity, prQuantity, testCasesQuantity],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
          ],
          label: "Dataset 1",
        },
      ],
      labels: ["Bugs", "Flags", "Pull requests", "Test cases"],
    },
  });

  // Print the chart URL
  return chart.getUrl();

  // Get the image...
  //return await chart.toBinary();

  // Or write it to a file
  //chart.toFile("chart.png");
};

export default getChart;
