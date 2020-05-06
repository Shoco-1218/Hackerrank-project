// Designer PDF viewer
function designerPdfViewer(h, word) {
  let words = word + '';
  let charArray = [];

  for (let i = 0; i < words.length; i++) {
      let number = words[i].charCodeAt(0) - 'a'.charCodeAt(0);
      charArray.push(h[number]);
  }

  let calc = (Math.max(...charArray)) * word.length;
  return calc; 
}