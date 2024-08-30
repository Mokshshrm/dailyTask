package day6;

import java.util.Scanner;

public class pattern3d {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int tmp = n;
        while (tmp > 0) {

            for (int i = 0; i < tmp - 1; i++) {
                System.out.print("  ");
            }
            System.out.print("* ");
            for (int i = 0; i < n - 2; i++) {
                System.out.print((tmp == n || tmp == 1) ? "* " : "  ");
            }
            System.out.println("* ");
            tmp--;
        }

        sc.close();
        return;
    }
}
