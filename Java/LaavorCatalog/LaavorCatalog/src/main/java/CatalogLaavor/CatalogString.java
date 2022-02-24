/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CatalogLaavor;

import java.util.ArrayList;

public class CatalogString {
    public int Amount;
    
    private int currentIndex;
    private ArrayList<ItemString> arrayBase;
    private int countItems;

    private int maxIndex;

    private class ItemString {

        private String Value;

        public String getValue() {
            return Value;
        }

        public void setValue(String value) {
            Value = value;
        }
        
        private boolean Duplicate;

        public boolean isDuplicate() {
            return Duplicate;
        }

        public void setDuplicate(boolean Duplicate) {
            this.Duplicate = Duplicate;
        }

    }

    @SuppressWarnings("unchecked")
    public CatalogString() {
        currentIndex = -1;
        countItems = 0;
        arrayBase = new ArrayList<ItemString>();
        maxIndex = 0;
    }

    private void Sort(ItemString item) {
        
        if (countItems == 0) {
            arrayBase.add(item);
            return;
        }

        int positionInserted = -1;
        
        if(countItems == 1)
        {
            if (item.getValue().compareTo(arrayBase.get(0).getValue()) < 0) 
            {
                positionInserted = 0;
                arrayBase.add(positionInserted, item);
                return;
            }
            
            if (item.getValue().compareTo(arrayBase.get(0).getValue()) > 0) 
            {
                positionInserted = 1;
                arrayBase.add(positionInserted, item);
                return;
            }
        }
         
        if (item.getValue().compareTo(arrayBase.get(currentIndex - 1).getValue()) == 0 ) {
             item.setDuplicate(true);
             return;
        }
        
        if (item.getValue().compareTo(arrayBase.get(currentIndex - 1).getValue()) > 0 ) {
             arrayBase.add(item);
             return;
        }

        int midle = countItems / 2;

        if (item.getValue().compareTo(arrayBase.get(midle).getValue()) == 0) {
            item.setDuplicate(true);
            return;
        }
        
        boolean hasInserted = false;
        
        boolean midleOneOcurred = false;
        int maxItem = countItems;
        int minItem = 0;
        
        int midleBefore = -1;
        
        while (!hasInserted) 
        {
            if(item.getValue().compareTo(arrayBase.get(midle).getValue()) > 0)
            {              
                minItem = midle;
            
                if ((maxItem - minItem) > 10) 
                {
                    //350 170
                    //35 17
                    midle = (((maxItem - minItem) / 2) + minItem);
                } 
                else 
                {
                    midle = midle + 1;
                }

                if (midleOneOcurred && midle == 1) {
                    midle = 0;
                }

                if (midle == 1) {
                    midleOneOcurred = true;
                }
                
                if(midleBefore == midle)
                {
                    break;
                }
                
                midleBefore = midle;
            } 
            else if(item.getValue().compareTo(arrayBase.get(midle).getValue()) < 0)
            {
                maxItem = midle;

                if (maxItem > 10) 
                {
                    midle = (((maxItem - 1) / 2));
                    if(midle < minItem)
                    {
                        midle =  minItem;
                    }
                } 
                else 
                {
                    midle = midle - 1;
                }

                if (midleOneOcurred && midle == 1) 
                {
                    midle = 0;
                }

                if (midle == 1) 
                {
                    midleOneOcurred = true;
                }
                
                if(midleBefore == midle)
                {
                    break;
                }
                
                midleBefore = midle;
            }

            if (item.getValue().compareTo(arrayBase.get(midle).getValue()) == 0) 
            {
                item.setDuplicate(true);
                hasInserted = true;
                return;
            }

            if (midle == 0 && item.getValue().compareTo(arrayBase.get(midle).getValue()) < 0) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }
            
            if ((midle - 1) >= 0) 
            {
                if (item.getValue().compareTo(arrayBase.get(midle).getValue()) < 0 && item.getValue().compareTo(arrayBase.get(midle - 1).getValue()) > 0) {
                    positionInserted = midle;
                    arrayBase.add(positionInserted, item);
                    hasInserted = true;
                    return;
                }
                
                if (item.getValue().compareTo(arrayBase.get(midle).getValue()) < 0 && item.getValue().compareTo(arrayBase.get(midle - 1).getValue()) == 0) {
                    positionInserted = midle - 1;

                    if(item.getValue().compareTo(arrayBase.get(midle - 1).getValue()) == 0)
                    {
                        item.setDuplicate(true);
                    }
                    else
                    {
                        arrayBase.add(positionInserted, item);
                    }
                      
                    hasInserted = true;
                    return;
                }
            } 
            else if (item.getValue().compareTo(arrayBase.get(midle).getValue()) < 0 && midle == 0) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }
            
            if ((midle + 1) < currentIndex) 
            {
                if (item.getValue().compareTo(arrayBase.get(midle).getValue()) > 0 && item.getValue().compareTo(arrayBase.get(midle + 1).getValue()) <= 0)
                {
                    positionInserted = midle + 1;
                    
                    if(item.getValue().compareTo(arrayBase.get(positionInserted).getValue()) == 0)
                    {
                        item.setDuplicate(true);
                    }
                    else
                    {
                        arrayBase.add(positionInserted, item);
                    }
                    
                    hasInserted = true;
                    return;
                }

                if (item.getValue().compareTo(arrayBase.get(midle).getValue()) >= 0 && item.getValue().compareTo(arrayBase.get(midle + 1).getValue()) < 0) {
                    positionInserted = midle + 1;
                    
                    if(item.getValue().compareTo(arrayBase.get(positionInserted).getValue()) == 0)
                    {
                        item.setDuplicate(true);
                    }
                    else
                    {
                        arrayBase.add(positionInserted, item);
                    }
                    
                    hasInserted = true;
                    return;
                }
            }
            
