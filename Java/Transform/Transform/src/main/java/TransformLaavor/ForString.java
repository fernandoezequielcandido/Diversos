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
public class ForString {
    public String Double(Double value, int numberOfDecimals)
    {
        return InternalDouble(value, numberOfDecimals, '.', '1');
    }
    
    public String Double(Double value, int numberOfDecimals, char decimalSeparator)
    {
        return InternalDouble(value, numberOfDecimals, decimalSeparator, '1');
    }
    
    public String Double(Double value, int numberOfDecimals, char decimalSeparator, char thousandSepator)
    {
        return InternalDouble(value, numberOfDecimals, decimalSeparator, thousandSepator);
    }
    
    private String InternalDouble(Double value, int numberOfDecimals, char decimalSeparator, char thousandSeparator)
    {
        String dv = "";
        
        for(int iChar = 0; iChar < numberOfDecimals; iChar++)
        {
            dv = dv + "#";
        }
        String s = "#." + dv;
        
        DecimalFormat df =  new DecimalFormat(s);
        String valueStr = df.format(value);
        
        String itemDual[] = Split(valueStr, '.');
        String returnValue;
        String decimalPart = "";
        String integralPart = "";
        
        valueStr = df.format(value);
        
        if(itemDual.length > 0)
        {
            returnValue = itemDual[0];
        }
        else
        {
            returnValue = "";
        }
               
        if(thousandSeparator != '1')
        {
            String partial = "";
            int countItens = 0;
            for(int iChar = itemDual[0].length() - 1; iChar >= 0; iChar--)
            {                                
                if(countItens == 3)
                {
                    partial = thousandSeparator + partial;
                    countItens = 0;
                }
                
                partial = itemDual[0].charAt(iChar) + partial;
                countItens++;
            }
            
            integralPart = partial;
        }
        else
        {
            integralPart = itemDual[0];
        }
        
        if(itemDual.length == 2)
        {
            for(int iC = 0; iC < numberOfDecimals; iC++)
            {
                if(iC >= itemDual[1].length())
                {
                    break;
                }
                decimalPart = decimalPart + itemDual[1].charAt(iC);
            }
            
            if(decimalPart.length() < numberOfDecimals)
            {
                for(int iC = (numberOfDecimals  - decimalPart.length()); iC > 0; iC--)
                {
                    decimalPart = decimalPart + "0";
                }
            }
        }
        else
        {
            for(int iC = 0; iC < numberOfDecimals; iC++)
            {
                decimalPart = decimalPart + "0";
            }
        }
        
        if(numberOfDecimals > 0)
        {
            returnValue = integralPart + decimalSeparator + decimalPart;
        }
        else
        {
            returnValue = integralPart;
        }
        
        return returnValue;
    }
    
    ////aqui float
    public String Float(Float value, int numberOfDecimals)
    {
        return InternalFloat(value, numberOfDecimals, '.', '1');
    }
    
    public String Float(Float value, int numberOfDecimals, char decimalSeparator)
    {
        return InternalFloat(value, numberOfDecimals, decimalSeparator, '1');
    }
    
    public String Float(Float value, int numberOfDecimals, char decimalSeparator, char thousandSepator)
    {
        return InternalFloat(value, numberOfDecimals, decimalSeparator, thousandSepator);
    }
    
    private String InternalFloat(Float value, int numberOfDecimals, char decimalSeparator, char thousandSeparator)
    {
        String dv = "";
        
        for(int iChar = 0; iChar < numberOfDecimals; iChar++)
        {
            dv = dv + "#";
        }
        String s = "#." + dv;
        
        DecimalFormat df =  new DecimalFormat(s);
        String valueStr = df.format(value);
        
        String itemDual[] = Split(valueStr, '.');
        String returnValue;
        String decimalPart = "";
        String integralPart = "";
        
        valueStr = df.format(value);
        
        if(itemDual.length > 0)
        {
            returnValue = itemDual[0];
        }
        else
        {
            returnValue = "";
        }
               
        if(thousandSeparator != '1')
        {
            String partial = "";
            int countItens = 0;
            for(int iChar = itemDual[0].length() - 1; iChar >= 0; iChar--)
            {                                
                if(countItens == 3)
                {
                    partial = thousandSeparator + partial;
                    countItens = 0;
                }
                
                partial = itemDual[0].charAt(iChar) + partial;
                countItens++;
            }
            
            integralPart = partial;
        }
        else
        {
            integralPart = itemDual[0];
        }
        
        if(itemDual.length == 2)
        {
            for(int iC = 0; iC < numberOfDecimals; iC++)
            {
                if(iC >= itemDual[1].length())
                {
                    break;
                }
                decimalPart = decimalPart + itemDual[1].charAt(iC);
            }
            
            if(decimalPart.length() < numberOfDecimals)
            {
                for(int iC = (numberOfDecimals  - decimalPart.length()); iC > 0; iC--)
                {
                    decimalPart = decimalPart + "0";
                }
            }
        }
        else
        {
            for(int iC = 0; iC < numberOfDecimals; iC++)
            {
                decimalPart = decimalPart + "0";
            }
        }
        
        if(numberOfDecimals > 0)
        {
            returnValue = integralPart + decimalSeparator + decimalPart;
        }
        else
        {
            returnValue = integralPart;
        }
        
        return returnValue;
    }
    
