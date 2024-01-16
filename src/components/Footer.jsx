import React from "react";
import WaMeLink from "./WaMeLink";

const Footer = () => {

    return (
        <div className="flex justify-between bg-slate-500 px-5 py-3 sticky bottom-0">
            <WaMeLink />
        </div>
    );
}

export default Footer;