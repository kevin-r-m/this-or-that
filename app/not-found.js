"use client"

import { InternalLink } from "./components/Atoms";

function error() {
    return (
        <div className="container error">
            <h1>Oh yikes,</h1>
            <h2>we didn't find anything here.</h2>
            <InternalLink href={"/competition"} value={"Go back home"} arrowLeft />
        </div>
    );
}

export default error;