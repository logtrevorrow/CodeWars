import java.util.*;

public class BraceChecker {

  public boolean isValid(String braces) {
    Stack stack = new Stack();
    char[] bracesArray = braces.toCharArray();
    for (char c : bracesArray) {
      switch(c) {
          case '(':
          case '[':
          case '{':
            stack.push(c);
            break;
          case ')':
            if (!stack.empty() && stack.peek().equals('(')) { stack.pop();}
            else {return false;}
            break;
          case ']':
            if (!stack.empty() && stack.peek().equals('[')) { stack.pop();}
            else {return false;}
            break;
          case '}':
            if (!stack.empty() && stack.peek().equals('{')) { stack.pop();}
            else {return false;}
            break;
      }
    }
    if (stack.empty()) {return true; }
    else {return false; }
  }