import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./competitorTransition.scss";

function CompetitorTransition({
  children,
  duration,
  state,
  className,
  competition,
  appear,
}) {
  const nodeRef = useRef(null);
  const transitionClasses = classNames({
    transition: true,
    competition: competition,
    appear: appear,
  });
  return (
    <CSSTransition
      in={!state}
      timeout={duration}
      classNames={className}
      nodeRef={nodeRef}
      unmountOnExit
      appear={appear}
    >
      <div className={transitionClasses} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}

export default CompetitorTransition;
