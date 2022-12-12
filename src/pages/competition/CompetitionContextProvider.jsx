import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import handleModal from "../../methods/modal";

CompetitionContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

const CompetitionContext = React.createContext();

export function useCompetitionContext() {
  return useContext(CompetitionContext);
}

export function CompetitionContextProvider({ children }) {
  const [votedToday, setVotedToday] = useState(false);
  const [competitors, setCompetitors] = useState([]);
  const [selectedCompetitor, setSelectedCompetitor] = useState("");

  useEffect(() => {
    checkLocalStorage();
  }, []);

  //updates currentDate and localState states
  function checkLocalStorage() {
    const lastVoted = window.localStorage.getItem("lastCastDate");
    if (lastVoted) {
      const today = handleDateFormat(new Date());
      if (today === lastVoted) {
        setVotedToday(false);
      }
    }
    setVotedToday(true);
  }

  //puts the date into correct format
  function handleDateFormat(date) {
    const dd = String(date.getDate());
    const mm = String(date.getMonth() + 1);
    const yyyy = date.getFullYear();
    date = mm + dd + yyyy;

    return date;
  }

  //confirms if user has voted, processes vote if not
  function handleVote() {
    if (votedToday) {
      //will need to add handler for sending user failed state
      return;
    } else {
      handleModal();
      updateLastCastDate();
      setVotedFor();
    }
  }

  //updates localStorage of last date vote casted
  function updateLastCastDate() {
    const today = handleDateFormat(new Date());
    window.localStorage.setItem("lastCastDate", today);
  }

  //updates localStorage of last item voted for
  function setVotedFor() {
    window.localStorage.setItem("lastVotedFor", selectedCompetitor);
  }

  const contextValues = {};

  return (
    <CompetitionContext.Provider value={contextValues}>
      {children}
    </CompetitionContext.Provider>
  );
}
