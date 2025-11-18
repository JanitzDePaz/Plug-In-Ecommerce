import { typingTestStorage } from "src/stores/menuStore";

export const onTypingTestEnd = () => {
  typingTestStorage.getState().desactivateTypingTest()
  typingTestStorage.getState().restartTypingTestTimer()
  typingTestStorage.getState().desactivatedTimer()

  typingTestStorage.getState().lastTextWrited
  typingTestStorage.getState().textToWrite
  
  const splitedTextToWrite = typingTestStorage.getState().textToWrite.split(" ")
  const splitedWritedText = typingTestStorage.getState().lastTextWrited.split(" ")
  let correctWords = 0
  for(let i = 0; i< splitedTextToWrite.length; i++){
    if(splitedTextToWrite[i] == splitedWritedText[i]){
      correctWords++
    }
  }
  console.log(correctWords)
  //1. Desactivate ✓
  //2. Take the words writen ✓
  //3. Calculate good writed words (word per second and word per minute)
  //4. 

};
