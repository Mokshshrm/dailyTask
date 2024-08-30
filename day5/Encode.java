package day5;

import java.util.Base64;

public class Encode {
    public static void main(String[] args) {

        String message = new String("message");
        System.out.println(message);

        String encodedMessage = Base64.getEncoder().encodeToString(message.getBytes());
        System.out.println(encodedMessage);

        String decodedMessage = new String(Base64.getDecoder().decode(encodedMessage));
        System.out.println(decodedMessage);

        return;

    }
}
