var week = [
  "Sunday",
  "Monday",
  "tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];
function zeroPadding(num) {
  return num < 10 ? "0" + num : num;
}
function showtime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h > 12){
    h = h - 12;
    session = "PM";
  }
  h = zeroPadding(h);
  m = zeroPadding(m);
  s = zeroPadding(s);
  var time = h + ":" + m + ":" + s + " " + session;
  var dateS =
    week[date.getDay()] +
    ", " +
    months[date.getMonth()] +
    " " +
    zeroPadding(date.getDate());
    document.querySelector(".time").innerHTML = time;
    document.querySelector(".date").innerHTML = dateS
  } 
var interval = setInterval(showtime, 1000);

