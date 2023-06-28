dateString = DatePicker.getDateValue();
var date = new Date(dateString);
var year = date.getFullYear();
var month = String(date.getMonth() + 1).padStart(2, "0");
var day = String(date.getDate()).padStart(2, "0");
var dateWithoutTime = year + "-" + month + "-" + day;



var data2 = modelList.getData();
var dataAll = modelModelArrayAllData.getData();
var username = AppCache.userInfo.email;
if(username == undefined){
    username = "admin";
}
for (var i = 0; i < data2.length; i++) {
    var currentItem2 = data2[i];
    currentItem2.state = false; 
    currentItem2.green = false;
    currentItem2.normal = true;

    for (var j = 0; j < dataAll.length; j++) {
        var currentItemAll = dataAll[j];

        if (
            currentItemAll.createdBy === username &&
            currentItemAll.keyDate === dateWithoutTime &&
            currentItemAll.category === currentItem2.category
        ) {
            currentItem2.state = true;
            currentItem2.green = true;
            currentItem2.normal = false;
            break;
        }else{
            currentItem2.state = false;
            currentItem2.green = false;
            currentItem2.normal = true;
        }
    }
}

modelList.setData(data2);