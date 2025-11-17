import { typingTestTexts } from "src/constants/typingTexts";
import { typingTestStorage } from "src/stores/menuStore";
import { onTypingTestEnd } from "./onTypingTestEnd";

export const startTypingTest = (time: number) => {
  typingTestStorage.getState().changeTextToWrite(typingTestTexts[Math.floor(Math.random() * 10 + 1)])
  typingTestStorage.getState().activateTypingTest();
  

  const secondsInterval = setInterval(() => {
    const currentTimer = typingTestStorage.getState().typingTestTimer;
    if (currentTimer >= time) {
      clearInterval(secondsInterval);
      return;
    }
    typingTestStorage.getState().addSeconds();
  }, 1000);

  //1. TextToWrite ✓
  //2. activate ✓
  //3. Start timer ✓
  //4. Take words writen X
  //5. When finished, call another function X
};
