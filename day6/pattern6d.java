package day6;

import java.util.Scanner;

public class pattern6d {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int tmp = 1;

        while (tmp < n * 2) {

            for (int i = 1; i < (n * 2); i++) {

                if (i == 1 || i == (n * 2) - 1 || i == tmp || i == (n * 2 - tmp))
                    System.out.print("* ");
                else
                    System.out.print("  ");

            }
            System.out.println();
            tmp++;
        }

        sc.close();
        return;
    }
}
