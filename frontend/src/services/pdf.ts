import jsPDF from "jspdf";
import { IReport } from "./reports";
import autoTable from "jspdf-autotable";
import dateTimeToReadble from "./common";

const generatePdf = (reports: IReport[]) => {
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
  const flagsQuantity = flagsArray.reduce((a, b) => a + b, 0).toString();

  const result = [
    flagsQuantity,
    dateTimeToReadble(reports[0].recordDate),
    dateTimeToReadble(reports[0].recordDate),
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
    body: [result],
  });

  doc.save("a4.pdf");
};

export default generatePdf;
