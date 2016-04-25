// loop
var count = 1;
var list = '';

while (count < 11) {
  list += '<li>current count is: ' + count + '</li>';
  count += 1;
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");

var arr = [[ "q1", "q2", "q3", "q4" ], [ "q1", "q2", "q3", "q4" ]];

var secondList = "<ul>"; 
var i = 0;

while (i < arr.length) {
  secondList += "<li>" + arr[i] + "</li>";
  i++;
}
secondList += "</ul>";
document.write(secondList);


