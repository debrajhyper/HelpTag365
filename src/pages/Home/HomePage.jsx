import { Link } from "react-router-dom";
import { CONTACT_US_PATH } from "../../routes";

export function HomePage() {
    return (
        <div>Home
            <Link to={CONTACT_US_PATH}>Contact Us</Link>
        </div>
    )
}
