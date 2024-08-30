package day6;

import java.util.*;

public class sortGivienListOfchar {
    public static void main(String arr[]) {

        Scanner sc = new Scanner(System.in);

        List<Character> charList = new ArrayList<>();

        System.out.println("Enter Charachter as string : ");
        String input = sc.nextLine();

        for (int i = 0; i < input.length(); i++) {

            if (input.charAt(i) != ' ') {
                charList.add(input.charAt(i));
            }

        }
        ;

        // charList.sort((Character a, Character b) -> a.compareTo(b));
        charList.sort(new Comparator<Character>() {
            @Override
            public int compare(Character a, Character b) {
                return a.compareTo(b);
            }
        });
        System.out.println(charList.toString());

        sc.close();
        return;
    }
}
