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
    ({ flags, description, type, recordDate }) => [
      description,
      flags,
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

  const prQuantity = prArray.length;
  const bugQuantity = bugArray.length;
  console.log({ bugArray });
  const resultbug = [
    bugQuantity,
    dateTimeToReadble(dataInicial),
    dateTimeToReadble(dataFinal),
  ];

  console.log(flagsArray);
  console.log(flagsQuantity);

  var startY = 0;

  var header = function (data) {
    doc.setFontSize(8);
    doc.setTextColor(40);
  };

  autoTable(doc, {
    head: [["Descrição", "Flags", "Tipo", "Data da ocorrencia"]],
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

  doc.addPage();

  doc.addImage(
    await getChart(bugQuantity, flagsQuantity, prQuantity),
    16,
    70,
    200,
    120
  );

  doc.save("a4.pdf");
};

export default generatePdf;
