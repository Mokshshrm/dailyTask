package day5;

import java.util.Scanner;

public class whitespaceremove {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String res = "";

        // for (int i = 0; i < str.length(); i++) {
        // if (str.charAt(i) == ' ') {
        // str = str.substring(0, i) + str.substring(i + 1);
        // }
        // }
        // System.out.println(str);

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != ' ') {
                res += str.charAt(i);
            }
        }

        System.out.println(res);
        sc.close();
        return;
    }
}
