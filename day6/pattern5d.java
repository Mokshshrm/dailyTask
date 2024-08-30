package day6;

import java.util.Scanner;

public class pattern5d {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int tmp = n;
        int odd = 1;

        while (tmp > 0) {

            for (int i = 0; i < tmp; i++)
                System.out.print(" ");

            System.out.print("*");

            if (tmp == 1)
                System.out.print(" ");

            if (tmp != n) {

                for (int i = 0; i < odd && tmp != 1; i++)
                    System.out.print(" ");

                int j = 1;
                
                do {
                    System.out.print("*");
                    if (tmp == 1)
                        System.out.print(" ");
                    j++;
                } while (tmp == 1 && j < n);

                odd += 2;
            }

            System.out.println();
            tmp--;
        }

        sc.close();
    }
}
