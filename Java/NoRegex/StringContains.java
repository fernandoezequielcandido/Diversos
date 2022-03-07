package NoRegex;

public class StringContains {
	private String Value;

	public String getValue() {
		return Value;
	}

	public void setValue(String value) {
		Value = value;
	}
	
	private boolean IgnoreCase;
	
	public boolean isIgnoreCase() {
		return IgnoreCase;
	}

	public void setIgnoreCase(boolean ignoreCase) {
		IgnoreCase = ignoreCase;
	}

	private boolean BlockSpecialCharacters;

	public boolean isBlockSpecialCharacters() {
		return BlockSpecialCharacters;
	}

	public void setBlockSpecialCharacters(boolean blockSpecialCharacters) {
		BlockSpecialCharacters = blockSpecialCharacters;
	}
	
	private boolean CompellingLetters;

	public boolean isCompellingLetters() {
		return CompellingLetters;
	}

	public void setCompellingLetters(boolean compellingLetters) {
		CompellingLetters = compellingLetters;
	}
	
	private Integer AmountCharacters;
	
	public Integer getAmountCharacters() {
		return AmountCharacters;
	}

	public void setAmountCharacters(Integer amountCharacters) {
		AmountCharacters = amountCharacters;
	}
	
	public StringContains()
	{
		Value = "";
		IgnoreCase = true;
		BlockSpecialCharacters = false;
		CompellingLetters = false;
		AmountCharacters = null;
	}
}
