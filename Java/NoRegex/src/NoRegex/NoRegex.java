package NoRegex;
import java.util.ArrayList;
import java.util.Vector;

public class NoRegex {
	
	private Vector<Integer> vectorSpecialCharactersNumbers;
	private ArrayList<Integer> listCapitalLetters;
	private ArrayList<Integer> listLowercaseLetters;
	private ArrayList<Integer> listNumberLetters;
	
	public StringNoRegex StarWith = new StringNoRegex();
	public StringNoRegex EndsWith = new StringNoRegex();
	public StringNoRegex Contains = new StringNoRegex();
	public StringNoRegex DoesNotContain = new StringNoRegex();
	public Repeat RepeatAtLeast = new Repeat(); 
	public Repeat RepeatAtMaximum = new Repeat();
	public StringContainsAfter ContainsAfter = new StringContainsAfter();
	public StringContainsBefore ContainsBefore = new StringContainsBefore();
	
	private Integer MinimumCharacters;
	
	public Integer getMinimumCharacters() {
		return MinimumCharacters;
	}

	public void setMinimumCharacters(int minimumCharacters) {
		MinimumCharacters = minimumCharacters;
	}
	
	private Integer MaximumCharacters;

	public Integer getMaximumCharacters() {
		return MaximumCharacters;
	}

	public void setMaximumCharacters(Integer maximumCharacters) {
		MaximumCharacters = maximumCharacters;
	}
	
	private Integer MinimumSpecialCharacters;
	
	public Integer getMinimumSpecialCharacters() {
		return MinimumSpecialCharacters;
	}

	public void setMinimumSpecialCharacters(int minimumSpecialCharacters) {
		MinimumSpecialCharacters = minimumSpecialCharacters;
	}
	
	private Integer MaximumSpecialCharacters;

	public Integer getMaximumSpecialCharacters() {
		return MaximumSpecialCharacters;
	}

	public void setMaximumSpecialCharacters(Integer maximumSpecialCharacters) {
		MaximumSpecialCharacters = maximumSpecialCharacters;
	}
	
	private Boolean CompellingCaps;
	
	public Boolean getCompellingCaps() {
		return CompellingCaps;
	}

	public void setCompellingCaps(Boolean compellingCaps) {
		CompellingCaps = compellingCaps;
	}
	
	private Boolean CompellingLowercase;

	public Boolean getCompellingLowercase() {
		return CompellingLowercase;
	}

	public void setCompellingLowercase(Boolean compellingLowercase) {
		CompellingLowercase = compellingLowercase;
	}
	
	private Boolean CompellingNumbers;

	public Boolean getCompellingNumbers() {
		return CompellingNumbers;
	}

	public void setCompellingNumbers(Boolean compellingNumbers) {
		CompellingNumbers = compellingNumbers;
	}

