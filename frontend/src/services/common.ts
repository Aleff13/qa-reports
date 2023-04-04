const dateTimeToReadble = (date: number | string) => {
  if (typeof date === "string") {
    return date;
  }
  const formatedDate = new Date(date).toLocaleString().split(",")[0];
  return formatedDate;
};

export default dateTimeToReadble;
