var oCheckBox = oEvent.getSource();
const context = oEvent.oSource.getBindingContext();
const data = context.getObject();
var date = new Date();
var username = AppCache.userInfo.email;
var today = new Date();
var day = String(today.getDate()).padStart(2, "0");
var month = String(today.getMonth() + 1).padStart(2, "0");
var year = today.getFullYear();
// day++;
var dateWithoutTime = year + "-" + month + "-" + day;
var data2 = modelList.getData();

if (oCheckBox.getSelected()) {
    if (username == undefined) {
        username = "admin";
    }
    var shouldAdd = true;
    for (var i = 0; i < data2.length; i++) {
        if (
            data2[i].createdBy === username &&
            data2[i].keyDate === dateWithoutTime &&
            data2[i].category === data.category
        ) {
            shouldAdd = false;
            break;
        }
    }

    if (shouldAdd) {
        var sameDateCategoryData = data2.filter(function (item) {
            return item.keyDate === data.keyDate && item.category === data.category;
        });

        if (sameDateCategoryData.length === 0) {
            var options = {
                parameters: {
                    where: "", // Optional
                },
                data: {
                    keyDate: dateWithoutTime,
                    date: date,
                    category: data.category,
                    points: "1",
                    comment: "",
                },
            };
            apiRestAPILogPost(options);
        }
    }
} else {
    sap.ui.core.BusyIndicator.show(0);
    if (username == undefined) {
        username = "admin";
    }
    var options = {
        parameters: {
            where: JSON.stringify({
                createdBy: username,
                keyDate: dateWithoutTime,
                category: data.category,
            }), // Optional
        },
    };
    apiLogClean(options);
}

for (var i = 0; i < data2.length; i++) {
    var currentItem2 = data2[i];
    currentItem2.normal = true;
    currentItem2.green = false;
    currentItem2.state = false;
    
    if (
        currentItem2.createdBy === username &&
        currentItem2.keyDate === dateWithoutTime &&
        currentItem2.category === data.category
    ) {
        currentItem2.normal = false;
        currentItem2.green = true;
        currentItem2.state = true;
    }
}
//console.log(data2);
modelList.setData(data2);
