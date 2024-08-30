package day6;

import java.util.*;

public class exceptionHandling {
    public static void main(String args[]) {
        List<Integer> arr = null;

        try {
            if (arr.size() > 5) {
                System.out.println("List is good");
            } else {
                System.out.println("List is short");
            }
        } catch (NullPointerException e) {
            System.out.println("NullPointerException");
        }

        return;
    }
}
