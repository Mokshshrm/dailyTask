package day5;

import java.util.*;
// import java.

public class ListNumberAreOdd {

    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        List<Integer> arr = new ArrayList<>(n);

        for (int i = 0; i < n; i++) {
            arr.add(sc.nextInt());
        }
        
        for (int i : arr) {
            if (i % 2 == 0) {
                System.out.println("No");
                return;
            }
        }

        System.out.println("Yes");
        sc.close();
        return;
    }
};
