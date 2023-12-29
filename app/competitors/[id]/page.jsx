import CompetitorBody from "@/app/components/CompetitorBody";
import React from "react";

function page({ params }) {
  const id = params.id;

  return (
    <>
      <CompetitorBody id={id} />
    </>
  );
}

export default page;
