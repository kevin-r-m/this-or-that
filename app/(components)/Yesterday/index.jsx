"use client";

import { YesterdayContextProvider } from "./YesterdayContextProvider";
import Container from './Container';

function Yesterday() {
  return (
    <YesterdayContextProvider>
      <Container />
    </YesterdayContextProvider>
  );
}

export default Yesterday;
