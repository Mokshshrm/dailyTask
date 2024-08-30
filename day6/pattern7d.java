package day6;

import java.util.Scanner;

public class pattern7d {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int tmp = 0;
        int odd = 1;

        // upper part;

        while (tmp <= n) {

            for (int i = 0; i < n - tmp; i++)
                System.out.print(" ");

            for (int i = 0; i < odd; i++) {
                if ((i & 1) != 0) {
                    System.out.print(tmp);
                } else {
                    System.out.print(".");
                }
            }

            odd += 2;
            tmp++;
            System.out.println();
        }

        tmp -= 2;
        odd -= 4;

        // down part
        while (tmp >= 0) {

            for (int i = 0; i < n - tmp; i++)
                System.out.print(" ");

            for (int i = 0; i < odd; i++) {
                if ((i & 1) != 0) {
                    System.out.print(tmp);
                } else {
                    System.out.print(".");
                }
            }
            odd -= 2;
            tmp--;
            System.out.println();
        }
        sc.close();
    }
}
