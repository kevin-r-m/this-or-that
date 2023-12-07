import Metrics from "../(components)/Metrics";
import Competition from "../(components)/Competition";
import Yesterday from "../(components)/Yesterday";

async function page() {
  await delay(1000);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <>
      <Yesterday />
      <div className="container">
        <Metrics />
        <Competition />
      </div>
    </>
  );
}

export default page;
