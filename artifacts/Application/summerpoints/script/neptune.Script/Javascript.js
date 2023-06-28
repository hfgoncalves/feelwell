var today = new Date(); // Bugünün tarihini alın
var threeDaysAgo = new Date(); // Üç gün öncesinin tarihini alın
threeDaysAgo.setDate(today.getDate() - 3);
DatePicker.setMinDate(threeDaysAgo); // Minimum tarih değerini üç gün önceye ayarlayın
DatePicker.setMaxDate(today);