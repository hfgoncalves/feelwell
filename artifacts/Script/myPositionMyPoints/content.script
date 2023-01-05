// User information
const user = req.user;
const userId = user.id;
const username = user.username;

//const username = "test";

    /// ----

const log = await entities.fw_log.createQueryBuilder("alias")
    .getMany();

const unique = [...new Set(log.map(item => item.createdBy))]; // [ 'A', 'B']


console.log(unique)

var resultArray = []

for (k = 0; k < unique.length; k++) {

    var points = 0

    for (i = 0; i < log.length; i++) {

        
        if(log[i].createdBy == unique[k]) {
            points = points + log[i].points
        }

    }

    resultArray.push({
        "createdBy":unique[k],
        "points":parseInt(points)
    })

}


//console.log(resultArray);

function compare( a, b ) {
  if ( b.points < a.points ){
    return -1;
  }
  if ( b.points > a.points ){
    return 1;
  }
  return 0;
}



resultArray.sort( compare );

console.log(resultArray);


position = resultArray.findIndex((obj => obj.createdBy == username));
var realPosition = position+1
console.log("realPosition")
console.log(realPosition)

var finalObj = {
    "position":realPosition,
    "points":resultArray[position].points
}

console.log(finalObj)

result.data = finalObj

