package day6;

import java.util.*;
import java.util.Scanner;

public class findBiggestNumber {
    public static void main(String[] args) {

        List<Integer> arr = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        // System.out.println("Enter List Item (Type done to stop input)");

        for (int i = 0; i < n; i++) {
            arr.add(sc.nextInt());
        }

        // 10
        // 98 32 72 94 75 73 92 36 28 34

        int maxi = Integer.MIN_VALUE;

        for (int i : arr) {
            maxi = Math.max(i, maxi);
        }

        System.out.println(maxi);

        sc.close();

        return;
    }
}
