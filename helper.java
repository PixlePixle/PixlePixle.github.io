import java.util.Scanner;

public class helper {
    // Charset Builder
    // public static void main(String[] args) {
    //     Scanner input = new Scanner(System.in);
    //     String output = "[";
    //     String log;
    //     while((log = input.nextLine()) != "") {
    //         output += "\"" + log + "\", ";
    //     }
    //     System.out.println(output + "]");
    //     input.close();
    // }

    // Message Builder
    public static void main(String[] args) {
        int rows = 7;
        int columns = 18;
        Scanner input = new Scanner(System.in);
        String output = "";
        String log;
        System.out.print("  ");
        for (int i = 0; i < columns; i++) {
            System.out.print((i % 10));
        }
        System.out.println();
        for (int i = 0; i < output.length(); i += columns) {
            System.out.println(output.substring(i, i + columns + 1));
        }
        int counter = 0;
        while(counter < rows) {
            System.out.print(counter + " ");
            log = input.nextLine();
            log = String.format("%-18s", log);
            log = log.substring(0, columns);
            output += log;
            counter++;
        }
        System.out.println("---------------------");
        System.out.println(output + "EOF");
        input.close();
    }
}