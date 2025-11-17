import { typingTestStorage } from "src/stores/menuStore";

export const timer = (time: number) => {
  typingTestStorage.getState().restartTypingTestTimer()
  
  const secondsInterval = setInterval(() => {
    
    const currentTimer = typingTestStorage.getState().typingTestTimer
    if(currentTimer >= time){
      clearInterval(secondsInterval)
      return
    }
    typingTestStorage.getState().addSeconds()
  }, 1000);
};
