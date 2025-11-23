import { Link } from "react-router"

export const LandingPrimaryButton = ({text, route, style} : LandingPrimaryButtonProps) => {
    return(
        <Link to={route}>
            <button className="landingPrimaryButton slideAnimation">{text}</button>
        </Link>
    )
}