            if(item.getValue().compareTo(arrayBase.get(midle).getValue()) > 0)
            {
                minItem = midle;
            }
             
            if(item.getValue().compareTo(arrayBase.get(midle).getValue()) < 0)
            {
                maxItem = midle;
            }
        }
        
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (item.getValue().compareTo(arrayBase.get(iItem).getValue()) == 0) 
            {   
                item.setDuplicate(true);  
                return;
            }
                             
            if((iItem + 1) <= maxItem)
            {
                if (item.getValue().compareTo(arrayBase.get(iItem + 1).getValue()) < 0 && item.getValue().compareTo(arrayBase.get(iItem).getValue()) > 0) 
                {   
                    arrayBase.add((iItem + 1), item);
                    return;
                }
            }
                
            if((iItem - 1) >= 0)
            {
                if (item.getValue().compareTo(arrayBase.get(iItem).getValue()) < 0 && item.getValue().compareTo(arrayBase.get(iItem - 1).getValue()) > 0) 
                {   
                    arrayBase.add(iItem, item);
                    return;
                }
            }
        }
    }

    public void Add(String value) {
        currentIndex++;

        ItemString item = new ItemString();
        item.setValue(value);
        item.setDuplicate(false);

        Sort(item);

        if(!item.isDuplicate())
        {
            countItems++;
        }
        else
        {
            currentIndex--;
        }
        
        Amount = countItems;
    }

    public String getValue(int index) {
       return arrayBase.get(index).getValue();
    }
    
    public int getIndex(String value)
    {
        if(countItems <= 0)
        {
            return -1;
        }
        
        if(arrayBase.get(0).getValue().compareTo(value) == 0)
        {
            return 0;
        }
        
        if(arrayBase.get(countItems - 1).getValue().compareTo(value) == 0)
        {
            return (countItems - 1);
        }
                  
        int midle = countItems / 2;

        if (value.compareTo(arrayBase.get(midle).getValue()) == 0) {           
            return midle;
        }
        
        boolean wasFound = false;
        int position = -1;

        boolean midleOneOcurred = false;
        int maxItem = countItems;
        int minItem = 0;
        
        int midleBefore = -1;
        
        
        while (!wasFound) 
        {
            if (value.compareTo(arrayBase.get(midle).getValue()) > 0)                
            {               
                if ((maxItem - minItem) > 10) 
                {
                    //350 170
                    //35 17
                    midle = (((maxItem - minItem) / 2) + minItem);
                } 
                else 
                {
                    midle = midle + 1;
                }

                if (midleOneOcurred && midle == 1) {
                    midle = 0;
                }

                if (midle == 1) {
                    midleOneOcurred = true;
                }
                
                if(midleBefore == midle)
                {
                    break;
                }
                
                midleBefore = midle;
            } 
            else 
            {
                maxItem = midle;

                if (maxItem > 10) 
                {
                    midle = (midle - 1) / 2;
                } 
                else 
                {
                    midle = midle - 1;
                }

                if (midleOneOcurred && midle == 1) 
                {
                    midle = 0;
                }

                if (midle == 1) 
                {
                    midleOneOcurred = true;
                }
                
                if(midleBefore == midle)
                {
                    break;
                }
                
                midleBefore = midle;
            }

            if (value.compareTo(arrayBase.get(midle).getValue()) == 0) 
            {
                return midle;
            }
            
            if (midle == 0 && value.compareTo(arrayBase.get(midle).getValue()) < 0) 
            {
                return -1;
            }

            if ((midle - 1) >= 0) 
            {
                if (value.compareTo(arrayBase.get(midle).getValue()) < 0 && value.compareTo(arrayBase.get(midle - 1).getValue()) > 0) {
                    return -1;
                }
                 
                if (value.compareTo(arrayBase.get(midle).getValue()) < 0 && value.compareTo(arrayBase.get(midle - 1).getValue()) == 0) {
                    position = midle - 1;
                    return position;
                }
            } 
            else if (value.compareTo(arrayBase.get(midle).getValue()) < 0 && midle == 0) 
            {
                return -1;
            }

            if ((midle + 1) < currentIndex) 
            {
                if (value.compareTo(arrayBase.get(midle).getValue()) > 0 && value.compareTo(arrayBase.get(midle + 1).getValue()) <= 0) {
                    position = (midle + 1);
                    
                    if(value.compareTo(arrayBase.get(position).getValue()) == 0)
                    {
                        return position;
                    }
                    
                    return -1;
                }

                if (value.compareTo(arrayBase.get(midle).getValue()) >= 0 && value.compareTo(arrayBase.get(midle + 1).getValue()) < 0) 
                {
                    position = (midle);

                    if(value.compareTo(arrayBase.get(position).getValue()) == 0)
                    {
                        return position;
                    }
                    
                    return -1;
                }
            }
        }
           
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (value.compareTo(arrayBase.get(iItem).getValue()) == 0) 
            {   
                return iItem;
            }
        }
    
        return -1;
    }
}
