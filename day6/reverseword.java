package day6;

import java.util.*;

public class reverseword {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();

        System.out.println(str.length());

        String[] word = str.split("\\s+");
        
        for (int i = 0; i < word.length / 2; i++) {

            String tmp = word[i];
            word[i] = word[word.length - 1 - i];
            word[word.length - 1 - i] = tmp;
        }

        str = "";

        for (int i = 0; i < word.length; i++)
            str += word[i] + " ";

        str = str.trim();

        System.out.println(str + str.length());

        sc.close();
        return;
    }
}
