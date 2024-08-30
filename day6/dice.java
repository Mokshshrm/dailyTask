package day6;

import java.util.*;

public class dice {
    
    static int[][] dp = new int[10000][10000];

    static {
        for (int[] it : dp)
            Arrays.fill(it, -1);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int outcome = sc.nextInt();

        // ArrayList<Integer> arr = new ArrayList<>();

        int tmp = f(n, outcome);

        System.out.println(tmp);

        sc.close();
        return;
    }

    static int f(int dice, int outcome) {

        if (dice == 0) {
            if (outcome == 0) {
                // for (int i : arr)
                // System.out.print(i);
                // System.out.println();
                return 1;
            }
            return 0;
        }
        if (dp[dice][outcome] != -1) {
            return dp[dice][outcome];
        }
        int res = 0;
        for (Integer i = 1; i <= 6; i++) {
            if (outcome >= i) {

                // arr.add(i);

                res += f(dice - 1, outcome - i);

                // arr.removeLast();
            }
        }
        return dp[dice][outcome] = res;
    }
}
