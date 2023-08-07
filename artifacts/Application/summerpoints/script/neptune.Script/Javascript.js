var today = new Date(); 
var threeDaysAgo = new Date(); 
threeDaysAgo.setDate(today.getDate() - 3);
DatePicker.setMinDate(threeDaysAgo);
DatePicker.setMaxDate(today);