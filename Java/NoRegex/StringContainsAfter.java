package NoRegex;

public class StringContainsAfter extends StringContains {
	private String ValueAfter;

	public String getValueAfter() {
		return ValueAfter;
	}

	public void setValueAfter(String valueAfter) {
		ValueAfter = valueAfter;
	} 
	
	private Integer RepeatValueAfterAtMaximum;

	public Integer getRepeatValueAfterAtMaximum() {
		return RepeatValueAfterAtMaximum;
	}

	public void setRepeatValueAfterAtMaximum(Integer repeatValueAfterAtMaximum) {
		RepeatValueAfterAtMaximum = repeatValueAfterAtMaximum;
	}
	
	public StringContainsAfter()
	{
		RepeatValueAfterAtMaximum = null;
		ValueAfter = "";
	}
}
