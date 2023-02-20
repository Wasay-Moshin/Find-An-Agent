import AgentForm from "@/src/components/FindAndAgent/AgentForm";
import AgentName from "@/src/components/FindAndAgent/AgentName";
import Directory from "@/src/components/FindAndAgent/Directory";
import React from "react";

function findanagent() {
  return (
    <>
      <AgentForm />
      <Directory />
      <AgentName />
    </>
  );
}

export default findanagent;
