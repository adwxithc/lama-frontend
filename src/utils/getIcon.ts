export const getChars = (sentence:string) => {
    // Split the sentence into words
    const words = sentence.trim().split(/\s+/);
  
    // Handle the case where there is only one word
    if (words.length === 1) {
      return words[0].charAt(0);
    }
    
    // Handle the case where there are two or more words
    if (words.length >= 2) {
      const firstCharFirstWord = words[0].charAt(0);
      const firstCharSecondWord = words[1].charAt(0);
      return firstCharFirstWord + firstCharSecondWord;
    }
  
    return ''; // If there are no words, return an empty string
  };