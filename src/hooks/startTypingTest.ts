import { typingTestTexts } from "src/constants/typingTexts";
import { typingTestStorage } from "src/stores/menuStore";
import { onTypingTestEnd } from "./onTypingTestEnd";

export const startTypingTest = (time: number) => {
  typingTestStorage.getState().activateTypingTest();
  typingTestStorage.getState().restartTypingTestTimer()
  typingTestStorage.getState().updateLastTextWrited("")
  typingTestStorage.getState().changeTextToWrite(typingTestTexts[Math.floor(Math.random() * 9 + 1)])
  typingTestStorage.getState().StartTest()
  

  const secondsInterval = setInterval(() => {
    
    const currentTimer = typingTestStorage.getState().typingTestTimer;
    const stopTest = typingTestStorage.getState().stopTest
    if (currentTimer >= time || stopTest) {
      clearInterval(secondsInterval);
      onTypingTestEnd()
      return;
    }
    typingTestStorage.getState().addSeconds();
  }, 500);
};
