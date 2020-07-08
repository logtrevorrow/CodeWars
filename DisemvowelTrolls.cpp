# include <string>
using namespace std;

bool isVowel(char c) {
  if (int(c) >= 65 && int(c) <= 90) {c = char(int(c) + 32);} // if
  if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') { return true;} //if
  else {return false;} //else
} //isVowel

string disemvowel(string str) {
    for (unsigned long i = 0; i < str.length(); ++i) {
      if (isVowel(str[i])) { str.erase(i, 1);} // if
    } //for
  
  return str;
} //disemvowel