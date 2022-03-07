/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package TransformLaavor;

import java.text.DecimalFormat;
import java.util.ArrayList;

/**
 *
 * @author Fernando
 */
public class ForNumber {
    private ArrayList<Integer> listNumberLetters;
    
    public ForNumber()
    {
        listNumberLetters = new ArrayList<Integer>();
        listNumberLetters.add(48);
        listNumberLetters.add(49);
        listNumberLetters.add(50);
        listNumberLetters.add(51);
        listNumberLetters.add(52);
        listNumberLetters.add(53);
        listNumberLetters.add(54);
        listNumberLetters.add(55);
        listNumberLetters.add(56);
        listNumberLetters.add(57);
    }
    
    public double Round(double value, int numberOfDecimals)
    {
        String dv = "";
        
        for(int iChar = 0; iChar < numberOfDecimals; iChar++)
        {
            dv = dv + "#";
        }
        String s = "#." + dv;
        
        DecimalFormat df =  new DecimalFormat(s);
        String valueStr = df.format(value);
        
        
        Double returnValue = Double.parseDouble(valueStr);
        return returnValue;
    }
    
    public double Double(String value, char decimalSeparator)
    {
        String tempValue = "";
        ForString fS = new ForString();
        tempValue = tempValue.replace(decimalSeparator, '.');
        
        double returnValue = Double.parseDouble(tempValue);
        return returnValue; 
    }
    
    public double Double(String value, char decimalSeparator, char thousandSeparator)
    {
        String tempValue = "";
        ForString fS = new ForString();
        tempValue = fS.Remove(value, thousandSeparator + "");
        tempValue = tempValue.replace(decimalSeparator, '.');
        
        double returnValue = Double.parseDouble(tempValue);
        return returnValue; 
    }
    
    public double DoubleRemoveChars(String value, boolean containsDecimalSeparator)
    {
        String tempValue = "";
        boolean insertDot = false;
        
        ArrayList<Integer> listAscChars = new ArrayList<Integer>();
        
        int lenghtASC = value.length();
        for(int iChar = 0; iChar < lenghtASC; iChar++)
	{
            Integer valueList = (int)(value.charAt(iChar));
            listAscChars.add(valueList);
	}
		
	for(int iAsc = 0; iAsc < lenghtASC; iAsc++)
	{
            int keyItem = listAscChars.get(iAsc);
	
            for(int iC = 0; iC < listNumberLetters.size() - 1; iC++)
	    {
		if(listNumberLetters.get(iC) == keyItem)
		{
                    tempValue = tempValue + keyItem;
		}
                else if(containsDecimalSeparator && keyItem == '.' && !insertDot)
                {
                    tempValue = tempValue + keyItem;
                    insertDot = true;
                }
	    }				
        }
          
        double returnValue = Double.parseDouble(tempValue);
        return returnValue; 
    }
    
    public double DoubleRemoveChars(String value, char decimalSeparator)
    {
        String tempValue = "";
        
        ArrayList<Integer> listAscChars = new ArrayList<Integer>();
        
        int lenghtASC = value.length();
        for(int iChar = 0; iChar < lenghtASC; iChar++)
	{
            Integer valueList = (int)(value.charAt(iChar));
            listAscChars.add(valueList);
	}
		
	for(int iAsc = 0; iAsc < lenghtASC; iAsc++)
	{
            int keyItem = listAscChars.get(iAsc);
	
            for(int iC = 0; iC < listNumberLetters.size() - 1; iC++)
	    {
		if(listNumberLetters.get(iC) == keyItem ||keyItem == decimalSeparator)
		{
                    tempValue = tempValue + keyItem;
		}
	    }				
        }
        tempValue = tempValue.replace(decimalSeparator, '.');
        
        double returnValue = Double.parseDouble(tempValue);
        return returnValue; 
    }
}
