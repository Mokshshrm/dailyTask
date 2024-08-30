package day6;

import java.util.Scanner;

public class pattern2d {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int tmp = 1;

        while (tmp < n * 2) {

            if (tmp == n) {
                
                for (int i = 0; i < n * 2 - 1; i++) {
                    System.out.print("* ");
                }

            } 
            else if (tmp < n) {

                System.out.print("* ");

                for (int i = 0; i < n - 2; i++) {
                    System.out.print("  ");
                }

                System.out.print("* ");

                for (int i = 0; i < n - 1 && tmp == 1; i++) {
                    System.out.print("* ");
                }
                
            } else {

                for (int i = 0; i < n - 1; i++) {
                    System.out.print((tmp == n * 2 - 1) ? "* " : "  ");
                }

                System.out.print("* ");
                
                for (int i = 0; i < n - 2; i++) {
                    System.out.print("  ");
                }
                
                System.out.print("* ");
            }
            System.out.println();
            tmp++;
        }

        sc.close();
    }
}
