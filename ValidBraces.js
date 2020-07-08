function validBraces(braces){
  
  if (braces.length == 0) {return true;}
  var stack = new Array();
  braces = Array.from(braces);

  for (const c of braces) {
    if (c == '(' || c == '[' || c == '{') { braces.push(c);}
    else if (c == ')' && braces.length != 0 && braces.slice(-1)[0] == '(') { braces.pop(); }
    else if (c == ']' && braces.length != 0 && braces.slice(-1)[0] == '[') { braces.pop(); }
    else if (c == '}' && braces.length != 0 && braces.slice(-1)[0] == '{') { braces.pop(); }
    else { return false;}
  }
  
  return true;
}