    public String Integer(Integer value, char thousandSeparator)
    {
        String valueStr = value.toString();
        String integralPart = "";        
               
        if(thousandSeparator != '1')
        {
            String partial = "";
            int countItens = 0;
            for(int iChar = valueStr.length() - 1; iChar >= 0; iChar--)
            {                                
                if(countItens == 3)
                {
                    partial = thousandSeparator + partial;
                    countItens = 0;
                }
                
                partial = valueStr.charAt(iChar) + partial;
                countItens++;
            }
            
            integralPart = partial;
        }
        else
        {
            integralPart = valueStr;
        }
           
        return integralPart;
    }
    
     public String Long(Long value, char thousandSeparator)
    {
        String valueStr = value.toString();
        String integralPart = "";        
              
        if(thousandSeparator != '1')
        {
            String partial = "";
            int countItens = 0;
            for(int iChar = valueStr.length() - 1; iChar >= 0; iChar--)
            {                                
                if(countItens == 3)
                {
                    partial = thousandSeparator + partial;
                    countItens = 0;
                }
                
                partial = valueStr.charAt(iChar) + partial;
                countItens++;
            }
            
            integralPart = partial;
        }
        else
        {
            integralPart = valueStr;
        }
           
        return integralPart;
    }
    
    private String[] Split(String value, char character)
    {
        ArrayList<String> list = new ArrayList<String>();
                
        String tempValue = "";
        int sizeString =  value.length();
        for(int iChar = (sizeString - 1); iChar >=0; iChar--)
        {
            if(value.charAt(iChar) == character)
            {
                list.add(tempValue);
                tempValue = "";
            }
            else
            {
                tempValue = value.charAt(iChar) + tempValue;
            }
        }
        
        list.add(tempValue);
        
        String[] returnItem = new String[list.size()];
        
        int iItem  = 0;
        for(int iList = (list.size() - 1); iList >= 0; iList--)
        {
            returnItem[iItem] = list.get(iList);
            iItem++;
        }
        
        return returnItem;
    }
    
    public String Remove(String value, int startIndex, int size)
    {
        String returnValue = "";
        int sizeString = value.length();
        
        if(startIndex >= sizeString || size >= sizeString || startIndex < 0 || size < 0)
        {
            return value;
        }
        
        String partOne = "";
        String partTwo = "";
       
        if(startIndex != 0)
        {
            partOne = value.substring(0, startIndex);
        }
            
        if(((startIndex + size) + 1) < sizeString)
        {
            partTwo = value.substring((startIndex + size), sizeString);
        } 
        
        returnValue = partOne + partTwo;
        return returnValue;
    }
    
    public String Remove(String value, String valueToRemove)
    {
        String returnValue = "";
        
        int startIndex = value.indexOf(valueToRemove);
        int sizeString = value.length();
        int size = valueToRemove.length();
        
        if(startIndex >= sizeString || size >= sizeString || startIndex < 0 || size < 0)
        {
            return value;
        }
        
        String partOne = "";
        String partTwo = "";
       
        if(startIndex != 0)
        {
            partOne = value.substring(0, startIndex);
        }
            
        if(((startIndex + size) + 1) < sizeString)
        {
            partTwo = value.substring((startIndex + size), sizeString);
        } 
        
        returnValue = partOne + partTwo;
        return returnValue;
    }
    
    public String Insert(String valueBase, String valueToInsert, int startIndex)
    {
        String returnValue = "";
        int sizeString = valueBase.length();
             
        if(startIndex > sizeString || startIndex < 0)
        {
            return valueBase;
        }
        
        String partOne = "";
        String partTwo = "";
       
        if(startIndex != 0 && startIndex != sizeString)
        {
            if((startIndex + 1) != sizeString)
            {
                partOne = valueBase.substring(0, startIndex);
                        
                if((startIndex + 1) < sizeString)
                {
                    partTwo = valueBase.substring((startIndex), sizeString);
                }
            }
            else
            {
                partOne = valueBase;
            }
        }
        else if(startIndex == sizeString)
        {
            partOne = valueBase;
            partTwo = "";
        }
        else
        {
            partOne = "";
            partTwo = valueBase;
        }
            
        returnValue = partOne + valueToInsert + partTwo;
        return returnValue;
    }
    
}
