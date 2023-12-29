import CompetitionContent from "../components/Layout/CompetitionContent";

async function page() {
  await delay(1000);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return <CompetitionContent />
}

export default page;
