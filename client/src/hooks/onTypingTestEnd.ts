import { typingTestStorage } from "src/stores/menuStore";

export const onTypingTestEnd = () => {
  typingTestStorage.getState().desactivateTypingTest();
  typingTestStorage.getState().desactivatedTimer();

  typingTestStorage.getState().lastTextWrited;
  typingTestStorage.getState().textToWrite;

  const splitedTextToWrite = typingTestStorage
    .getState()
    .textToWrite.split(" ");
  const splitedWritedText = typingTestStorage
    .getState()
    .lastTextWrited.split(" ");
  let correctWords = 0;
  for (let i = 0; i < splitedTextToWrite.length; i++) {
    if (splitedTextToWrite[i] == splitedWritedText[i]) {
      correctWords++;
    }
  }

  if (splitedWritedText.length > 1) {
    typingTestStorage
      .getState()
      .setWordAccuracy(
        Math.floor(
          (splitedWritedText.length * 100) / splitedTextToWrite.length,
        ),
      );
  } else {
    typingTestStorage.getState().setWordAccuracy(0);
  }

  if (splitedWritedText.length > 1) {
    typingTestStorage
      .getState()
      .setWordPerSecond(
        correctWords / typingTestStorage.getState().typingTestTimer,
      );
    typingTestStorage
      .getState()
      .setWordPerMinute(
        Math.floor(typingTestStorage.getState().wordPerSecond * 60),
      );
  } else {
    typingTestStorage.getState().setWordPerMinute(0);
  }
};
