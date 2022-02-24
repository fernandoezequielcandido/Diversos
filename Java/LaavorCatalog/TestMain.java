package CatalogLaavor;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;
import java.util.Random;


public abstract class TestMain {

	public static void main(String[] args) throws IOException {
            
                       
		// TODO Auto-generated method stub
            ByKeyObject cat = new ByKeyObject();
            for(int i = 11303; i >= 1; i--)
            {
               Random rand = new Random();
                            
               CompTest comp = new CompTest();
               comp.a = "Arthur" + i;
               
               comp.b = "Logonos" + i;
               
               int ul = rand.nextInt(100);
               comp._1 = ul;
                              
               double wa = rand.nextDouble();
               comp._2 = wa * 100;
           
               String key  =  comp.a + "_" + comp.b; 
               cat.Add(key, comp);//0	
            }
            
            for(int i = 1; i <= 11303; i++)
            {
               Random rand = new Random();
                            
               CompTest comp = new CompTest();
               comp.a = "Arthur" + i;
               
               comp.b = "Logonos" + i;
               
               int ul = rand.nextInt(100);
               comp._1 = ul;
                              
               double wa = rand.nextDouble();
               comp._2 = wa * 100;
           
               String key  =  comp.a + "_" + comp.b; 
               CompTest tes = (CompTest)cat.getValue(key);
               System.out.println("Key " + key + " values _ and _2 "+ tes._1 + " " + tes._2);
            } 
            
            int op = 1;
            
            
            /*    Comparer comparer = new Comparer();
                CatalogObject<CompTest> catO = new CatalogObject<>(comparer);
		
		// Instantiate a Date object
	    Date date = new Date();

	    date = new Date();
	      // display time and date using toString()
	    System.out.println("Inicio pre insercao " + date.toString());
            
            CompTest c3 = new CompTest();
            c3.a = "Ruiz";
            c3.b = "Alvarenga";
            c3._1 = 19;
            c3._2 = 2.85;
            
            catO.Add(c3);
            
             CompTest c4 = new CompTest();
            c4.a = "Isaac";
            c4.b = "Laavor";
            c4._1 = 111;
            c4._2 = 772.5;
            
            catO.Add(c4);
            
            
            CompTest c = new CompTest();
            c.a = "Artur";
            c.b = "Logonos";
            c._1 = 1;
            c._2 = 2.5;
            
            catO.Add(c);
            
            CompTest c2 = new CompTest();
            c2.a = "Fernando";
            c2.b = "Candido";
            c2._1 = 2;
            c2._2 = 3.5;
            
            catO.Add(c2);
            
            Random rand = new Random();
                      
            for(int i = 1; i <= 1130573; i++)
            {
               CompTest cL = new CompTest();
               int iu = rand.nextInt(100);
               cL.a = "Fernando" + iu;
               
               int iu2 = rand.nextInt(100);
               cL.b = "Candido" + iu2;
               
               int ul = rand.nextInt(100);
               cL._1 = ul;
                              
               double wa = rand.nextDouble();
               cL._2 = wa * 100;
           
               catO.Add(cL);//0	
            }
            
            date = new Date();
	      // display time and date using toString()
	    System.out.println("Inicio pre insercao " + date.toString());
              
                try{
                    try (FileWriter fw = new FileWriter("D:\\testClass.txt")) {
                        for(int i = 0; i < catO.Amount; i++)
                        {
                            CompTest comp = (CompTest)catO.getItem(i);
                            fw.write("Value - " + comp.a + " " + comp.b + " " + comp._1 + " " + comp._2 + "\n");
                        }       } 
        }catch(IOException e){}
                
     */
            
            int _p = 0;
           /* double j = 0.01;
            while(j <= 4000)
            {
                j = j + 0.01;
              
                catD.Add(j);
            }
            
            
            double j2 = 4500.01;
            while(j2 > 0)
            {
                j2 = j2 - 0.01;
              
              //  catD.Add(Math.;
            }
            
            
             double j3 = 0.003;
            while(j3 <= 450)
            {
                j3 = j3 + 0.003;
              
                catD.Add(j3);
            }
            
             double j4 = 6500.005;
            while(j4 > 0)
            {
                j4 = j4 - 0.005;
              
              //  catD.Add(Math.;
            }*/
          /*  date = new Date();
            
             System.out.println("Final Pos insercao " + date.toString());
   
             
                catL.Add(5);	
                catL.Add(1015);
                catL.Add(1115);
                catL.Add(30574);
		for(int i = 1; i <= 4; i++)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 6; i <= 1014; i++)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 1016; i <= 2114; i++)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 1116; i <= 30573; i++)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 30570; i > 1; i--)
		{
			catL.Add(i);//0	
		}
                
	                
                for(int i = 4; i <= 15000; i++)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 4; i <= 15; i++)
		{
			catL.Add(i);//0	
		}
                for(int i = 4; i <= 15; i++)
		{
			catL.Add(i);//0	
		}
                for(int i = 4; i <= 15; i++)
		{
			catL.Add(i);//0	
		}
                for(int i = 40000; i > 0; i--)
		{
			catL.Add(i);//0	
		}
		
                for(int i = 1347; i > 0; i--)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 1; i <= 130573; i++)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 130573; i > 0; i--)
		{
			catL.Add(i);//0	
		}
		
                for(int i = 75000; i > 0; i--)
		{
			catL.Add(i);//0	
		}
                
                for(int i = 0; i < 20000; i++)
		{
			catL.Add(i);//0	
		}
                
                    System.out.println("Pos insercao " + date);
                
 
           try{
  FileWriter fw=new FileWriter("D:\\testLong.txt");    
            for(int i = 0; i < catL.Amount; i++)
            {               
                
		fw.write("Value - " + catL.getValue(i)+ "\n");	
            }
           fw.close(); 
        }catch(Exception e){}*/
                    
              /*  String[] letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z"};
		Random rand = new Random();
                int index = rand.nextInt(26);
                
                CatalogString catalogStr = new CatalogString();
                Date date = new Date();    
                System.out.println("Inicio pre insercao " + date.toString());
                
                double j = 1;
                while(j <= 400)
                {
                    j = j + 1;
              
                    String s = j + "";
                    for(int i = 0; i < 4; i++)
                    {
                        index = rand.nextInt(26);
                        s = s + letters[index];
                    }
                    catalogStr.Add(s);
                }
                
                double j2 = 1;
                while(j2 <= 40000)
                {
                    j2 = j2 + 1;
              
                    String s = j2 + "";
                    for(int i = 0; i < 4; i++)
                    {
                        index = rand.nextInt(26);
                        s = s + letters[index];
                    }
                    catalogStr.Add(s);
                }
            
                double j3 = 1;
                while(j3 <= 40000)
                {
                    j3 = j3 + 1;
              
                    String s = j3 + "";
                    for(int i = 0; i < 4; i++)
                    {
                        index = rand.nextInt(26);
                        s = s + letters[index];
                    }
                    catalogStr.Add(s);
                }
                
                double j4 = 1;
                while(j4 <= 40000)
                {
                    j4 = j4 + 1;
              
                    String s = j4 + "";
                    for(int i = 0; i < 4; i++)
                    {
                        index = rand.nextInt(26);
                        s = s + letters[index];
                    }
                    catalogStr.Add(s);
                }
            
               
                date = new Date();
            
                System.out.println("Final Pos insercao " + date.toString());
                
                try{
               FileWriter fw=new FileWriter("D:\\teststring.txt");    
          
                for(int i = 0; i < catalogStr.Amount; i++)
                {                      
                    fw.write("Value - " + catalogStr.getValue(i)+ "\n");	
                }
                fw.close(); 
            }catch(Exception e1){}*/
                
// Obtain a number between [0 - 49].


		
	/*	//CatalogInt s = new CatalogInt();
                CatalogDouble catD = new CatalogDouble();
		
		// Instantiate a Date object
	    Date date = new Date();

	    date = new Date();
	      // display time and date using toString()
	    System.out.println("Inicio pre insercao " + date.toString());
            
            double j = 0.01;
            while(j <= 4000)
            {
                j = j + 0.01;
              
                catD.Add(j);
            }
            
            
            double j2 = 4500.01;
            while(j2 > 0)
            {
                j2 = j2 - 0.01;
              
              //  catD.Add(Math.;
            }
            
            
             double j3 = 0.003;
            while(j3 <= 450)
            {
                j3 = j3 + 0.003;
              
                catD.Add(j3);
            }
            
             double j4 = 6500.005;
            while(j4 > 0)
            {
                j4 = j4 - 0.005;
              
              //  catD.Add(Math.;
            }
            date = new Date();
            
             System.out.println("Final Pos insercao " + date.toString());
            */
        /*    try{
               FileWriter fw=new FileWriter("D:\\testdouble.txt");    
          
                for(int i = 0; i < catD.Amount; i++)
                {                      
                    fw.write("Value - " + catD.getValue(i)+ "\n");	
                }
                fw.close(); 
            }catch(Exception e1){}
	      */
              
         /*       s.Add(5);	
                s.Add(1015);
                s.Add(1115);
                s.Add(30574);
		for(int i = 1; i <= 4; i++)
		{
			s.Add(i);//0	
		}
                
                for(int i = 6; i <= 1014; i++)
		{
			s.Add(i);//0	
		}
                
                for(int i = 1016; i <= 2114; i++)
		{
			s.Add(i);//0	
		}
                
                for(int i = 1116; i <= 30573; i++)
		{
			s.Add(i);//0	
		}
                
                for(int i = 30570; i > 1; i--)
		{
			s.Add(i);//0	
		}
                
	                
                for(int i = 4; i <= 15000; i++)
		{
			s.Add(i);//0	
		}
                
                for(int i = 4; i <= 15; i++)
		{
			s.Add(i);//0	
		}
                for(int i = 4; i <= 15; i++)
		{
			s.Add(i);//0	
		}
                for(int i = 4; i <= 15; i++)
		{
			s.Add(i);//0	
		}
                for(int i = 40000; i > 0; i--)
		{
			s.Add(i);//0	
		}
		
                for(int i = 1347; i > 0; i--)
		{
			s.Add(i);//0	
		}
                
                for(int i = 1; i <= 130573; i++)
		{
			s.Add(i);//0	
		}
                
                for(int i = 130573; i > 0; i--)
		{
			s.Add(i);//0	
		}
		
                for(int i = 75000; i > 0; i--)
		{
			s.Add(i);//0	
		}
                
                for(int i = 0; i < 20000; i++)
		{
			s.Add(i);//0	
		}
                
                    System.out.println("Pos insercao " + date);
                
                FileWriter writer;

                
                BufferedWriter bw = null;*/
       /* try {*/

                     //writer = new FileWriter("d:/teste.txt");

           //bw = new BufferedWriter(writer);
           
 /* FileWriter fw=new FileWriter("D:\\test.txt");    
            for(int i = 0; i < s.Amount; i++)
            {               
                
		fw.write("Value - " + s.getValue(i)+ "\n");	
            }
           fw.close(); 
        }catch(Exception e){}*/
        
     /*   try{
          FileWriter fw=new FileWriter("D:\\test111.txt");    
          
           for(int i = 1347; i > 0; i--)
		{
                    fw.write("Index - " + s.getIndex(s.getValue(i))+ "\n");
			//s.getValue(i);//0	
		}
           
         /*   for(int i = 0; i < s.Amount; i++)
            {               
                  
                if(i == 130573)
                {
                    int h  = 0;
                }
                
		fw.write("Value - " + s.getValue(i)+ "\n");	
            }*/
        /*   fw.close(); 
        }catch(Exception e1){}*/
       
           
         /*  int o_ = s.getIndex(2);
           int la = s.getIndex(74);
           int la1 = s.getIndex(27700);
           int la2 = s.getIndex(91383);
           int la3 = s.getIndex(106440);
           int la4 = s.getIndex(147033);
           int la5 = s.getIndex(147037);
           int la6 = s.getIndex(57916);
           int la7 = s.getIndex(31038);
           int la8 = s.getIndex(20395);
           int ed9 = 0;*/
    /*catch(IOException ex)
    {
        ex.printStackTrace();
    }*/
            
         /*   for(int i = 0; i < s.CountItems(); i++)
            {
		bw.write(s.getValue(i));	
                bw.flush();
                
            }*/
            
            
      /*  } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                
                // Close the writer regardless of what happens...
                bw.close();
            } catch (Exception e) {
            }
        }*/
                
              //  int ue = 0;
                /*
		date = new Date();
		System.out.println("pos Insercao inicial " + date.toString());
		
		for(int i = 1; i <= 900; i++)
		{
			s.Add(i);//0	
		}
		
		date = new Date();
		System.out.println("900 initial" + date.toString());
                
                
		for(int i = 100; i <= 149000; i++)
		{
			s.Add(i);//0	
		}
                
                date = new Date();
		System.out.println("149000 initial" + date.toString());
                
                
                int s_ = 0;
                
                Writer writer = null;
                try
                {
                    for(int iCount = 0; iCount < s.CountItems(); iCount++)
                    {
                        writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("filename.txt"), "utf-8"));
                        writer.write(s.getValue(iCount) + "\n");
                    }
                }
                catch(FileNotFoundException e)
                {
                    int t = 0;
                }
                catch(UnsupportedEncodingException u)
                {
                    int u_ = 8;
                }
                finally
                {
                    writer.close();
                }*/

		//ArrayList<Integer> array = new ArrayList<Integer>();

	      /*
	    ArrayList<Integer> array = new ArrayList<Integer>();
		for(int i = 4; i <= Integer.MAX_VALUE; i++)
		{
			array.add(i);//0	
		}
		date = new Date();
		System.out.println(date.toString());*/
		
		
		/*for(int i = 0; i < Integer.MAX_VALUE; i++)
		{
			System.out.println(s.getIndex(i));	
		}
		
		int a0 = 0;*/
		
	}

}
