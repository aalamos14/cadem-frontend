import React from "react";
import WaMeLink from "./WaMeLink";
import EmailLink from "./EmailLink";

const Footer = () => {

    return (
        <div className="flex justify-between bg-slate-500 px-5 py-3 sticky bottom-0 text-white">
            <div>
                <WaMeLink />
            </div>
            <div>
                <EmailLink />
            </div>
        </div>
    );
}

export default Footer;