import { Link } from "react-router-dom";
import { CONTACT_US_PATH } from "../../routes";

export const TrialButton = () => (
    <button className="w-full md:w-auto px-8 py-3 bg-primary-normal hover:bg-primary-normal-hover border border-primary-normal-hover text-white text-sm font-semibold rounded-xl shadow-main">
        <Link to={CONTACT_US_PATH}>
            Get a FREE trial
        </Link>
    </button>
)