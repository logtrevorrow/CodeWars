#include <stack>
using namespace std;

bool valid_braces(string braces) 
{
  if (braces.length() == 0) {return true;}
  stack<char> allBraces;
  for (char c : braces) {
    if (c == '(' || c == '[' || c == '{') { 
      allBraces.push(c);
    } // if
    else if (c == ')' && !allBraces.empty() && allBraces.top() == '(') { 
      allBraces.pop();
    } // else if
    else if (c == ']' && !allBraces.empty() && allBraces.top() == '[') { 
      allBraces.pop();
    } // else if
    else if (c == '}' && !allBraces.empty() && allBraces.top() == '{') { 
      allBraces.pop();
    } // else if
    else { return false;} // else
  } // for
  return true;
} // valid_braces