String.prototype.toJadenCase = function () {
  
  var individ_words = this.split(" ");
  var final = "";
  
  for (word of individ_words) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    final += word + " ";
  }
  
  return final.slice(0,-1)
  
};