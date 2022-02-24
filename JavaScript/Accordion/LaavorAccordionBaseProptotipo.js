var father;
var ulItem;
var time;
var time2;
var laavorHeightInitial;

String.prototype.laavorToInteger = function()
{
	"use strict";
	var returnItem = parseInt(this);
	return returnItem;
};

function LaavorAccordion(idFather, idUL, object) {
    var fatherItem = document.getElementById(idFather);
	ulItem = document.getElementById(idUL);
	
	if(ulItem.clientHeight !== undefined && ulItem.clientHeight !== null)
	{
		laavorHeightInitial = ulItem.clientHeight.toString().laavorToInteger();
	}
	else if(ulItem.height !== undefined && ulItem.style.height !== null)
	{
		laavorHeightInitial = ulItem.height.toString().laavorToInteger();
	}
	else if(ulItem.offsetHeight !== undefined && ulItem.offsetHeight !== null)
	{
		laavorHeightInitial = ulItem.offsetHeight.toString().laavorToInteger() - 2;
	}
	
	/*
	father = fatherItem;
	father.style.border = "1px solid #eee";*/
	/*
	ulItem.style.visibility = "hidden";
	ulItem.style.opacity = "0";
    ulItem.style.transition = "visibility 1.5s, opacity 1.5s linear";*/
	
	/*
	ulItem.onmouseover = MouseOver();	
	ulItem.onmousedown = MouseLeave();*/
	//ulItem.style.visibility = ":hover visible";
	//ulItem.style.opacity = ":hover 1";
	
	/*
	fatherItem.style.transition = "display 2s, opacity 4.5s linear";
	fatherItem.addEventListener("click", laavorClickLabel);	*/
}

function laavorClickLabel()
{
	MouseOver();
	/*
	var esd = ulItem.height;
	var was = 0;*/
}

function laavorClickLabel2()
{
	MouseLeave();
	/*
	var esg = ulItem.height;
	var qsa = 0; */
}

function MouseOver()
{
	var s="myDIV ";
   s=s.trim();
  
        //fm.setAttribute('style', 'height: 500px');
        //fm.style.height = '500px';
  
  //ulItem.style.transform="rotateX(20deg)";
  setTimeout(function(){
	  ulItem.style.height =  laavorHeightInitial.toString() + 'px';
	
		}, 500);
		
	setTimeout(function(){
		var count2 = laavorHeightInitial - 20;
  	  ulItem.style.height = count2.toString() + 'px';
	
		}, 1000);
		
	setTimeout(function(){
		var count3 = laavorHeightInitial - 30;
  ulItem.style.height = count3.toString() + 'px';
	
	}, 1500);
		
setTimeout(function(){
	var count4 = laavorHeightInitial - 50;
	var heig4 = count4.toString() + "px";
	  ulItem.style.height = heig4;

		}, 2000);
	  /*
		ulItem.style.transform="rotateX(10deg)";
		}, 500);
		
		setInterval(function(){
		ulItem.style.transform="rotateX(20deg)";
		}, 1000);
		
		setInterval(function(){
		ulItem.style.transform="rotateX(30deg)";
		}, 1500);
		*/
		
     
  /*
	if(ulItem !== undefined && ulItem !== null)
	{
		ulItem.transform = "scale(1,1)";
		/*
		ulItem.style.display = "block";	
			
		time = setInterval(function(){
			ulItem.transform = "rotateX(-90deg)";
		ulItem.style.transition = "visibility 1.5s ease-in-out, opacity 1.5s ease-in-out";
		ulItem.style.visibility = "visible";
		ulItem.style.opacity = "1";
		
			clearInterval(time);
		}, 1500);
		
	}*/
}

function MouseLeave()
{
		var s="myDIV ";
   s=s.trim();
  
	 // ulItem.style.transform="rotateX(-60deg)";
	  ulItem.style.perspective = "100px";
	  return;
	if(ulItem !== undefined && ulItem !== null)
	{
		//transform: rotateX(-90deg);
		//transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
		ulItem.transform = "rotateX(60deg)";
		/*
		ulItem.style.transition = "all 0.5s cubic-bezier(.36,-0.64,.34,1.76)";
		//ulItem.style.transition = "visibility 1.5s ease-in-out, opacity 1.5s ease-in-out";
		ulItem.style.visibility = "hidden";
		ulItem.style.opacity = "0";
		
		
		time2 = setInterval(function(){
			ulItem.style.display = "none";
			clearInterval(time2);
		}, 1500);*/
		
	}
	

}


/*
div {
  border: 1px solid #eee;
}*/

/*
div > ul {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  
  div:hover > ul {
  visibility: visible;
  opacity: 1;
}
}*/