package day5;

import java.math.*;
import java.util.Scanner;

public class Reverse {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double n = sc.nextDouble();

        String[] pointer = String.valueOf(n).split("\\.");
        
        int sz = pointer[1].length();
        int number = Integer.parseInt(pointer[1] + (new StringBuilder(pointer[0]).reverse().toString()));
        n = (double) ((1.0) * number / (Math.pow(10, sz)));

        System.out.println(n);
        
        return;
    }

    // public static int reverseNumber(int n) {
    // int res = 0;
    // while (n > 0) {
    // res = res * 10 + n % 10;
    // n /= 10;
    // }
    // return res;
    // }
}
