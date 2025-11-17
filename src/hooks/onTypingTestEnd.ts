import { typingTestStorage } from "src/stores/menuStore";

export const onTypingTestEnd = () => {
  typingTestStorage.getState().desactivateTypingTest()
  typingTestStorage.getState().restartTypingTestTimer()
  typingTestStorage.getState().desactivatedTimer()

  
  //1. Desactivate ✓
  //2. Take the words writen 
  //3. Calculate good writed words (word per second and word per minute)
  //4. 

};
