/**
 * String Utilities Program
 * Provides various string manipulation utilities
 */
public class StringUtils {
    
    /**
     * Reverse a string
     */
    public static String reverse(String str) {
        if (str == null) return null;
        return new StringBuilder(str).reverse().toString();
    }
    
    /**
     * Check if a string is a palindrome
     */
    public static boolean isPalindrome(String str) {
        if (str == null) return false;
        String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return cleaned.equals(reverse(cleaned));
    }
    
    /**
     * Count vowels in a string
     */
    public static int countVowels(String str) {
        if (str == null) return 0;
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
    
    /**
     * Capitalize first letter of each word
     */
    public static String capitalize(String str) {
        if (str == null || str.isEmpty()) return str;
        
        String[] words = str.split("\\s+");
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < words.length; i++) {
            if (words[i].length() > 0) {
                result.append(Character.toUpperCase(words[i].charAt(0)));
                if (words[i].length() > 1) {
                    result.append(words[i].substring(1).toLowerCase());
                }
            }
            if (i < words.length - 1) {
                result.append(" ");
            }
        }
        
        return result.toString();
    }
    
    /**
     * Main method to demonstrate utilities
     */
    public static void main(String[] args) {
        System.out.println("String Utilities Program");
        System.out.println("=".repeat(50));
        
        // Test strings
        String test1 = "hello world";
        String test2 = "A man a plan a canal Panama";
        String test3 = "racecar";
        
        // Reverse
        System.out.println("\nReverse Examples:");
        System.out.println("\"" + test1 + "\" reversed: \"" + reverse(test1) + "\"");
        System.out.println("\"" + test3 + "\" reversed: \"" + reverse(test3) + "\"");
        
        // Palindrome
        System.out.println("\nPalindrome Check:");
        System.out.println("\"" + test1 + "\" is palindrome: " + isPalindrome(test1));
        System.out.println("\"" + test2 + "\" is palindrome: " + isPalindrome(test2));
        System.out.println("\"" + test3 + "\" is palindrome: " + isPalindrome(test3));
        
        // Vowel count
        System.out.println("\nVowel Count:");
        System.out.println("\"" + test1 + "\" has " + countVowels(test1) + " vowels");
        System.out.println("\"" + test2 + "\" has " + countVowels(test2) + " vowels");
        
        // Capitalize
        System.out.println("\nCapitalize:");
        System.out.println("\"" + test1 + "\" capitalized: \"" + capitalize(test1) + "\"");
        System.out.println("\"hello from the OTHER side\" capitalized: \"" + 
                         capitalize("hello from the OTHER side") + "\"");
    }
}
