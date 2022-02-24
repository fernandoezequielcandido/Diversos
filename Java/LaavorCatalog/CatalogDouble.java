package CatalogLaavor;

import java.util.ArrayList;

public class CatalogDouble {
    public int Amount;
    
    private int currentIndex;
    private ArrayList<ItemDouble> arrayBase;
    private int countItems;

    private double maxValue;

    private class ItemDouble {

        private double Value;

        public double getValue() {
            return Value;
        }

        public void setValue(double value) {
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
    public CatalogDouble() {
        currentIndex = -1;
        countItems = 0;
        arrayBase = new ArrayList<ItemDouble>();
       // maxValue = Double.MIN_VALUE;
    }

    private void Sort(ItemDouble item) {
        
        if (countItems == 0) {
            arrayBase.add(item);
            return;
        }
        
        int positionInserted = -1;
                
        if(countItems == 1)
        {
            if (item.getValue() < arrayBase.get(0).getValue()) 
            {
                positionInserted = 0;
                arrayBase.add(positionInserted, item);
                return;
            }
            
            if (item.getValue() > arrayBase.get(0).getValue()) 
            {
                positionInserted = 1;
                arrayBase.add(positionInserted, item);
                return;
            }
        }

        if (item.getValue() >= arrayBase.get(currentIndex - 1).getValue()) {
            
            if(item.getValue() == arrayBase.get(currentIndex - 1).getValue())
            {
                item.setDuplicate(true);
            }
            else
            {
                arrayBase.add(item);
            }
            
            return;
        }

        int midle = countItems / 2;

        if (item.getValue() == arrayBase.get(midle).getValue()) {
            
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
            if (item.getValue() > arrayBase.get(midle).getValue()) 
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
            else if(item.getValue() < arrayBase.get(midle).getValue())
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

            if (item.getValue() == arrayBase.get(midle).getValue()) 
            {
                item.setDuplicate(true);
                hasInserted = true;
                return;
            }

            if (midle == 0 && item.getValue() < arrayBase.get(midle).getValue()) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }

            if ((midle - 1) >= 0) 
            {
                if (item.getValue() < arrayBase.get(midle).getValue() && item.getValue() > arrayBase.get(midle - 1).getValue()) {
                    positionInserted = midle;
                    arrayBase.add(positionInserted, item);
                    hasInserted = true;
                    return;
                }

                if (item.getValue() < arrayBase.get(midle).getValue() && item.getValue() == arrayBase.get(midle - 1).getValue()) {
                    positionInserted = midle - 1;

                    if(item.getValue() == arrayBase.get(midle - 1).getValue())
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
            else if (item.getValue() < arrayBase.get(midle).getValue() && midle == 0) 
            {
                positionInserted = midle;
                arrayBase.add(positionInserted, item);
                hasInserted = true;
                return;
            }

            if ((midle + 1) < currentIndex) 
            {
                if (item.getValue() > arrayBase.get(midle).getValue() && item.getValue() <= arrayBase.get(midle + 1).getValue()) {
                    positionInserted = midle + 1;
                    
                    if(item.getValue() == arrayBase.get(midle + 1).getValue())
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

                if (item.getValue() >= arrayBase.get(midle).getValue() && item.getValue() < arrayBase.get(midle + 1).getValue()) {
                    positionInserted = midle + 1;
                    
                    if(item.getValue() == arrayBase.get(midle).getValue())
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
            
            if(item.getValue() > arrayBase.get(midle).getValue())
            {
                minItem = midle;
            }
            
            if(item.getValue() < arrayBase.get(midle).getValue())
            {
                maxItem = midle;
            }

        }
        
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (item.getValue() == arrayBase.get(iItem).getValue()) 
            {   
                item.setDuplicate(true);
                    //arrayBase.add(iItem, item);
                return;
            }
                
            if((iItem + 1) <= maxItem)
            {
                if (item.getValue() < arrayBase.get(iItem + 1).getValue() && item.getValue() > arrayBase.get(iItem).getValue()) 
                {   
                    arrayBase.add((iItem + 1), item);
                    return;
                }
            }
                
            if((iItem - 1) >= 0)
            {
                if (item.getValue() < arrayBase.get(iItem).getValue() && item.getValue() > arrayBase.get(iItem - 1).getValue()) 
                {   
                    arrayBase.add(iItem, item);
                    return;
                }
            }
        }
    }

    public void Add(double value) {
        currentIndex++;

        ItemDouble item = new ItemDouble();
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

    public double getValue(int index) {
       return arrayBase.get(index).getValue();
    }
    
    public int getIndex(double value)
    {
        if(countItems <= 0)
        {
            return -1;
        }
        
        if(arrayBase.get(0).getValue() == value)
        {
            return 0;
        }
        
        if(arrayBase.get(countItems - 1).getValue() == value)
        {
            return (countItems - 1);
        }
        
        int midle = countItems / 2;

        if (value == arrayBase.get(midle).getValue()) {           
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
            if (value > arrayBase.get(midle).getValue()) 
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

            if (value == arrayBase.get(midle).getValue()) 
            {
                return midle;
            }

            if (midle == 0 && value < arrayBase.get(midle).getValue()) 
            {
                return -1;
            }

            if ((midle - 1) >= 0) 
            {
                if (value < arrayBase.get(midle).getValue() && value > arrayBase.get(midle - 1).getValue()) {
                    return -1;
                }

                if (value < arrayBase.get(midle).getValue() && value == arrayBase.get(midle - 1).getValue()) {
                    position = midle - 1;
                    return position;
                }
            } 
            else if (value < arrayBase.get(midle).getValue() && midle == 0) 
            {
                return -1;
            }

            if ((midle + 1) < currentIndex) 
            {
                if (value > arrayBase.get(midle).getValue() && value <= arrayBase.get(midle + 1).getValue()) {
                    position = (midle + 1);
                    
                    if(value == arrayBase.get(position).getValue())
                    {
                        return position;
                    }
                    
                    return -1;
                }

                if (value >= arrayBase.get(midle).getValue() && value < arrayBase.get(midle + 1).getValue()) 
                {
                    position = (midle);

                    if(value == arrayBase.get(position).getValue())
                    {
                        return position;
                    }
                    
                    return -1;
                }
            }
        }
           
        for(int iItem = minItem; iItem <= maxItem; iItem++)
        {
            if (value == arrayBase.get(iItem).getValue()) 
            {   
                return iItem;
            }
        }
    
        return -1;
    }
}
