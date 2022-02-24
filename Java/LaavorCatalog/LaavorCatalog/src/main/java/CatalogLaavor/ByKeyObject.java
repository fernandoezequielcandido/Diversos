/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CatalogLaavor;

import java.util.ArrayList;

/**
 *
 * @author Fernando
 */
public class ByKeyObject<T> {
      
    public int Amount;
    
    private int currentIndex;
    private ArrayList<Item> arrayBase;
    private int countItems;

    private int maxIndex;

    private class Item {

        private String Key;

        public String getKey() {
            return Key;
        }

        public void setKey(String Key) {
            this.Key = Key;
        }
        
        private Object Value;

        public Object getValue() {
            return Value;
        }

        public void setValue(Object Value) {
            this.Value = Value;
        }
        
        private boolean Duplicate;

        public boolean isDuplicate() {
            return Duplicate;
        }

        public void setDuplicate(boolean Duplicate) {
            this.Duplicate = Duplicate;
        }

    }

    public ByKeyObject() {
        currentIndex = -1;
        countItems = 0;
        arrayBase = new ArrayList<Item>();
        maxIndex = 0;
    }

    private void Sort(Item item) {
        
        if (countItems == 0) {
            arrayBase.add(item);
            return;
        }

        int positionInserted = -1;
        
        if(countItems == 1)
        {
            if (item.getKey().compareTo(arrayBase.get(0).getKey()) < 0) 
            {
                positionInserted = 0;
                arrayBase.add(positionInserted, item);
                return;
            }
            
            if (item.getKey().compareTo(arrayBase.get(0).getKey()) > 0) 
            {
                positionInserted = 1;
                arrayBase.add(positionInserted, item);
                return;
            }
        }
         
        if (item.getKey().compareTo(arrayBase.get(currentIndex - 1).getKey()) == 0 ) {
             item.setDuplicate(true);
             return;
        }
        
        if (item.getKey().compareTo(arrayBase.get(currentIndex - 1).getKey()) > 0 ) {
             arrayBase.add(item);
             return;
        }

        int midle = countItems / 2;

        if (item.getKey().compareTo(arrayBase.get(midle).getKey()) == 0) {
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
            if(item.getKey().compareTo(arrayBase.get(midle).getKey()) > 0)
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
            else if(item.getKey().compareTo(arrayBase.get(midle).getKey()) < 0)
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

            if (item.getKey().compareTo(arrayBase.get(midle).getKey()) == 0) 
            {
                item.setDuplicate(true);
                hasInserted = true;
                return;
            }

            if (midle == 0 && item.getKey().compareTo(arrayBase.get(midle).getKey()) < 0) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }
            
            if ((midle - 1) >= 0) 
            {
                if (item.getKey().compareTo(arrayBase.get(midle).getKey()) < 0 && item.getKey().compareTo(arrayBase.get(midle - 1).getKey()) > 0) {
                    positionInserted = midle;
                    arrayBase.add(positionInserted, item);
                    hasInserted = true;
                    return;
                }
                
                if (item.getKey().compareTo(arrayBase.get(midle).getKey()) < 0 && item.getKey().compareTo(arrayBase.get(midle - 1).getKey()) == 0) {
                    positionInserted = midle - 1;

                    if(item.getKey().compareTo(arrayBase.get(midle - 1).getKey()) == 0)
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
            else if (item.getKey().compareTo(arrayBase.get(midle).getKey()) < 0 && midle == 0) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }
            
            if ((midle + 1) < currentIndex) 
            {
                if (item.getKey().compareTo(arrayBase.get(midle).getKey()) > 0 && item.getKey().compareTo(arrayBase.get(midle + 1).getKey()) <= 0)
                {
                    positionInserted = midle + 1;
                    
                    if(item.getKey().compareTo(arrayBase.get(positionInserted).getKey()) == 0)
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

                if (item.getKey().compareTo(arrayBase.get(midle).getKey()) >= 0 && item.getKey().compareTo(arrayBase.get(midle + 1).getKey()) < 0) {
                    positionInserted = midle + 1;
                    
                    if(item.getKey().compareTo(arrayBase.get(positionInserted).getKey()) == 0)
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
            
            if(item.getKey().compareTo(arrayBase.get(midle).getKey()) > 0)
            {
                minItem = midle;
            }
             
            if(item.getKey().compareTo(arrayBase.get(midle).getKey()) < 0)
            {
                maxItem = midle;
            }
        }
        
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (item.getKey().compareTo(arrayBase.get(iItem).getKey()) == 0) 
            {   
                item.setDuplicate(true);  
                return;
            }
                             
            if((iItem + 1) <= maxItem)
            {
                if (item.getKey().compareTo(arrayBase.get(iItem + 1).getKey()) < 0 && item.getKey().compareTo(arrayBase.get(iItem).getKey()) > 0) 
                {   
                    arrayBase.add((iItem + 1), item);
                    return;
                }
            }
                
            if((iItem - 1) >= 0)
            {
                if (item.getKey().compareTo(arrayBase.get(iItem).getKey()) < 0 && item.getKey().compareTo(arrayBase.get(iItem - 1).getKey()) > 0) 
                {   
                    arrayBase.add(iItem, item);
                    return;
                }
            }
        }
    }

    public void Add(String key, Object value) {
        currentIndex++;

        Item item = new Item();
        item.setValue(value);
        item.setDuplicate(false);
        item.setKey(key);
        
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

    public Object getValue(String key)
    {
        if(countItems <= 0)
        {
            return -1;
        }
        
        if(arrayBase.get(0).getKey().compareTo(key) == 0)
        {
            return arrayBase.get(0).Value;
        }
        
        if(arrayBase.get(countItems - 1).getKey().compareTo(key) == 0)
        {
            return arrayBase.get(countItems - 1).Value;
        }
                  
        int midle = countItems / 2;

        if (key.compareTo(arrayBase.get(midle).getKey()) == 0) {           
            return arrayBase.get(midle).Value;
        }
        
        boolean wasFound = false;
        int position = -1;

        boolean midleOneOcurred = false;
        int maxItem = countItems;
        int minItem = 0;
        
        int midleBefore = -1;
        
        
        while (!wasFound) 
        {
            if (key.compareTo(arrayBase.get(midle).getKey()) > 0)                
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

            if (key.compareTo(arrayBase.get(midle).getKey()) == 0) 
            {
                return arrayBase.get(midle).Value;
            }
            
            if (midle == 0 && key.compareTo(arrayBase.get(midle).getKey()) < 0) 
            {
                return null;
            }

            if ((midle - 1) >= 0) 
            {
                if (key.compareTo(arrayBase.get(midle).getKey()) < 0 && key.compareTo(arrayBase.get(midle - 1).getKey()) > 0) {
                    return null;
                }
                 
                if (key.compareTo(arrayBase.get(midle).getKey()) < 0 && key.compareTo(arrayBase.get(midle - 1).getKey()) == 0) {
                    position = midle - 1;
                    return arrayBase.get(position).Value;
                }
            } 
            else if (key.compareTo(arrayBase.get(midle).getKey()) < 0 && midle == 0) 
            {
                return null;
            }

            if ((midle + 1) < currentIndex) 
            {
                if (key.compareTo(arrayBase.get(midle).getKey()) > 0 && key.compareTo(arrayBase.get(midle + 1).getKey()) <= 0) {
                    position = (midle + 1);
                    
                    if(key.compareTo(arrayBase.get(position).getKey()) == 0)
                    {
                        return arrayBase.get(position).Value;
                    }
                    
                    return null;
                }

                if (key.compareTo(arrayBase.get(midle).getKey()) >= 0 && key.compareTo(arrayBase.get(midle + 1).getKey()) < 0) 
                {
                    position = (midle);

                    if(key.compareTo(arrayBase.get(position).getKey()) == 0)
                    {
                        return arrayBase.get(position).Value;
                    }
                    
                    return null;
                }
            }
        }
           
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (key.compareTo(arrayBase.get(iItem).getKey()) == 0) 
            {   
                return arrayBase.get(iItem).Value;
            }
        }
    
        return null;
    }
}
