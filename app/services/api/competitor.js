async function handleAPIRequest(resource, options) {
    const res = await fetch(resource, options);

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json()

}

async function getCompetition() {
    "use server";

    const resource = `${process.env.API_URL}/api/competition`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.API_KEY
        },
        cache: "no-store",
    }

    const competitionData = await handleAPIRequest(resource, options);

    return competitionData;
}

export { getCompetition }