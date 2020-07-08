public class JadenCase {

	public String toJadenCase(String phrase) {
    if (phrase.isEmpty() || phrase == null) { return null; }
    
		String[] individ_words = phrase.split(" ");
    String result = "";
    
    for (String word : individ_words) {
      result += Character.toUpperCase(word.charAt(0)) + word.substring(1) + " ";
    }
		return result.substring(0, result.length()-1);
	}

}