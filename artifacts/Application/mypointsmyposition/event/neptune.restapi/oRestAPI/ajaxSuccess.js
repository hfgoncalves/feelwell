var myResponse = xhr.responseJSON

console.log("Position: "+myResponse.position+"  Points:"+myResponse.points)
oTitle.setText("No Position yet!");
oTitle.setText("My position: "+myResponse.position+"\nMy points: "+myResponse.points)