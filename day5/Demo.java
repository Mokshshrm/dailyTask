package day5;

import java.util.*;

public class Demo {
    public static void main(String[] args) {
        C tmp = new C();
        tmp.Fun();
        return;
    }
}

abstract class A {
    final int index = 100005;

    void Fun() {
        System.out.println("Abstract class non-abstract method");
    }
}

class C extends A {
    
}
