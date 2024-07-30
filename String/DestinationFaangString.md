# String Data Strucutres 
- We are going to solve 15 DSA Problems in String

## 1. Longest Common Prefix
  
  ### Description
  - Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix,return an empty string "".
  - Input: strs = ["flower","flow","flight"] 
```java
    public String longestCommonPrefix(String[] strs) {
        // 1. Strings is null or empty return ""[empty string]
        if (strs == null || strs.length == 0) {
            return "";
        }

        // 2. Assume the first string is the prefix. i.e prefix = strs[0]
        String prefix = strs[0];

        // 3 .Loop through the array and compare each string with the prefix
        for (int i = 1; i < strs.length; i++) {
            // 4. Make sure that the prefix is a substring of the current string.
            // [Tamil] Prefix voda word current string la irukanu check pananum.Mathi kodututa wont work.
            while (strs[i].indexOf(prefix) != 0) {
                //Remove the last character from the prefix
                prefix = prefix.substring(0, prefix.length() - 1);

                //if prefix is empty, return empty string
                if (prefix.isEmpty()) {
                    return "";
                }
            }
        }
        return prefix;
        
    }
```

