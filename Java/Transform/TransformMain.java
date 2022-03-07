/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package TransformLaavor;

import java.io.IOException;

/**
 *
 * @author Fernando
 */
public abstract class TransformMain {
    public static void main(String[] args) throws IOException {
        ForString f = new ForString();
        
        System.out.println(f.Double(45.871693366, 2));
        System.out.println(f.Double(27845.10427, 2));
        System.out.println(f.Double(1.1013, 7));
        System.out.println(f.Double(225.871693366, 4));
        System.out.println(f.Double(21788.871693366, 3));
        System.out.println(f.Double(8.0, 1));
        System.out.println(f.Double(8.0, 2));
        System.out.println(f.Double(8.0, 3));
        System.out.println(f.Double(8.0, 4));
        System.out.println(f.Double(8.0, 5));
        System.out.println(f.Double(1.1, 1));
        System.out.println(f.Double(1.1, 2));
        System.out.println(f.Double(1.1, 3));
        System.out.println(f.Double(1.1, 4));
        System.out.println(f.Double(1.1, 5));
        System.out.println(f.Double(1.1, 6));
        System.out.println(f.Double(1.1, 7));
        
        System.out.println(f.Double(4123456789.544, 1, '.', ','));
        
        System.out.println(f.Integer(Integer.MAX_VALUE, '.'));
        System.out.println(f.Integer(Integer.MAX_VALUE, ','));
        
        System.out.println(f.Integer(111, '.'));
        System.out.println(f.Integer(2222, ','));
        
        System.out.println(f.Long(Long.MIN_VALUE, '.'));
        System.out.println(f.Long(Long.MAX_VALUE, ','));
        
        System.out.println(f.Remove("Fernando", 1, 3));
        System.out.println(f.Remove("Fernando", 1, 5));
        System.out.println(f.Remove("Fernando", 0, 2));
        System.out.println(f.Remove("Fernando", 0, 6));
        System.out.println(f.Remove("FernandoezequielCandido", 0, 6));
        System.out.println(f.Remove("FernandoezequielCandido", 1, 2));
        System.out.println(f.Remove("FernandoezequielCandido", 5, 15));
        System.out.println(f.Remove("Fernando", 6, 2));
        
        System.out.println("");
        System.out.println("New Line");
        System.out.println("");
        
        System.out.println(f.Remove("Fernando", "Fern"));
        System.out.println(f.Remove("Fernando", "ndo"));
        System.out.println(f.Remove("FernandoezequielCandido", "ezequiel"));
        
        System.out.println(f.Insert("Emanuel",  "--", 3));
        System.out.println(f.Insert("Emanuel",  "FF", 4));
        System.out.println(f.Insert("Emanuel",  "TT", 5));
        System.out.println(f.Insert("Emanuel",  "YY", 6));
        System.out.println(f.Insert("Emanuel",  "88", 7));
        System.out.println(f.Insert("Emanuel",  "", 7));
        
        ForNumber fNumber = new ForNumber();
        System.out.println(fNumber.Round(45.8769211, 3));
        System.out.println(fNumber.Round(5.975211, 3));
        System.out.println(fNumber.Round(1.3457, 3));
        System.out.println(fNumber.Round(1.3444, 3));
        System.out.println(fNumber.Round(1.3433, 3));
        System.out.println(fNumber.Round(8.1457854751, 3));
        
        System.out.println(fNumber.Double("1.345.777,77", ',', '.'));
        System.out.println(fNumber.Double("1,345,777.77", '.', ','));
        System.out.println(fNumber.Double("1,345,777.77", '.'));
        System.out.println(fNumber.Double("1,345,777.77", '.', ','));
        
        
        System.out.println(fNumber.Round(1.3444, 3));
        System.out.println(fNumber.Round(1.3433, 3));
        System.out.println(fNumber.Round(8.1457854751, 3));
        
        int ht = 0;
    } 
}
