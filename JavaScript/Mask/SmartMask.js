var laavorAllInputsInteger;
var laavorAllInputs;
var laavorAllInputsDouble;
var laavorAllInputsEmail;

function SmartMask() {
	"use strict";
	var smartInteger = document.getElementsByClassName("laavorInteger");
		
	if(smartInteger === undefined || smartInteger === null || smartInteger.length === 0)
	{
		
	}
	else
	{
		if(laavorAllInputsInteger === undefined || laavorAllInputsInteger === null)
		{
			laavorAllInputsInteger = [];
		}
	
		for(var iSmartInteger = 0; iSmartInteger < smartInteger.length; iSmartInteger++)
		{		
			var smartIntegerItem = smartInteger[iSmartInteger];
			laavorMaskIntegerInitAll(smartIntegerItem, iSmartInteger);		
		}
	}
		
	var smartDouble = document.getElementsByClassName("laavorDouble");
	
	if(smartDouble === undefined || smartDouble === null || smartDouble.length === 0)
	{
		
	}
	else
	{
		if(laavorAllInputsDouble === undefined || laavorAllInputsDouble === null)
		{
			laavorAllInputsDouble = [];
		}
	
		for(var iSmartDouble = 0; iSmartDouble < smartDouble.length; iSmartDouble++)
		{		
			var smartDoubleItem = smartDouble[iSmartDouble];
			laavorMaskDoubleInitAll(smartDoubleItem, iSmartDouble);		
		}
	}
	
}

window.addEventListener('load', function () {
    
	SmartMask();
});

function laavorMaskIntegerInitAll(itemInteger, id)
{
	"use strict";
	var uniqueName = laavorUniqueName(id);
	
	/*
	itemInteger.setAttribute("LaavorAtrHexInt", uniqueName);
	itemInteger.classList.add(uniqueName);	*/
	
	itemInteger.onkeydown = changeInteger;// addEventListener("onkeydown", changeInteger);
	itemInteger.style.textAlign = "right";
		/*	
	if(itemInteger !== undefined && itemInteger !== null)
	{
		var laavorMaxLength = itemInteger.getAttribute("laavorMaxLength");
		var laavorCanNegative = itemInteger.getAttribute("laavorCanNegative");
		var laavorThousandSeparator = itemInteger.getAttribute("laavorThousandSeparator");
		
		if(laavorMaxLength !== undefined && laavorMaxLength !== null)
		{
			var esd  = 0;
		}
	}*/
}

function laavorMaskDoubleInitAll(itemDouble, id)
{
	"use strict";
	var uniqueName = laavorUniqueName(id);
	
	/*
	itemDouble.setAttribute("LaavorAtrHexDbl", uniqueName);
	itemDouble.classList.add(uniqueName);	*/
	
	itemDouble.onkeydown = changeDouble;//itemDouble.addEventListener("onkeydown", changeDouble);
	itemDouble.style.textAlign = "right";
		/*	
	if(itemDouble !== undefined && itemDouble !== null)
	{
		var laavorMaxLength = itemDouble.getAttribute("laavorMaxLength");
		var laavorCanNegative = itemDouble.getAttribute("laavorCanNegative");
		var laavorThousandSeparator = itemDouble.getAttribute("laavorThousandSeparator");
		
		if(laavorMaxLength !== undefined && laavorMaxLength !== null)
		{
			var esd  = 0;
		}
	}*/
}

