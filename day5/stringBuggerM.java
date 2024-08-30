package day5;

public class stringBuggerM {
    public static void main(String args[]) {

        StringBuffer str = new StringBuffer("moksh");

        // str.append("null");
        // System.out.println(str);

        // String tmp = str.toString();
        // System.out.println(tmp);

        // str.delete(1, 6);
        // System.out.println(str);


        // str.insert(1, "sharma");
        // System.out.println(str);

        // str.replace(str.length(), str.length(), "new string");
        // System.out.println(str);

        // str.reverse();
        // System.out.println(str);



        // clearing string buffer
        
        // str.replace(0, str.length(), "");
        // str.delete(0, str.length());
        // str.setLength(0);
        System.out.println(str.getClass());
        System.out.println(str);
        


        return;
    }

}
