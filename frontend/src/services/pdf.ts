import jsPDF from "jspdf";
import { IReport, typeEnum } from "./reports";
import autoTable from "jspdf-autotable";
import dateTimeToReadble from "./common";
import getChart from "./image";

const generatePdf = async (
  reports: IReport[],
  dataInicial = "Não informado",
  dataFinal = "Não informado"
) => {
  const doc = new jsPDF();
  const cleanedReports = reports?.map(
    ({ flags, description, testCases, type, recordDate }) => [
      description,
      flags,
      testCases,
      type,
      dateTimeToReadble(recordDate),
    ]
  );

  const flagsArray = reports?.map(({ flags }) => Number(flags));
  const flagsQuantity = flagsArray.reduce((a, b) => a + b, 0);

  const resultFlags = [
    flagsQuantity,
    dateTimeToReadble(dataInicial),
    dateTimeToReadble(dataFinal),
  ];

  const bugArray = reports?.filter(({ type }) => type === typeEnum.bug);
  const prArray = reports?.filter(({ type }) => type === typeEnum.pr);
  const testCaseArray = reports.filter(
    ({ type }) => type === typeEnum.testCase
  );

  const prQuantity = prArray.length;
  const bugQuantity = bugArray.length;
  const testCaseQuantity = testCaseArray.length;
  const resultbug = [
    bugQuantity,
    dateTimeToReadble(dataInicial),
    dateTimeToReadble(dataFinal),
  ];

  const resultTestCase = [
    testCaseQuantity,
    dateTimeToReadble(dataInicial),
    dateTimeToReadble(dataFinal),
  ];

  var startY = 0;

  var header = function (data) {
    doc.setFontSize(8);
    doc.setTextColor(40);
  };

  autoTable(doc, {
    head: [
      ["Descrição", "Flags", "Casos de teste", "Tipo", "Data da ocorrencia"],
    ],
    body: cleanedReports,
  });

  autoTable(doc, {
    head: [["Quantidade total de flags", "Data inicial", "Data final"]],
    body: [resultFlags],
  });

  autoTable(doc, {
    head: [["Quantidade total de bugs", "Data inicial", "Data final"]],
    body: [resultbug],
  });

  autoTable(doc, {
    head: [
      ["Quantidade total de casos de teste", "Data inicial", "Data final"],
    ],
    body: [resultTestCase],
  });

  doc.addPage();

  doc.addImage(
    await getChart(bugQuantity, flagsQuantity, prQuantity, testCaseQuantity),
    16,
    70,
    200,
    120
  );

  doc.save("a4.pdf");
};

export default generatePdf;
