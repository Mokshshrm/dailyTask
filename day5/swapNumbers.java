package day5;

public class swapNumbers {
    public static void main(String[] args) {

        int a = 5;
        int b = 6;

        a ^= b;
        b ^= a;
        a ^= b;

        System.out.println(a);
        System.out.println(b);
    }
}
