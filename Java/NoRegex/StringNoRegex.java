package NoRegex;

public class StringNoRegex {
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
	
	public StringNoRegex()
	{
		Value = "";
		IgnoreCase = true;
	}
}
