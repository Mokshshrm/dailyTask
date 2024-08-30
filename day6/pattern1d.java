package day6;

import java.util.Scanner;

public class pattern1d {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {

            System.out.print("*");

            if (i != 0) {
                
                int j;
                for (j = 1; j < i && i != n - 1; j++) 
                    System.out.print(" ");

                j = 1;
                do {
                    System.out.print("*");
                    ++j;
                } while (j < n && i == n - 1);
            }
            System.out.println();
        }
        sc.close();
        return; 
    }
}