function changeInteger(inputItem)
{
	var laavorMaxLength = this.getAttribute("laavorMaxLength");
	var laavorCanNegative = this.getAttribute("laavorCanNegative");
	var laavorThousandSeparator = this.getAttribute("laavorThousandSeparator");
	var laavorDecimalSeparator = this.getAttribute("laavorDecimalSeparator");
	var formattedValue = "";
	var fullValue = "";	
	var containsNegative = false;
	
	if(inputItem.key === "Control" || inputItem.key === "Shift" || inputItem.key === "ArrowRight" || inputItem.key === "ArrowLeft" || 
	   inputItem.key === "ArrowUp" || inputItem.key === "ArrowDown")
	{
		return true;
	}
	
	if(this.selectionStart === 0 && this.selectionEnd === this.value.length)
	{
		if(inputItem.key === "Delete" && inputItem.key === "Backspace")
		{
			//fullValue = this.value.substring(0, this.selectionStart) + this.value.substring(this.selectionEnd, this.value.length - 1);	

			this.value = "";
			this.setSelectionRange(this.selectionStart, this.selectionStart);
			inputItem.preventDefault();
			return false;				
		}
		else
		{
			fullValue = inputItem.key.toString();			
		}
	}
	else
	{
		if(inputItem.key === "Delete" && inputItem.key === "Backspace")
		{
			fullValue = this.value.substring(0, this.selectionStart) + this.value.substring(this.selectionEnd, this.value.length - 1);	

			this.value = fullValue;
			this.setSelectionRange(this.selectionStart, this.selectionStart);
			inputItem.preventDefault();
			return false;				
		}
		else
		{
			fullValue = this.value.substring(0, this.selectionStart) + inputItem.key.toString() + this.value.substring(this.selectionEnd, this.value.length);		
		}
	}
	
	if(this.selectionStart === 0 && this.selectionEnd === this.value.length)
	{
		fullValue = inputItem.key.toString();	
	}
	else
	{
		fullValue = this.value.substring(0, this.selectionStart) + inputItem.key.toString() + this.value.substring(this.selectionEnd, this.value.length);	
	}
	
	if(laavorThousandSeparator !== undefined && laavorThousandSeparator !== null)
	{
		while(fullValue.indexOf(laavorThousandSeparator) !== -1)
		{
			fullValue = fullValue.toString().replace(laavorThousandSeparator.toString(), "");	
		}
	}
	
	if(laavorMaxLength !== undefined && laavorMaxLength !== null)
	{
		var valueStr;
		valueStr = fullValue;
		
		while(valueStr.indexOf(laavorThousandSeparator) !== -1)
		{
			valueStr = valueStr.toString().replace(laavorThousandSeparator.toString(), "");	
		}
		
		if(valueStr.length >= laavorMaxLength.toString().laavorToInteger())
		{
			inputItem.preventDefault();
			return false;
		}
	}
	
	if(laavorCanNegative !== undefined && laavorCanNegative !== null)
	{
		if(laavorCanNegative === "false" && inputItem.key === "-")
		{
			inputItem.preventDefault();
			return false;
		}
		else if(laavorCanNegative === "true")
		{
			if((this.selectionEnd !== 0 || this.selectionEnd !== 0) && inputItem.key === "-")
			{
				inputItem.preventDefault();
				return false;
			}
			else if(inputItem.key === "-")
			{
				containsNegative = true;
			}
		}
	}
	

	
	for(var iCh = fullValue.length - 1; iCh >= 0; iCh--)
	{
		if(fullValue[iCh] === '1' || fullValue[iCh] === '2'  || fullValue[iCh] === '3'  || fullValue[iCh] === '4' ||
		   fullValue[iCh] === '5' || fullValue[iCh] === '6'  || fullValue[iCh] === '7'  || fullValue[iCh] === '8' || 
		   fullValue[iCh] === '9' || fullValue[iCh] === '0'  || fullValue[iCh] === '-')
		{
			continue;			
		}
		else
		{
			inputItem.preventDefault();
			return false;
		}
	}
	
	if(laavorThousandSeparator !== undefined && laavorThousandSeparator !== null)
	{	
		var countSep = 0;
		for(var iCh = fullValue.length - 1; iCh >= 0; iCh--)
		{
			countSep++;
			
			if(countSep%3 === 0)
			{
				formattedValue = laavorThousandSeparator + fullValue[iCh] + formattedValue;
			}
			else
			{
				formattedValue = fullValue[iCh] + formattedValue;
			}
		}
		
		if(formattedValue.length > 1)
		{
			if(formattedValue[0] === laavorThousandSeparator)
			{
				formattedValue = formattedValue.substring(1, formattedValue.length);
			}
		}
		else if(formattedValue === laavorThousandSeparator)
		{
			formattedValue = "";
		}
		
		if(containsNegative === "true")
		{
			formattedValue = "-" + formattedValue;
		}

		this.value = formattedValue;
		inputItem.preventDefault();
		return false;
	}
	else
	{
		this.value = formattedValue;
		inputItem.preventDefault();
		return false;
	}
	
}

