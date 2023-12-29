import { MetricsContextProvider } from "./MetricsContextProvider";
import Container from "./Container";

function Metrics() {
  return (
    <MetricsContextProvider>
      <Container />
    </MetricsContextProvider>
  );
}

export default Metrics;
