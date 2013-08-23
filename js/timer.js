	// window.onload = function() {
	//   countdown('countdown', 5, 0);
	// };

var intervalBaron = null;
var intervalDragon = null;
var intervalBlueAmigo = null;
var intervalBlueEnemigo = null;
var intervalRedAmigo = null;
var intervalRedEnemigo = null;
function countdown(element, min, sec) {
		var interval;
		var flag;
		var seconds = sec;
		var minutes = min;
		var el = document.getElementById(element);
		if( element == 'TimerBaron'){
			interval = intervalBaron;
		}
		else if (element == 'TimerDragon') {
			interval = intervalDragon;
		}
		else if(element == 'TimerBlueAmigo'){
			interval = intervalBlueAmigo;
		}
		else if (element == 'TimerBlueEnemigo') {
			interval = intervalBlueEnemigo;
		}
		else if (element == 'TimerRedAmigo') {
			interval = intervalRedAmigo;
		}
		else if (element == 'TimerRedEnemigo') {
			interval = intervalRedEnemigo;
		}
		if(interval){
			clearInterval(interval);
			el.textContent = "";
			RemoveClassFromElement(el.parentNode, "grayscale");
			interval = null;
		}
		else{
			interval = setInterval(function() {
			AddClassToElement(el.parentNode, "grayscale");
			var minute_text = '00';
			if(seconds === 0) {
				if(minutes === 0) {
					//el.innerHTML = "over!";
					el.textContent = "over!";
					clearInterval(interval);
					return;
				} else {
					minutes--;
					seconds = 60;
				}
			}
			if(minutes > 0) {
				minute_text = minutes;
			}
			//el.innerHTML = minute_text+':'+seconds;
			if (seconds < 10) {
				seconds = '0'+seconds;
			}
			el.textContent = minute_text+':'+seconds;
			seconds--;
			}, 1000);
		}
		if( element == 'TimerBaron'){
			intervalBaron = interval;
		}
		else if (element == 'TimerDragon') {
			intervalDragon = interval;
		}
		else if(element == 'TimerBlueAmigo'){
			intervalBlueAmigo = interval;
		}
		else if (element == 'TimerBlueEnemigo') {
			intervalBlueEnemigo = interval;
		}
		else if (element == 'TimerRedAmigo') {
			intervalRedAmigo = interval;
		}
		else if (element == 'TimerRedEnemigo') {
			intervalRedEnemigo = interval;
		}
	}
//This code is jQuery's
function AddClassToElement(elem,value){
 var rspaces = /\s+/;
 var classNames = (value || "").split( rspaces );
 var className = " " + elem.className + " ",
 setClass = elem.className;
 for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
  if ( className.indexOf( " " + classNames[c] + " " ) < 0 ) {
   setClass += " " + classNames[c];
  }
 }
 elem.className = setClass.replace(/^\s+|\s+$/g,'');//trim
}

//This code is jQuery's
function RemoveClassFromElement(elem,value){
 var rspaces = /\s+/;
 var rclass = /[\n\t]/g;
 var classNames = (value || "").split( rspaces );
 var className = (" " + elem.className + " ").replace(rclass, " ");
 for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
  className = className.replace(" " + classNames[c] + " ", " ");
 }
 elem.className = className.replace(/^\s+|\s+$/g,'');//trim
}
	//	function changeImage (urlNew) {
//		// body...
//	}
//	var body = document.getElementsByTagName('body')[0];
//body.style.backgroundImage = 'url(http://localhost/background.png)';