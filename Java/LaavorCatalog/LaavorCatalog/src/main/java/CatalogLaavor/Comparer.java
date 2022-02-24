/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CatalogLaavor;

/**
 *
 * @author Fernando
 */
public class Comparer implements Measure<CompTest> {

    @Override
    public int Measure(CompTest first, CompTest second) {
        int returnItem;
        
        returnItem = first.a.compareTo(second.a);
        
        if(returnItem != 0)
        {
            return returnItem;
        }
        
        returnItem = first.b.compareTo(second.b);
        
        if(returnItem != 0)
        {
            return returnItem;
        }
        
        returnItem = Integer.compare(first._1, second._1);
        
        if(returnItem != 0)
        {
            return returnItem;
        }
        
        return Double.compare(first._2, second._2);
        
        
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
