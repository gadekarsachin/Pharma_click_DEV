/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package pharmaclick.app;

import pharmaclick.list.LinkedList;

import static pharmaclick.utilities.StringUtils.join;
import static pharmaclick.utilities.StringUtils.split;
import static pharmaclick.app.MessageUtils.getMessage;

import org.apache.commons.text.WordUtils;

public class App {
    public static void main(String[] args) {
        LinkedList tokens;
        tokens = split(getMessage());
        String result = join(tokens);
        System.out.println(WordUtils.capitalize(result));
    }
}
