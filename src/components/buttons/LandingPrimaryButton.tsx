import { Link } from "react-router"

export const LandingPrimaryButton = ({text, route} : LandingPrimaryButtonProps) => {
    return(
        <Link to={route}>
            <button className="landingPrimaryButton">{text}</button>
        </Link>
    )
}