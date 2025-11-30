export const RateStars = () => {
    return(
        <div className="flex">
            <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.87 1.402-8.172L.132 9.21l8.2-1.192z"
                fill="#FFC107"/>
            </svg>
            <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.87 1.402-8.172L.132 9.21l8.2-1.192z"
                fill="#E0E0E0"/>
            </svg>
            <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <clipPath id="clip-half">
                    <rect x="0" y="0" width="50%" height="100%"/>
                    </clipPath>
                </defs>

                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.87 1.402-8.172L.132 9.21l8.2-1.192z"
                        fill="#E0E0E0"/>

                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.87 1.402-8.172L.132 9.21l8.2-1.192z"
                        fill="#FFC107" clip-path="url(#clip-half)"/>
                </svg>
        </div>
    )
}