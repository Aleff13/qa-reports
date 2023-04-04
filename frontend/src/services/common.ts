const dateTimeToReadble = (date: number) => {
  const formatedDate = new Date(date).toLocaleString().split(",")[0];
  return formatedDate;
};

export default dateTimeToReadble;
