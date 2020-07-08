export function validBraces(braces: string): boolean {
  
  var bracesArray = braces.split("");
  let stack: string[] = Array();
  
  for (var c of bracesArray) {
    if (c == '(' || c == '[' || c == '{') { stack.push(c);}
    else if (c == ')' && stack.length != 0 && stack[stack.length - 1] == '(') { stack.pop();}
    else if (c == ']' && stack.length != 0 && stack[stack.length - 1] == '[') { stack.pop();}
    else if (c == '}' && stack.length != 0 && stack[stack.length - 1] == '{') { stack.pop();}
    else { return false;}
  }
  
  if (stack.length == 0) {return true;}
  else { return false;}
  
}