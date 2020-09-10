package apuntes;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Apuntes {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.solve("abc"));
    }
}

class Solution {
    public static boolean solve(String s) {
        s = s.toLowerCase();
        Pattern regex = Pattern.compile("^[a-z]$");
        Matcher match = regex.matcher(s);

        if(match.matches()) {
            return true;
        }

        return false;
    }
}