function changeDouble(inputItem)
{
	var laavorCanNegative = this.getAttribute("laavorCanNegative");
	var laavorThousandSeparator = this.getAttribute("laavorThousandSeparator");
	var laavorDecimalSeparator = this.getAttribute("laavorDecimalSeparator");
	var laavorNumberOfDecimals = this.getAttribute("laavorNumberOfDecimals");
	var laavorAmountOfIntegers = this.getAttribute("laavorAmountOfIntegers");
	var formattedValueInteger = "";
	var formattedValueDecimal = "";
	var fullValue;  
	var containsNegative = false;
	var decimalIntegerValue = [];
	var integerSide = "";
	var decimalSide = "";
	var copySelection;
	var isDelete = false;
	
	if(inputItem.key.toString() === "Control" || inputItem.key.toString() === "Shift" || inputItem.key.toString() === "ArrowRight" || 
	   inputItem.key.toString() === "ArrowLeft" || inputItem.key.toString() === "ArrowUp" || inputItem.key.toString() === "ArrowDown")
	{
		return true;
	}
	
	if(laavorNumberOfDecimals === undefined && laavorNumberOfDecimals === null)
	{
		laavorNumberOfDecimals = 2;
	}
	
	if(this.selectionStart === 0 && this.selectionEnd === this.value.length)
	{
		if(inputItem.key.toString() === "Delete" || inputItem.key.toString() === "Backspace")
		{
			fullValue = this.value;	

			//this.value = fullValue;
		    //this.setSelectionRange(this.selectionStart, this.selectionStart);
			//inputItem.preventDefault();
			//return false;		
			isDelete = true;				
		}
		else
		{
			fullValue = inputItem.key.toString();			
		}
	}
	else
	{
		if(inputItem.key.toString() === "Delete" || inputItem.key.toString() === "Backspace")
		{
			//fullValue = this.value;	
			
			if(this.selectionEnd === this.selectionStart)
			{
				if(inputItem.key.toString() === "Delete")
				{
					fullValue = this.value.substring(0, this.selectionStart) + this.value.substring(this.selectionEnd + 1, this.value.length - 1);	
				}
				else
				{
					fullValue = this.value.substring(0, this.selectionStart - 1) + this.value.substring(this.selectionStart, this.value.length - 1);	
				}
			}
			else
			{
				fullValue = this.value.substring(0, this.selectionStart) + this.value.substring(this.selectionEnd, this.value.length - 1);	
			}
			
			/*
			this.value = fullValue;
			this.setSelectionRange(this.selectionStart, this.selectionStart);*/
			isDelete = true;				
		}
		else
		{
			fullValue = this.value.substring(0, this.selectionStart) + inputItem.key.toString() + this.value.substring(this.selectionEnd, this.value.length);		
		}
	}
	
	var thousandBefore = 0;	
	for(var iCh = 0; iCh < this.selectionEnd; iCh++)
	{
		if(fullValue[iCh] === '.')
		{
			thousandBefore++;
		}
	}

	/*if(this.selectionStart === 0 && this.selectionEnd === this.value.length)
	{
		fullValue = inputItem.key.toString();	
	}
	else
	{
		fullValue = this.value.substring(0, this.selectionStart) + inputItem.key.toString() + this.value.substring(this.selectionEnd, this.value.length);	
	}*/
	
	if(laavorThousandSeparator !== undefined && laavorThousandSeparator !== null)
	{
		while(fullValue.indexOf(laavorThousandSeparator) !== -1)
		{
			fullValue = fullValue.toString().replace(laavorThousandSeparator.toString(), "");	
		}
	}
	
	//fullValue = this.value.substring(0, this.selectionStart) + inputItem.key.toString() + this.value.substring(this.selectionEnd, this.value.length);	
	if(laavorDecimalSeparator !== undefined && laavorDecimalSeparator !== null)
	{
		fullValue = fullValue.toString().replace(laavorDecimalSeparator.toString(), "");	
			
		var valueNew = "";
		var decNum = 0;
		for(var iV = fullValue.length - 1; iV >= 0; iV--)
		{
			if(decNum < laavorNumberOfDecimals)
			{
				if(decimalSide.length > 0)
				{
					decimalSide = fullValue[iV] + decimalSide.toString();
				}
				else
				{
					decimalSide = fullValue[iV];
				}
				
				decNum++;
			}
			else
			{
				integerSide = fullValue[iV] + integerSide;
			}
		}
		
		/*
		if(fullValue.indexOf(laavorDecimalSeparator) > -1)
		{
			
		}*/
		
		/*		
		decimalIntegerValue = fullValue.split(laavorDecimalSeparator);
		integerSide = decimalIntegerValue[0];
		
		if(decimalIntegerValue.length > 1)
		{
			decimalSide =  decimalIntegerValue[1];
		}
		else
		{
			decimalSide = integerSide;
			integerSide = "";
		}*/

	}
	else
	{
		integerSide =  fullValue;
		decimalSide = "";
	}
	
/*	if(laavorThousandSeparator !== undefined && laavorThousandSeparator !== null && integerSide !== "")
	{
		while(integerSide.indexOf(laavorThousandSeparator) !== -1)
		{
			integerSide = integerSide.toString().replace(laavorThousandSeparator.toString(), "");	
		}
	}*/
	
	if(laavorAmountOfIntegers !== undefined && laavorAmountOfIntegers !== null && integerSide !== "")
	{
		if(integerSide.length > laavorAmountOfIntegers)
		{
			inputItem.preventDefault();
			return false;
		}
	}
	
	if(laavorCanNegative !== undefined && laavorCanNegative !== null)
	{
		if(laavorCanNegative === "false" && inputItem.key === "-")
		{
			inputItem.preventDefault();
			return false;
		}
		else if(laavorCanNegative === "true")
		{
			if((this.selectionEnd !== 0 || this.selectionEnd !== 0) && inputItem.key === "-")
			{
				inputItem.preventDefault();
				return false;
			}
			else if(inputItem.key === "-")
			{
				containsNegative = true;
			}
		}
	}
	
	for(var iCh = integerSide.length - 1; iCh >= 0; iCh--)
	{
		if(integerSide[iCh] === '1' || integerSide[iCh] === '2'  || integerSide[iCh] === '3'  || integerSide[iCh] === '4' ||
		   integerSide[iCh] === '5' || integerSide[iCh] === '6'  || integerSide[iCh] === '7'  || integerSide[iCh] === '8' || 
		   integerSide[iCh] === '9' || integerSide[iCh] === '0'  || integerSide[iCh] === '-')
		{
			continue;			
		}
		else
		{
			inputItem.preventDefault();
			return false;
		}
	}
	
	if(laavorThousandSeparator !== undefined && laavorThousandSeparator !== null && integerSide !== "")
	{	
		var countSep = 0;
		for(var iCh = integerSide.length - 1; iCh >= 0; iCh--)
		{
			countSep++;
			
			if(countSep%3 === 0)
			{
				formattedValueInteger = laavorThousandSeparator + integerSide[iCh] + formattedValueInteger;
			}
			else
			{
				formattedValueInteger = integerSide[iCh] + formattedValueInteger;
			}
		}
		
		if(formattedValueInteger.length > 1)
		{
			if(formattedValueInteger[0] === laavorThousandSeparator)
			{
				formattedValueInteger = formattedValueInteger.substring(1, formattedValueInteger.length);
			}
		}
		else if(formattedValueInteger === laavorThousandSeparator)
		{
			formattedValueInteger = "";
		}
		
		if(containsNegative === "true")
		{
			formattedValueInteger = "-" + formattedValueInteger;
		}
		
		if(laavorDecimalSeparator === undefined && laavorDecimalSeparator === null)
		{
			this.selectionStart = copySelection;
			this.selectionEnd = copySelection;
			inputItem.selectionStart = copySelection;
			inputItem.selectionEnd = copySelection;
			this.value = formattedValueInteger;
			inputItem.preventDefault();
			return false;
		}
	}
	else
	{
		if(laavorDecimalSeparator === undefined && laavorDecimalSeparator === null)
		{
			this.selectionStart = copySelection;
			this.selectionEnd = copySelection;
			inputItem.selectionStart = copySelection;
			inputItem.selectionEnd = copySelection;
			this.value = formattedValueInteger;
			inputItem.preventDefault();
			return false;
		}
	}

	if(decimalSide !== "")
	{
		for(var iCh = decimalSide.length - 1; iCh >= 0; iCh--)
		{
			if(decimalSide[iCh] === '1' || decimalSide[iCh] === '2'  || decimalSide[iCh] === '3'  || decimalSide[iCh] === '4' ||
			   decimalSide[iCh] === '5' || decimalSide[iCh] === '6'  || decimalSide[iCh] === '7'  || decimalSide[iCh] === '8' || 
		       decimalSide[iCh] === '9' || decimalSide[iCh] === '0'  || decimalSide[iCh] === '-')
			{
				continue;			
			}
			else
			{
				inputItem.preventDefault();
				return false;
			}
		}
	}
	
	if(laavorNumberOfDecimals !== undefined && laavorNumberOfDecimals !== null)
	{
		
		/*while(decimalSide.length < laavorNumberOfDecimals)
		{
			formattedValueDecimal = formattedValueDecimal + "0";
			decimalSide = decimalSide + "0";
		}
				
		if(decimalSide.length > laavorNumberOfDecimals)
		{
			decimalSide = decimalSide.substring(0, laavorNumberOfDecimals - 1); 
		}*/
	}

	if(laavorDecimalSeparator !== undefined && laavorDecimalSeparator !== null)
	{
		formattedValue = formattedValueInteger + laavorDecimalSeparator + decimalSide;
	}
	
	/*if((this.selectionEnd + 1) < formattedValue.length)
	{
		copySelection = this.selectionEnd;
	}
	else
	{*/

	var thousandAfter = 0;	
	for(var iCh = 0; iCh < this.selectionEnd + 1; iCh++)
	{
		if(fullValue[iCh] === '.')
		{
			thousandAfter++;
		}
	}
	
	/*if((this.selectionEnd) < formattedValue.length)
	{
		copySelection = this.selectionEnd + 1;	
	}
	else 
	{
		copySelection = formattedValue.length;
	}*/
		
	
	if(thousandAfter <= thousandBefore && (this.selectionEnd !== (formattedValue.length)))
	{
		/*if((this.selectionEnd) < formattedValue.length)
		{*/
		copySelection = this.selectionEnd + 1;	
	/*	}
		else 
		{
			copySelection = formattedValue.length;
		}*/
	
		/*if((this.selectionEnd) < formattedValue.length)
		{*/
		//copySelection = this.selectionEnd + 1;	
		/*}
		else
		{
			copySelection = this.selectionEnd + 2;			
		}*/
		
		/*
		else if((this.selectionEnd) < formattedValue.length)
		{
			copySelection = this.selectionEnd;	
		}*/
	}
	else
	{
		copySelection = formattedValue.length;
	}
	
	/*
	var lenghtAfter = formattedValue.substring(0, this.selectionEnd);

	if((this.selectionEnd + 1) < formattedValue.length)
	{
		copySelection = lenghtBefore + 1;	
	}
	else
	{
		copySelection = formattedValue.length;
	}
	*/
	//}
	
	this.value = formattedValue;
	
	if(isDelete === "true")
	{
		this.setSelectionRange(this.selectionStart, this.selectionStart);	
	}
	else
	{
		this.setSelectionRange(copySelection, copySelection);	
	}
	
	if(isDelete !== "Delete")
	{
		inputItem.preventDefault();
		return false;
	}
}

String.prototype.laavorToInteger = function()
{
	"use strict";
	var returnItem = parseInt(this);
	return returnItem;
};

String.prototype.laavorToDouble = function()
{
	"use strict";
	var returnItem = parseFloat(this);
	return returnItem;
};


function laavorUniqueName(id) {
  "use strict";
  var laavorName = "";
  var charPotential = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    laavorName += charPotential.charAt(Math.floor(Math.random() * charPotential.length));

  if(id !== undefined && id !== null)
  {
	laavorName += "_" + id;  
  }	  
  
  return laavorName;
}
/*
function GetDefaultsInteger() {
    return {
		: true,
        backgroundColorTitle: "black",
        borderColorTitle: "black",
        textColorTitle: "white",
        fontSizeTitle: "2em",
        borderColorContent: "black",
		imageArrowExpanded: "none",
		imageArrowClosed: "none",
		imageArrowWidth: "24px",
		imageArrowHeight: "24px"
    };
}*/