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

  if(splitedWritedText.length > 1){
    typingTestStorage.getState().changeWordAccuracy(Math.floor(splitedWritedText.length*100/splitedTextToWrite.length))
  }else{
    typingTestStorage.getState().changeWordAccuracy(0)
  }
  
  if(splitedWritedText.length > 1){
    typingTestStorage.getState().changeWordPerSecond(correctWords/typingTestStorage.getState().typingTestTimer)
    typingTestStorage.getState().changeWordPerMinute(Math.floor(typingTestStorage.getState().wordPerSecond*60))
  }else{
    typingTestStorage.getState().changeWordPerMinute(0)
  }
 

  

};
