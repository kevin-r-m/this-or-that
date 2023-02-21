import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./competitorTransition.scss";

function CompetitorTransition({ children, duration, state, className }) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={!state}
      timeout={duration}
      classNames={className}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div className="competitorTransition" ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}

export default CompetitorTransition;
