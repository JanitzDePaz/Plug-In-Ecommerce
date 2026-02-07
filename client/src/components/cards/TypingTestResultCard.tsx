export const TypingTestResultCard = ({numberResult, typingTestResultType}: typingTestCards) => (
    <article className="w-1/4 aspect-square rounded-4xl bg-[rgba(0,0,0,0.6)] flex-center flex-col items-center text-white">
        <h3 className="text-3xl">{numberResult}</h3>
        <h4 className="text-2xl">{typingTestResultType}</h4>
    </article>
)