	public NoRegex()
	{
		MinimumSpecialCharacters = null;
		MaximumSpecialCharacters = null;
		CompellingCaps = null;
		CompellingLowercase = null;
		CompellingNumbers = null;
		
		vectorSpecialCharactersNumbers = new Vector<Integer>();
		vectorSpecialCharactersNumbers.add(33);
		vectorSpecialCharactersNumbers.add(34);
		vectorSpecialCharactersNumbers.add(35);
		vectorSpecialCharactersNumbers.add(36);
		vectorSpecialCharactersNumbers.add(37);
		vectorSpecialCharactersNumbers.add(38);
		vectorSpecialCharactersNumbers.add(39);
		vectorSpecialCharactersNumbers.add(40);
		vectorSpecialCharactersNumbers.add(41);
		vectorSpecialCharactersNumbers.add(42);
        vectorSpecialCharactersNumbers.add(43);
        vectorSpecialCharactersNumbers.add(44);
        vectorSpecialCharactersNumbers.add(45);
        vectorSpecialCharactersNumbers.add(46);
        vectorSpecialCharactersNumbers.add(47);
        vectorSpecialCharactersNumbers.add(58);
        vectorSpecialCharactersNumbers.add(59);
        vectorSpecialCharactersNumbers.add(60);
        vectorSpecialCharactersNumbers.add(61);
        vectorSpecialCharactersNumbers.add(62);
        vectorSpecialCharactersNumbers.add(63);
        vectorSpecialCharactersNumbers.add(64);
        vectorSpecialCharactersNumbers.add(91);
        vectorSpecialCharactersNumbers.add(92);
        vectorSpecialCharactersNumbers.add(93);
        vectorSpecialCharactersNumbers.add(94);
        vectorSpecialCharactersNumbers.add(95);
        vectorSpecialCharactersNumbers.add(96);
        vectorSpecialCharactersNumbers.add(123);
        vectorSpecialCharactersNumbers.add(124);
        vectorSpecialCharactersNumbers.add(125);
        vectorSpecialCharactersNumbers.add(126);
        vectorSpecialCharactersNumbers.add(127);
        vectorSpecialCharactersNumbers.add(155);
        vectorSpecialCharactersNumbers.add(156);
        vectorSpecialCharactersNumbers.add(157);
        vectorSpecialCharactersNumbers.add(158);
        vectorSpecialCharactersNumbers.add(159);
        vectorSpecialCharactersNumbers.add(166);
        vectorSpecialCharactersNumbers.add(167);
        vectorSpecialCharactersNumbers.add(168);
        vectorSpecialCharactersNumbers.add(169);
        vectorSpecialCharactersNumbers.add(170);
        vectorSpecialCharactersNumbers.add(171);
        vectorSpecialCharactersNumbers.add(172);
        vectorSpecialCharactersNumbers.add(173);
        vectorSpecialCharactersNumbers.add(174);
        vectorSpecialCharactersNumbers.add(175);
        
        listCapitalLetters = new ArrayList<Integer>();
        listCapitalLetters.add(65);
        listCapitalLetters.add(66);
        listCapitalLetters.add(67);
        listCapitalLetters.add(68);
        listCapitalLetters.add(69);
        listCapitalLetters.add(70);
        listCapitalLetters.add(71);
        listCapitalLetters.add(72);
        listCapitalLetters.add(73);
        listCapitalLetters.add(74);
        listCapitalLetters.add(75);
        listCapitalLetters.add(76);
        listCapitalLetters.add(77);
        listCapitalLetters.add(78);
        listCapitalLetters.add(79);
        listCapitalLetters.add(80);
        listCapitalLetters.add(81);
        listCapitalLetters.add(82);
        listCapitalLetters.add(83);
        listCapitalLetters.add(84);
        listCapitalLetters.add(85);
        listCapitalLetters.add(86);
        listCapitalLetters.add(87);
        listCapitalLetters.add(88);
        listCapitalLetters.add(89);
        listCapitalLetters.add(90);
        
        listLowercaseLetters = new ArrayList<Integer>();
        listLowercaseLetters.add(97);
        listLowercaseLetters.add(98);
        listLowercaseLetters.add(99);
        listLowercaseLetters.add(100);
        listLowercaseLetters.add(101);
        listLowercaseLetters.add(102);
        listLowercaseLetters.add(103);
        listLowercaseLetters.add(104);
        listLowercaseLetters.add(105);
        listLowercaseLetters.add(106);
        listLowercaseLetters.add(107);
        listLowercaseLetters.add(108);
        listLowercaseLetters.add(109);
        listLowercaseLetters.add(110);
        listLowercaseLetters.add(111);
        listLowercaseLetters.add(112);
        listLowercaseLetters.add(113);
        listLowercaseLetters.add(114);
        listLowercaseLetters.add(115);
        listLowercaseLetters.add(116);
        listLowercaseLetters.add(117);
        listLowercaseLetters.add(118);
        listLowercaseLetters.add(119);
        listLowercaseLetters.add(120);
        listLowercaseLetters.add(121);
        listLowercaseLetters.add(122);
        
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
	
	public boolean Validate(String value) 
	{
		boolean isValid = true;
		
		if(!StarWith.getValue().isEmpty())
		{
			if(StarWith.isIgnoreCase())
			{
				isValid = value.toLowerCase().startsWith(StarWith.getValue().toLowerCase());
			}
			else
			{
				isValid = value.startsWith(StarWith.getValue());
			}	
			
			if (!isValid)
	        {
				return isValid;
	        }
		}
		
		if(!EndsWith.getValue().isEmpty())
		{
			if(EndsWith.isIgnoreCase())
			{
				isValid = value.toLowerCase().endsWith(EndsWith.getValue().toLowerCase());
			}
			else
			{
				isValid = value.endsWith(EndsWith.getValue());
			}
			
			if (!isValid)
	        {
				return isValid;
	        }
		}
		
		if(!Contains.getValue().isEmpty())
		{
			if(Contains.isIgnoreCase())
			{
				isValid = value.toLowerCase().contains(Contains.getValue().toLowerCase());
			}
			else
			{
				isValid = value.contains(Contains.getValue());
			}
			
			if (!isValid)
	        {
				return isValid;
	        }
		}
		
		if(MinimumCharacters != null)
		{
			isValid = (value.length() >= MinimumCharacters);
			
			if (!isValid)
	        {
				return isValid;
	        }
		}
		
		if(MaximumCharacters != null)
		{
			isValid = (value.length() <= MaximumCharacters);
			
			if (!isValid)
	        {
				return isValid;
	        }
		}
		
		if(!DoesNotContain.getValue().isEmpty())
		{
			if(DoesNotContain.isIgnoreCase())
			{
				isValid = !(value.toLowerCase().contains(DoesNotContain.getValue().toLowerCase()));
			}
			else
			{
				isValid = !(value.contains(DoesNotContain.getValue()));
			}
			
			if (!isValid)
	        {
				return isValid;
	        }
		}
		
		if(RepeatAtLeast.getAmount() != null && !RepeatAtLeast.getValue().isEmpty())
		{
			int countRepeat = 0;
			String valueBase;
			String valueSearch;
			
			if(RepeatAtLeast.isIgnoreCase())
			{
				valueBase = value.toLowerCase();
				valueSearch = RepeatAtLeast.getValue().toLowerCase();
			}
			else
			{
				valueBase = value;
				valueSearch = RepeatAtLeast.getValue();
			}
			
			int firstIndex = valueBase.indexOf(valueSearch);
			if(firstIndex >= 0)
			{
				countRepeat++;
				
				if(countRepeat < RepeatAtLeast.getAmount())
				{
					String currentTempString;
					if(firstIndex != 0)
					{
						currentTempString = valueBase.substring(0, firstIndex) + valueBase.substring(firstIndex + (valueSearch.length()), valueBase.length());
					}
					else
					{
						currentTempString = valueBase.substring(valueSearch.length(), valueBase.length());
					}
					
					while(firstIndex >= 0)
					{
						firstIndex = currentTempString.indexOf(valueSearch);
						if(firstIndex < 0)
						{
							break;
						}
						
						countRepeat++;
						if(countRepeat >= RepeatAtLeast.getAmount())
						{
							break;
						}
						
						if(firstIndex != 0)
						{
							currentTempString = currentTempString.substring(0, firstIndex) + currentTempString.substring(firstIndex + valueSearch.length(), currentTempString.length());
						}
						else
						{
							currentTempString = currentTempString.substring(valueSearch.length(), currentTempString.length());
						}
					}
				}
			}
			
			isValid = (countRepeat >= RepeatAtLeast.getAmount());

            if (!isValid)
            {
            	return isValid;
            }
		}
		
		if(RepeatAtMaximum.getAmount() != null && !(RepeatAtMaximum.getValue().isEmpty()))
		{
			int countRepeat = 0;
			String valueBase;
			String valueSearch;
			
			if(RepeatAtMaximum.isIgnoreCase())
			{
				valueBase = value.toLowerCase();
				valueSearch = RepeatAtMaximum.getValue().toLowerCase();
			}
			else
			{
				valueBase = value;
				valueSearch = RepeatAtMaximum.getValue();
			}
			
			int firstIndex = valueBase.indexOf(valueSearch);
			if (firstIndex >= 0)
			{
				countRepeat = 1;
				if(countRepeat <= RepeatAtMaximum.getAmount())
				{
					String currentTempString;
					if(firstIndex != 0)
					{
						currentTempString = valueBase.substring(0, firstIndex) + valueBase.substring(firstIndex + (valueSearch.length()), valueBase.length());
					}
					else
					{
						currentTempString = valueBase.substring(valueSearch.length(), valueBase.length());
					}
					
					while (firstIndex >= 0)
					{
						firstIndex = currentTempString.indexOf(valueSearch);
						if(firstIndex < 0)
						{
							break;
						}
					
						countRepeat++;
						if(countRepeat > RepeatAtMaximum.getAmount())
						{
							break;
						}
						
						if(firstIndex != 0)
						{
							currentTempString = currentTempString.substring(0, firstIndex) + currentTempString.substring(firstIndex + (valueSearch.length()), currentTempString.length());
						}
						else
						{
							currentTempString = currentTempString.substring(valueSearch.length(), currentTempString.length());
						}
					}
					
				}
			}
			
			isValid = (countRepeat <= RepeatAtMaximum.getAmount());

            if (!isValid)
            {
            	return isValid;
            }
		}
		
		ArrayList<Integer> listAscChars = new ArrayList<Integer>();
		int lenghtASC = value.length();
		
		if(MinimumSpecialCharacters != null && MinimumSpecialCharacters > 0)
		{
			for(int iChar = 0; iChar < lenghtASC; iChar++)
			{
				Integer valueList = (int)(value.charAt(iChar));
				listAscChars.add(valueList);
			}
			
			int countSpecialC = 0;
			
			for(int iAsc = 0; iAsc < lenghtASC; iAsc++)
			{
				int keyItem = listAscChars.get(iAsc);
				
				for(int iC = 0; iC < vectorSpecialCharactersNumbers.size() - 1; iC++)
				{
					if(vectorSpecialCharactersNumbers.get(iC) == keyItem)
					{
						countSpecialC++;
					}
				}
				
				if(countSpecialC >= MinimumSpecialCharacters)
				{
					break;
				}
			}
			
			isValid = (countSpecialC >= MinimumSpecialCharacters);

            if (!isValid)
            {
            	return isValid;
            }
		}
		
		if(MaximumSpecialCharacters != null)
		{
			if(listAscChars.size() == 0)
			{
				for(int iChar = 0; iChar < lenghtASC; iChar++)
				{
					Integer valueList = (int)(value.charAt(iChar));
					listAscChars.add(valueList);
				}
			}
			
			int countSpecialC = 0;
			
			for(int iAsc = 0; iAsc < lenghtASC; iAsc++)
			{
				int keyItem = (int)listAscChars.get(iAsc);
				for(int iC = 0; iC < vectorSpecialCharactersNumbers.size() - 1; iC++)
				{
					if(vectorSpecialCharactersNumbers.get(iC) == keyItem)
					{
						countSpecialC++;
					}
				}
				
				if(countSpecialC > MaximumSpecialCharacters)
				{
					break;
				}
			}
			
			isValid = (countSpecialC <= MaximumSpecialCharacters);

            if (!isValid)
            {
            	return isValid;
            }
		}
		
		if(CompellingCaps != null && CompellingCaps)
		{
			if(listAscChars.size() == 0)
			{
				for(int iChar = 0; iChar < lenghtASC; iChar++)
				{
					Integer valueList = (int)(value.charAt(iChar));
					listAscChars.add(valueList);
				}
			}
			
			int countCaps = 0;
			
			for(int iAsc = 0; iAsc < lenghtASC; iAsc++)
			{
				int keyItem = (int)listAscChars.get(iAsc);
				
				for(int iC = 0; iC < listCapitalLetters.size() - 1; iC++)
				{
					if(listCapitalLetters.get(iC) == keyItem)
					{
						countCaps++;
					}
				}
			}
			
			isValid = (countCaps > 0);
			
			if(!isValid)
			{
				return isValid;
			}
		}
		
		if(CompellingLowercase != null && CompellingLowercase)
		{
			if(listAscChars.size() == 0)
			{
				for(int iChar = 0; iChar < lenghtASC; iChar++)
				{
					Integer valueList = (int)(value.charAt(iChar));
					listAscChars.add(valueList);
				}
			}
			
			int countLower = 0;
			
			for(int iAsc = 0; iAsc < lenghtASC; iAsc++)
			{
				int keyItem = (int)listAscChars.get(iAsc);
				
				for(int iC = 0; iC < listLowercaseLetters.size() - 1; iC++)
				{
					if(listLowercaseLetters.get(iC) == keyItem)
					{
						countLower++;
					}
				}
			}
			
			isValid = (countLower > 0);
			
			if (!isValid)
			{
				return isValid;
			}
		}
		
		if(CompellingNumbers != null && CompellingNumbers)
		{
			if(listAscChars.size() == 0)
			{
				for(int iChar = 0; iChar < lenghtASC; iChar++)
				{
					Integer valueList = (int)(value.charAt(iChar));
					listAscChars.add(valueList);
				}
			}
			
			int countNumbers = 0;
			
			for(int iAsc = 0; iAsc < lenghtASC; iAsc++)
			{
				int keyItem = (int)listAscChars.get(iAsc);
				
				for(int iC = 0; iC < listNumberLetters.size() - 1; iC++)
				{
					if(listNumberLetters.get(iC) == keyItem)
					{
						countNumbers++;
					}
				}
			}
			
			isValid = (countNumbers > 0);

            if (!isValid)
            {
                return isValid;
            }
		}
		
		if (!ContainsAfter.getValue().isEmpty() && (!ContainsAfter.getValueAfter().isEmpty() || ContainsAfter.getAmountCharacters() != null))
	    {
			int index;
			
			String valueBase;
			String valueSearch;
			
			String tempWithout = "";
			
			if(ContainsAfter.isIgnoreCase())
			{
				valueBase = value.toLowerCase();
				valueSearch = ContainsAfter.getValue().toLowerCase();
			}
			else
			{
				valueBase = value;
				valueSearch = ContainsAfter.getValue(); 
			}
			
			index = valueBase.indexOf(valueSearch);
			
			boolean hasValue = false;
			if(index >= 0)
			{
				tempWithout = valueBase.substring(index + valueSearch.length(), valueBase.length());
							
				if(!ContainsAfter.getValueAfter().isEmpty())
				{
					index = tempWithout.indexOf(ContainsAfter.getValueAfter());
					hasValue = (index >= 0);
				}
				
				if(hasValue && ContainsAfter.getAmountCharacters() != null)
				{
					hasValue = (tempWithout.length() >=  ContainsAfter.getAmountCharacters());
				}
			}
			
			isValid = (hasValue);
			
			if (!isValid)
            {
                return isValid;
            }
			else
			{
				if (ContainsAfter.isBlockSpecialCharacters())
				{
					listAscChars.clear();
					
					int lenghtAfter = tempWithout.length();
					for(int iChar = 0; iChar < lenghtAfter; iChar++)
					{
						int valueList = tempWithout.charAt(iChar);
						listAscChars.add(valueList);
					}
					
					int countCharacters = 0;
					
					for(int iAsc = 0; iAsc < lenghtAfter; iAsc++)
					{
						int keyItem = listAscChars.get(iAsc);
						for(int iC = 0; iC < vectorSpecialCharactersNumbers.size() - 1; iC++)
						{
							if(vectorSpecialCharactersNumbers.get(iC) == keyItem)
							{
								countCharacters++;
							}
						}
					}
					listAscChars.clear();
					
					isValid = (countCharacters <= 0);
					
					if(!isValid)
					{
						return isValid;
					}
				}
				
				if(ContainsAfter.isCompellingLetters())
				{
					listAscChars.clear();
					
					int lenghtAfter = tempWithout.length();
					for(int iChar = 0; iChar < lenghtAfter; iChar++)
					{
						int valueList = tempWithout.charAt(iChar);
						listAscChars.add(valueList);
					}
					
					int countCharacters = 0;
					
					for(int iAsc = 0; iAsc < lenghtAfter; iAsc++)
					{
						int keyItem = (int)listAscChars.get(iAsc);
						boolean fisrtContain = false;
						for(int iC = 0; iC < listCapitalLetters.size() - 1; iC++)
						{
							if(listCapitalLetters.get(iC) == keyItem)
							{
								countCharacters++;
								fisrtContain = true;
								break;
							}
						}
						
						if(!fisrtContain)
						{
							for(int iC = 0; iC < listLowercaseLetters.size() - 1; iC++)
							{
								if(listLowercaseLetters.get(iC) == keyItem)
								{
									countCharacters++;
									break;
								}
							}
						}
					}
					listAscChars.clear();
					
					isValid = (countCharacters > 0);

					if (!isValid)
                    {
						return isValid;
                    }
				}
				
				if(ContainsAfter.getRepeatValueAfterAtMaximum() != null)
				{
					int countRepeat = -1;
					
					if(ContainsAfter.isIgnoreCase())
					{
						valueBase = tempWithout.toLowerCase();
						valueSearch = ContainsAfter.getValueAfter().toLowerCase();
					}
					else
					{
						valueBase = tempWithout;
						valueSearch = ContainsAfter.getValueAfter();
					}
					
					int firstIndex = valueBase.indexOf(valueSearch);
					if(firstIndex >= 0)
					{
						countRepeat = 1;
						if(countRepeat <= ContainsAfter.getRepeatValueAfterAtMaximum())
						{
							String currentTemp = valueBase.substring(firstIndex + valueSearch.length(), valueBase.length());
							
							while(firstIndex >= 0)
							{
								firstIndex = currentTemp.indexOf(ContainsAfter.getValueAfter());
								if(firstIndex < 0)
								{
									break;
								}
								
								countRepeat++;
								if(countRepeat > ContainsAfter.getRepeatValueAfterAtMaximum())
								{
									break;
								}
								
								currentTemp = currentTemp.substring(firstIndex + valueSearch.length(), currentTemp.length());
							}
						}
					}
					
					if(countRepeat == -1)
					{
						isValid = true;
					}
					else
					{
						isValid = (countRepeat <= ContainsAfter.getRepeatValueAfterAtMaximum());
					}
					
					if(!isValid)
					{
						return isValid;
					}
				}
			}
	    }
		
		if(!ContainsBefore.getValue() .isEmpty() && (!ContainsBefore.getValueBefore().isEmpty() || (ContainsBefore.getAmountCharacters() != null)))
		{
			int index;
			
			String valueBase;
			String valueSearch;
			
			String tempWithout = "";
			
			if(ContainsBefore.isIgnoreCase())
			{
				valueBase = value.toLowerCase();
				valueSearch = ContainsBefore.getValue().toLowerCase();
			}
			else
			{
				valueBase = value;
				valueSearch = ContainsBefore.getValue();
			}
			
			index = valueBase.indexOf(valueSearch);
			
			boolean hasValue = false;
			if(index >= 0)
			{
				tempWithout = valueBase.substring(0, index);
				
				if(!ContainsBefore.getValueBefore().isEmpty())
				{
					index = tempWithout.lastIndexOf(ContainsBefore.getValueBefore());
					hasValue = (index >= 0);
				}
				
				if(hasValue && ContainsBefore.getAmountCharacters() != null)
				{
					hasValue = (tempWithout.length() >= ContainsBefore.getAmountCharacters());
				}
			}
	
            isValid = (hasValue);

            if (!isValid)
            {
                return isValid;
            }
            else
            {
            	if (ContainsBefore.isBlockSpecialCharacters() && !ContainsBefore.getValue().isEmpty())
            	{
            		listAscChars.clear();
            		int lenghtBefore = tempWithout.length();
            		            		
					for(int iChar = 0; iChar < lenghtBefore; iChar++)
					{
						int valueList = tempWithout.charAt(iChar);
						listAscChars.add(valueList);
					}
					
					int countCharacters = 0;
					
					for(int iAsc = 0; iAsc < lenghtBefore; iAsc++)
					{
						int keyItem = (int)listAscChars.get(iAsc);
						for(int iC = 0; iC < vectorSpecialCharactersNumbers.size() - 1; iC++)
						{
							if(vectorSpecialCharactersNumbers.get(iC) == keyItem)
							{
								countCharacters++;
								break;
							}
						}
					}
					listAscChars.clear();
					
					isValid = (countCharacters <= 0);

                    if (!isValid)
                    {
                        return isValid;
                    }
            	}
            	
            	if(ContainsBefore.isCompellingLetters())
            	{
            		listAscChars.clear();
            		
            		int lenghtBefore = tempWithout.length();
                    for (int iChar = 0; iChar < lenghtBefore; iChar++)
                    {
                    	int valueList = tempWithout.charAt(iChar);
						listAscChars.add(valueList);
                    }
                    
                    int countCharacters = 0;
                	for(int iAsc = 0; iAsc < lenghtBefore; iAsc++)
					{
						int keyItem = (int)listAscChars.get(iAsc);
						boolean fisrtContain = false;
						for(int iC = 0; iC < listLowercaseLetters.size() - 1; iC++)
						{
							if(listLowercaseLetters.get(iC) == keyItem)
							{
								countCharacters++;
								fisrtContain = true;
								break;
							}
						}
						
						if(!fisrtContain)
						{
							for(int iC = 0; iC < listCapitalLetters.size() - 1; iC++)
							{
								if(listCapitalLetters.get(iC) == keyItem)
								{
									countCharacters++;
									break;
								}
							}
						}
					}
                	
                	listAscChars.clear();

                    isValid = (countCharacters > 0);
                    
                    if (!isValid)
                    {
                        return isValid;
                    }
            	}
            	
            	if(ContainsBefore.getRepeatValueBeforeAtMaximum() != null)
            	{
            		int countRepeat = -1;
            		       			
        			if(ContainsBefore.isIgnoreCase())
        			{
        				valueBase = value.toLowerCase();
        				valueSearch = ContainsBefore.getValueBefore().toLowerCase();
        			}
        			else
        			{
        				valueBase = value;
        				valueSearch = ContainsBefore.getValueBefore();
        			}
            		
            		int firstIndex = tempWithout.lastIndexOf(ContainsBefore.getValueBefore());
            		if(firstIndex >= 0)
            		{
            			countRepeat = 1;
            			if(countRepeat <= ContainsBefore.getRepeatValueBeforeAtMaximum())
            			{
            				String currentTemp = tempWithout.substring(0, index);
            				while(firstIndex >= 0)
            				{
            					firstIndex = currentTemp.lastIndexOf(ContainsBefore.getValueBefore());
            					if(firstIndex < 0)
            					{
            						break;
            					}
            					
            					countRepeat++;
            					if(countRepeat > ContainsBefore.getRepeatValueBeforeAtMaximum())
            					{
            						break;
            					}
            					
            					currentTemp = currentTemp.substring(0, firstIndex);
            				}
            			}
            		}
            		
            		if (countRepeat == -1)
                    {
            			isValid = true;
                    }
                    else
                    {
                    	isValid = (countRepeat <= ContainsBefore.getRepeatValueBeforeAtMaximum());
                    }

                    if (!isValid)
                    {
                    	return isValid;
                    }
            		
            	}
            }
		}
		
		
		return isValid;
	}
	
}
