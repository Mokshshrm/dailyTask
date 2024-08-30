package day6;

import java.util.Scanner;

public class permutatin_combination {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        sc.close();
        return;
    }

    static long Comnination(long n, long r) {
        // n!
        // r!
        long res = 1;

        for (int i = 0; i < r; i++)
            res *= (n - i) / (i + 1);
        return res;
    }

    static long Permutation(long n) {

        int res = 1;

        while (n > 1) {
            res *= n;
            --n;
        }

        return res;
    }
}
