var fontSizes = {
  HeadTitleFontSize: 18,
  Head2TitleFontSize: 16,
  TitleFontSize: 14,
  SubTitleFontSize: 12,
  NormalFontSize: 10,
  SmallFontSize: 8,
};
var lineSpacing = {
  NormalSpacing: 12,
};
function generatePDF() {
  var doc = new jsPDF("p", "pt");
  var rightStartCol1 = 400;
  var rightStartCol2 = 480;
  var InitialstartX = 40;
  var startX = 40;
  var InitialstartY = 50;
  var startY = 0;
  var lineHeights = 12;
  doc.setFontSize(fontSizes.SubTitleFontSize);
  doc.setFont("helvetica");
  doc.setFontType("bold");
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.text("GSTIN", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(comapnyJSON.CompanyGSTIN, 80, startY);
  doc.setFontType("bold");
  doc.text("STATE", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(comapnyJSON.CompanyState, 80, startY);
  doc.setFontType("bold");
  doc.text("PAN", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(comapnyJSON.CompanyPAN, 80, startY);
  doc.setFontType("bold");
  doc.text("PIN", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(comapnyJSON.PIN, 80, startY);
  doc.setFontType("bold");
  doc.text("EMAIL", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(comapnyJSON.companyEmail, 80, startY);
  doc.setFontType("bold");
  doc.text("Phone: ", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(comapnyJSON.companyPhno, 80, startY);
  var tempY = InitialstartY;
  doc.setFontType("bold");
  doc.text(
    "INVOICE NO: ",
    rightStartCol1,
    (tempY += lineSpacing.NormalSpacing)
  );
  doc.setFontType("normal");
  doc.text(invoiceJSON.InvoiceNo, rightStartCol2, tempY);
  doc.setFontType("bold");
  doc.text(
    "INVOICE Date: ",
    rightStartCol1,
    (tempY += lineSpacing.NormalSpacing)
  );
  doc.setFontType("normal");
  doc.text(invoiceJSON.InvoiceDate, rightStartCol2, tempY);
  doc.setFontType("bold");
  doc.text(
    "Reference No: ",
    rightStartCol1,
    (tempY += lineSpacing.NormalSpacing)
  );
  doc.setFontType("normal");
  doc.text(invoiceJSON.RefNo, rightStartCol2, tempY);
  doc.setFontType("bold");
  doc.text("Total: ", rightStartCol1, (tempY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(invoiceJSON.TotalAmnt, rightStartCol2, tempY);
  doc.setFontType("normal");
  doc.setLineWidth(1);
  doc.line(
    20,
    startY + lineSpacing.NormalSpacing,
    220,
    startY + lineSpacing.NormalSpacing
  );
  doc.line(
    380,
    startY + lineSpacing.NormalSpacing,
    580,
    startY + lineSpacing.NormalSpacing
  );
  doc.setFontSize(fontSizes.Head2TitleFontSize);
  doc.setFontType("bold");
  doc.text(
    "TAX INVOICE",
    startX,
    (startY += lineSpacing.NormalSpacing + 2),
    null,
    null,
    "center"
  );
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFontType("bold");

  //-------Customer Info Billing---------------------
  var startBilling = startY;

  doc.text("Billing Address,", startX, (startY += lineSpacing.NormalSpacing));
  doc.text(
    customer_BillingInfoJSON.CustomerName,
    startX,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.text("GSTIN", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerGSTIN, 80, startY);
  doc.setFontType("bold");
  doc.text("Address", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerAddressLine1, 80, startY);
  doc.text(
    customer_BillingInfoJSON.CustomerAddressLine2,
    80,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.text(
    customer_BillingInfoJSON.CustomerAddressLine3,
    80,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.setFontType("bold");
  doc.text("STATE", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerState, 80, startY);
  doc.setFontType("bold");
  doc.text("PIN", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.PIN, 80, startY);
  doc.setFontType("bold");
  doc.text("EMAIL", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerEmail, 80, startY);
  doc.setFontType("bold");
  doc.text("Phone: ", startX, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerPhno, 80, startY);
  //-------Customer Info Shipping---------------------
  var rightcol1 = 340;
  var rightcol2 = 400;
  startY = startBilling;
  doc.setFontType("bold");
  doc.text(
    "Shipping Address,",
    rightcol1,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.text(
    customer_BillingInfoJSON.CustomerName,
    rightcol1,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFontType("bold");
  doc.text("GSTIN", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerGSTIN, rightcol2, startY);
  doc.setFontType("bold");
  doc.text("Address", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerAddressLine1, rightcol2, startY);
  doc.text(
    customer_BillingInfoJSON.CustomerAddressLine2,
    rightcol2,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.text(
    customer_BillingInfoJSON.CustomerAddressLine3,
    rightcol2,
    (startY += lineSpacing.NormalSpacing)
  );
  doc.setFontType("bold");
  doc.text("STATE", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerState, rightcol2, startY);

  doc.setFontType("bold");
  doc.text("PIN", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.PIN, rightcol2, startY);

  doc.setFontType("bold");
  doc.text("EMAIL", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerEmail, rightcol2, startY);

  doc.setFontType("bold");
  doc.text("Phone: ", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(customer_BillingInfoJSON.CustomerPhno, rightcol2, startY);

  var header = function (data) {
    doc.setFontSize(8);
    doc.setTextColor(40);
    doc.setFontStyle("normal");
    // doc.textAlign("TAX INVOICE", {align: "center"}, data.settings.margin.left, 50);

    //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    // doc.text("Testing Report", 110, 50);
  };
  doc.setFontSize(8);
  doc.setFontStyle("normal");
  var options = {
    beforePageContent: header,
    margin: {
      top: 50,
    },
    styles: {
      overflow: "linebreak",
      fontSize: 8,
      rowHeight: "auto",
      columnWidth: "wrap",
    },
    columnStyles: {
      1: { columnWidth: "auto" },
      2: { columnWidth: "auto" },
      3: { columnWidth: "auto" },
      4: { columnWidth: "auto" },
      5: { columnWidth: "auto" },
      6: { columnWidth: "auto" },
    },
    startY: (startY += 50),
  };
  var columns = [
    { title: "ID", dataKey: "id", width: 90 },
    { title: "Description", dataKey: "description", width: 40 },
    { title: "Flags", dataKey: "flags", width: 40 },
    { title: "Type", dataKey: "type", width: 40 },
    { title: "Date", dataKey: "recordDate", width: 40 },
  ];
  var rows = [
    {
      flags: 0,
      description: "Flag ao criar campo composto",
      recordDate: 1680559319693,
      id: "1c3a16e9-dbf6-4b96-afc2-cda128627b04",
    },
    {
      flags: 2,
      description: "clovis",
      recordDate: 1680825600000,
      id: "c6f5e3bc-1ce7-4eea-8449-ed24aeb68b04",
    },
  ];
  doc.autoTable(columns, rows, options);
  //-------Invoice Footer---------------------
  var rightcol1 = 340;
  var rightcol2 = 430;

  startY = doc.autoTableEndPosY() + 30;
  doc.setFontSize(fontSizes.NormalFontSize);

  doc.setFontType("bold");
  doc.text("Sub Total,", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.text(invoiceJSON.SubTotalAmnt, rightcol2, startY);
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFontType("bold");
  doc.text("CGST Rs.", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(invoiceJSON.TotalCGST, rightcol2, startY);
  doc.setFontType("bold");
  doc.text("SGST Rs.", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(invoiceJSON.TotalSGST, rightcol2, startY);
  doc.setFontType("bold");
  doc.text("IGST Rs.", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(invoiceJSON.TotalIGST, rightcol2, startY);
  doc.setFontType("bold");
  doc.text("CESS Rs.", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(invoiceJSON.TotalCESS, rightcol2, startY);
  doc.setFontType("bold");
  doc.text("Total GST Rs.", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(invoiceJSON.TotalGST, rightcol2, startY);
  doc.setFontType("bold");
  doc.text("Grand Total Rs.", rightcol1, (startY += lineSpacing.NormalSpacing));
  doc.setFontType("normal");
  doc.text(invoiceJSON.TotalAmnt, rightcol2 + 25, startY);
  doc.setFontType("bold");
  doc.text(
    "For " + comapnyJSON.CompanyName + ",",
    rightcol2,
    (startY += lineSpacing.NormalSpacing + 25)
  );
  doc.text(
    "Authorised Signatory",
    rightcol2,
    (startY += lineSpacing.NormalSpacing + 25)
  );
  doc.save("InvoiceTemplate.pdf");
}
