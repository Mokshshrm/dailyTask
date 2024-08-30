package day6;

import java.util.Scanner;

public class pattern4d {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int tmp = 0;

        while (tmp < 2) {

            System.out.print("      ");

            for (int i = 0; i < n; i++)
                System.out.print("*");

            System.out.println();
            for (int j = 0; j < n; j++) {

                System.out.print("     ");

                System.out.print("*");

                for (int i = 0; i < n; i++)
                    System.out.print(" ");

                System.out.println("*");
            }
            tmp++;
        }

        System.out.print("      ");
        for (int i = 0; i < n; i++)
            System.out.print("*");
        sc.close();
    }
}