package day5;

public class MultipleInheritance {
    public static void main(String[] args) {

        child1 a = new child1();
        Parent b = new child2();

        a.Sound();
        a.name();
        b.Sound();

        return;
    }
}

interface Parent {
    void Sound();

    int age = 0;
}

interface Parent2 {
    void name();

    int age = 0;
}

class child1 implements Parent, Parent2 {

    @Override
    public void Sound() {
        System.out.println("first parent");
    }

    @Override
    public void name() {
        System.out.println("second parent");
    }
}

class child2 implements Parent {
    public void Sound() {
        System.out.println("Second child");
    }
}