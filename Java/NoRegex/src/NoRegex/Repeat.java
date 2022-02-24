package NoRegex;

public class Repeat {
	private Integer Amount;

	public Integer getAmount() {
		return Amount;
	}

	public void setAmount(Integer amount) {
		Amount = amount;
	}
	
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
	
	public Repeat()
	{
		Value = "";
		Amount = null;
		IgnoreCase = true;
	}
}
