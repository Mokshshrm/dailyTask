package day6;

import java.util.*;

public class checkNumberArmStrong {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int res = 0;
        int tmp = n;

        while (tmp > 0) {
            int digit = tmp % 10;
            // res += (digit * digit * digit);
            res += Math.pow(digit, 3);
            tmp /= 10;
        }
        System.out.println((res == n));

        sc.close();
    }
}
