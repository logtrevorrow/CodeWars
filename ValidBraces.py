from collections import deque

def validBraces(string):
    stack = deque()
    
    for c in string:
        if c == '(' or c=='[' or c =='{':
            stack.append(c)
        elif c == ')' and stack and stack[-1] == '(':
            stack.pop()
        elif c == ']' and stack and stack[-1] == '[':
            stack.pop()
        elif c == '}' and stack and stack[-1] == '{':
            stack.pop()
        else:
            return False
    if stack: return False
    else: return True