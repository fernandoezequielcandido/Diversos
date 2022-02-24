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
public class CatalogObject<T> {
    public CatalogObject(Measure m)
    {
        currentIndex = -1;
        countItems = 0;
        arrayBase = new ArrayList<Object>();
        maxIndex = 0;
        measure = m;
    }
    
    public int Amount;
    
    private int currentIndex;
    private ArrayList<Object> arrayBase;
    private int countItems;

    private int maxIndex;

    private Measure measure;
    
    private boolean duplicate;

    private void Sort(Object item) {
        
        int positionInserted = -1;
                
        if (countItems == 0) {
            arrayBase.add(item);
            return;
        }
        
        if(countItems == 1)
        {
            if (measure.Measure(item, arrayBase.get(currentIndex - 1)) < 0) {
                positionInserted = 0;
                arrayBase.add(positionInserted, item);
                return;
            }
            
            if (measure.Measure(item, arrayBase.get(currentIndex - 1)) > 0) {
                positionInserted = 1;
                arrayBase.add(positionInserted, item);
                return;
            }
        }

        if (measure.Measure(item, arrayBase.get(currentIndex - 1)) == 0) {
             duplicate = true;
             return;
        }
        
        if (measure.Measure(item, arrayBase.get(currentIndex - 1)) > 0 ) {
             arrayBase.add(item);
             return;
        }

        int midle = countItems / 2;

        if (measure.Measure(item, arrayBase.get(midle)) == 0) {
            duplicate = true;
            return;
        }
        
        boolean hasInserted = false;


        boolean midleOneOcurred = false;
        int maxItem = countItems;
        int minItem = 0;
        
        int midleBefore = -1;
        
        while (!hasInserted) 
        {
            if(measure.Measure(item, arrayBase.get(midle)) > 0)
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
            else if(measure.Measure(item, arrayBase.get(midle)) < 0)
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

            if (measure.Measure(item, arrayBase.get(midle)) == 0) 
            {
                duplicate = true;
                hasInserted = true;
                return;
            }

            if (midle == 0 && measure.Measure(item, arrayBase.get(midle)) < 0) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }
            
            if ((midle - 1) >= 0) 
            {
                if (measure.Measure(item, arrayBase.get(midle)) < 0 && measure.Measure(item, arrayBase.get(midle - 1)) > 0) {
                    positionInserted = midle;
                    arrayBase.add(positionInserted, item);
                    hasInserted = true;
                    return;
                }
                
                if (measure.Measure(item, arrayBase.get(midle)) < 0 && measure.Measure(item, arrayBase.get(midle - 1)) == 0) {
                    positionInserted = midle - 1;

                    if(measure.Measure(item, arrayBase.get(midle - 1)) == 0)
                    {
                        duplicate = true;
                    }
                    else
                    {
                        arrayBase.add(positionInserted, item);
                    }
                      
                    hasInserted = true;
                    return;
                }
            } 
            else if (measure.Measure(item, arrayBase.get(midle)) < 0 && midle == 0) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }
            
            if ((midle + 1) < currentIndex) 
            {
                if (measure.Measure(item, arrayBase.get(midle)) > 0 && measure.Measure(item, arrayBase.get(midle + 1)) <= 0)
                {
                    positionInserted = midle + 1;
                    
                    if(measure.Measure(item, arrayBase.get(positionInserted)) == 0)
                    {
                        duplicate = true;
                    }
                    else
                    {
                        arrayBase.add(positionInserted, item);
                    }
                    
                    hasInserted = true;
                    return;
                }

                if (measure.Measure(item, arrayBase.get(midle)) >= 0 && measure.Measure(item, arrayBase.get(midle + 1)) < 0) {
                    positionInserted = midle + 1;
                    
                    if(measure.Measure(item, arrayBase.get(positionInserted)) == 0)
                    {
                        duplicate = true;
                    }
                    else
                    {
                        arrayBase.add(positionInserted, item);
                    }
                    
                    hasInserted = true;
                    return;
                }
            }
            
            if(measure.Measure(item, arrayBase.get(midle)) > 0)
            {
                minItem = midle;
            }
             
            if(measure.Measure(item, arrayBase.get(midle)) < 0)
            {
                maxItem = midle;
            }
        }
        
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (measure.Measure(item, arrayBase.get(iItem)) == 0) 
            {   
                duplicate = true;  
                return;
            }
                             
            if((iItem + 1) <= maxItem)
            {
                if (measure.Measure(item, arrayBase.get(iItem + 1)) < 0 && measure.Measure(item, arrayBase.get(iItem)) > 0) 
                {   
                    arrayBase.add((iItem + 1), item);
                    return;
                }
            }
                
            if((iItem - 1) >= 0)
            {
                if (measure.Measure(item, arrayBase.get(iItem)) < 0 && measure.Measure(item, arrayBase.get(iItem - 1)) > 0) 
                {   
                    arrayBase.add(iItem, item);
                    return;
                }
            }
        }
    }

    public void Add(Object o) {
        currentIndex++;

        duplicate = false;
                
        Sort(o);

        if(!duplicate)
        {
            countItems++;
        }
        else
        {
            currentIndex--;
        }
        
        Amount = countItems;
    }

    public Object getItem(int index) {
      return arrayBase.get(index);
    }
    
    public int getIndex(String value)
    {
        if(countItems <= 0)
        {
            return -1;
        }
        
        if(measure.Measure(arrayBase.get(0), value) == 0)
        {
            return 0;
        }
        
        if(measure.Measure(arrayBase.get(countItems - 1), value) == 0)
        {
            return (countItems - 1);
        }
                  
        int midle = countItems / 2;

        if (measure.Measure(value, arrayBase.get(midle)) == 0) {           
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
            if (measure.Measure(value, arrayBase.get(midle)) > 0)                
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

            if (measure.Measure(value, arrayBase.get(midle)) == 0) 
            {
                return midle;
            }
            
            if (midle == 0 && measure.Measure(value, arrayBase.get(midle)) < 0) 
            {
                return -1;
            }

            if ((midle - 1) >= 0) 
            {
                if (measure.Measure(value, arrayBase.get(midle)) < 0 && measure.Measure(value, arrayBase.get(midle - 1)) > 0) {
                    return -1;
                }
                 
                if (measure.Measure(value, arrayBase.get(midle)) < 0 && measure.Measure(value, arrayBase.get(midle - 1)) == 0) {
                    position = midle - 1;
                    return position;
                }
            } 
            else if (measure.Measure(value, arrayBase.get(midle)) < 0 && midle == 0) 
            {
                return -1;
            }

            if ((midle + 1) < currentIndex) 
            {
                if (measure.Measure(value, arrayBase.get(midle)) > 0 && measure.Measure(value, arrayBase.get(midle + 1)) <= 0) {
                    position = (midle + 1);
                    
                    if(measure.Measure(value, arrayBase.get(position)) == 0)
                    {
                        return position;
                    }
                    
                    return -1;
                }

                if (measure.Measure(value, arrayBase.get(midle)) >= 0 && measure.Measure(value, arrayBase.get(midle + 1)) < 0) 
                {
                    position = (midle);

                    if(measure.Measure(value, arrayBase.get(position)) == 0)
                    {
                        return position;
                    }
                    
                    return -1;
                }
            }
        }
           
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (measure.Measure(value, arrayBase.get(iItem)) == 0) 
            {   
                return iItem;
            }
        }
    
        return -1;
    }
}
