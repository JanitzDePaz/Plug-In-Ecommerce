export const TypingTestResultCard = ({numberResult, typingTestResultType}: typingTestCards) => (
    <article className="w-3/4 aspect-square rounded-xl bg-white border-2 border-black flex-center flex-col items-center">
        <h3 className="text-3xl text-black">{numberResult}</h3>
        <h4 className="text-2xl text-black">{typingTestResultType}</h4>
    </article>
)