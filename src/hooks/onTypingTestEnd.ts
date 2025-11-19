import { typingTestStorage } from "src/stores/menuStore";

export const onTypingTestEnd = () => {
  typingTestStorage.getState().desactivateTypingTest()
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
  typingTestStorage.getState().changeWordAccuracy(correctWords/splitedWritedText.length*100)

  typingTestStorage.getState().changeWordPerSecond(correctWords/60)

  typingTestStorage.getState().changeWordPerMinute(typingTestStorage.getState().wordPerSecond*60)
  //1. Desactivate ✓
  //2. Take the words writen ✓
  //3. Calculate good writed words (word per second and word per minute)
  //4. 

};
