import NoRegex.NoRegex;

public class main {

	public static void main(String[] args) {
		NoRegex noRegex = new NoRegex();

		String valueTest = "PrePrearjkhsaPrekjdhPreatPreavalueBefore1234hj12341213*+/-11Hijkkl";
		
		noRegex.StarWith.setIgnoreCase(true);
		noRegex.StarWith.setValue("L");
		noRegex.EndsWith.setIgnoreCase(false);
		noRegex.EndsWith.setValue("741B");
		noRegex.Contains.setIgnoreCase(false);
		noRegex.Contains.setValue("Try");
		noRegex.setMinimumCharacters(12);
		noRegex.setMaximumCharacters(13);
		noRegex.DoesNotContain.setIgnoreCase(true);
		noRegex.DoesNotContain.setValue("Laa");
		noRegex.RepeatAtLeast.setAmount(3);
		noRegex.RepeatAtLeast.setIgnoreCase(false);
	    noRegex.RepeatAtLeast.setValue("LAA");
		noRegex.RepeatAtMaximum.setAmount(0);
		noRegex.RepeatAtMaximum.setIgnoreCase(false);
		noRegex.RepeatAtMaximum.setValue("Laa");
		noRegex.setMinimumSpecialCharacters(8);
		noRegex.setMaximumSpecialCharacters(4);
		noRegex.setCompellingCaps(false);
		noRegex.setCompellingLowercase(true);
		noRegex.setCompellingNumbers(true);
		noRegex.ContainsAfter.setValue("valueAFter");
		noRegex.ContainsAfter.setValueAfter("1234");
		noRegex.ContainsAfter.setIgnoreCase(false);
		noRegex.ContainsAfter.setBlockSpecialCharacters(true);
		noRegex.ContainsAfter.setCompellingLetters(true);
		noRegex.ContainsAfter.setRepeatValueAfterAtMaximum(5);
		noRegex.ContainsBefore.setValue("valueBefore");
		noRegex.ContainsBefore.setValueBefore("Pre");
		noRegex.ContainsBefore.setIgnoreCase(false);
		noRegex.ContainsBefore.setBlockSpecialCharacters(true);
		noRegex.ContainsBefore.setCompellingLetters(true);
		noRegex.ContainsBefore.setRepeatValueBeforeAtMaximum(2);
		
		boolean isValid = noRegex.Validate(valueTest);
		
		
		int edf = 1;
	}

}
