package NoRegex;

public class StringContainsBefore extends StringContains {
	private String ValueBefore;

	public String getValueBefore() {
		return ValueBefore;
	}

	public void setValueBefore(String valueBefore) {
		ValueBefore = valueBefore;
	}
	
	private Integer RepeatValueBeforeAtMaximum;

	public Integer getRepeatValueBeforeAtMaximum() {
		return RepeatValueBeforeAtMaximum;
	}

	public void setRepeatValueBeforeAtMaximum(Integer repeatValueBeforeAtMaximum) 
	{	
		if (repeatValueBeforeAtMaximum < 0)
        {
			repeatValueBeforeAtMaximum = repeatValueBeforeAtMaximum * (-1);
        }

		RepeatValueBeforeAtMaximum = repeatValueBeforeAtMaximum;
	}
	
	public StringContainsBefore() 
	{
		RepeatValueBeforeAtMaximum = null;
		ValueBefore = "";
	}
}
