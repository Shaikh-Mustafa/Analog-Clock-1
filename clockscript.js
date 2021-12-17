

var myvar = setInterval(start_clock,1000);    // will do this every 1000 milliseconds withour refreshing...or 1 second..

function start_clock(){
  d =  new Date();
  
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
 
  hrotation = 30 * htime + mtime/2;    // formulas by harry bhai....
  mrotation = 6 * mtime;
  srotation = 6 * stime;
 
 // setting the above values in the css
 
 hour.style.transform = `rotate(${hrotation}deg)`;
 minute.style.transform = `rotate(${mrotation}deg)`;
 second.style.transform = `rotate(${srotation}deg)`;
 
}