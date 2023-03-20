import Metrics from "../(components)/Metrics";
import Competition from "../(components)/Competition";

async function page() {
  await delay(1000);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <>
      <Metrics />
      <Competition />
    </>
  );
}

export default page;
