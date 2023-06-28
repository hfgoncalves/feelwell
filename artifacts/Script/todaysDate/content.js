let dateFrom = new Date();
dateFrom.setDate(dateFrom.getDate() - 1);
dateFrom.setHours(23, 00, 00);

let dateTo = new Date();
dateTo.setHours(22, 59, 00);

dateFrom = new Date(dateFrom);
dateTo = new Date(dateTo);

result.data = dateFrom + "-" + dateTo;
complete();