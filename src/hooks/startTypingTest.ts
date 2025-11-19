import { typingTestTexts } from "src/constants/typingTexts";
import { typingTestStorage } from "src/stores/menuStore";
import { onTypingTestEnd } from "./onTypingTestEnd";

export const startTypingTest = (time: number) => {
  typingTestStorage.getState().activateTypingTest();
  typingTestStorage.getState().restartTypingTestTimer()
  typingTestStorage.getState().updateLastTextWrited("")
  typingTestStorage.getState().changeTextToWrite(typingTestTexts[Math.floor(Math.random() * 9 + 1)])
  
  const secondsInterval = setInterval(() => {
    const currentTimer = typingTestStorage.getState().typingTestTimer;
    if (currentTimer >= time) {
      clearInterval(secondsInterval);
      onTypingTestEnd()
      return;
    }
    typingTestStorage.getState().addSeconds();
  }, 500);
};
