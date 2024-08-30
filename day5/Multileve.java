package day5;

import java.util.Scanner;

public class Multileve extends B {
    @Override
    void Sound() {
        System.out.println("Level 3");
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        A a = new A();
        A b = new B();

        Multileve c = new Multileve();

        a.Sound();
        b.Sound();
        c.Sound();

        sc.close();
        return;
    }
}

class A {
    void Sound() {
        System.out.println("Level 1");
    }
}

class B extends A {
    
}
