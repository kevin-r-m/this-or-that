// Function to set cookies
export function setCookie(cookieName, value, expireDays, votedFor) {
  if (typeof window !== "undefined") {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expireDays);
    document.cookie = `${cookieName}=["${votedFor}", "${getTodaysDate()}"]; expires=${expireDate.toUTCString()}; Secure`;
  }
}

// Returns the matched cookie & value based on the passed arg
export function getCookie(cookieName) {
  if (typeof window !== "undefined") {
    const match = document.cookie.match(
      new RegExp("(^| )" + cookieName + "=([^;]+)")
    );
    if (match) {
      const votedDate = JSON.parse(match[2])[1];
      // returns boolean value of whether the date matches today
      return checkCookieDate(votedDate);
    }
  }
}

// Returns the matched cookie & value based on the passed arg
export function getCookie_withValue(cookieName, value) {
  if (typeof window !== "undefined") {
    const match = document.cookie.match(
      new RegExp("(^| )" + cookieName + "=([^;]+)")
    );
    if (match) {
      let returnData;
      if (value === "votedFor") {
        returnData = JSON.parse(match[2])[0].toString();
      }
      return returnData;
    }
    return false;
  }
}

// Returns today's date as a string
export function getTodaysDate() {
  let today = new Date();
  today = handleDateFormat(today);

  return today;
}

 /* HELPER FUNCTIONS - NOT EXPORTED */
// Formats dates in mm/dd/yy format
function handleDateFormat(date) {
  const dd = String(date.getDate());
  const mm = String(date.getMonth() + 1);
  const yyyy = date.getFullYear();
  date = mm + dd + yyyy;

  return date;
}

// Checks if date (valueToCheck) matches today's date (string comparison)
function checkCookieDate(valueToCheck) {
  const today = getTodaysDate().toString();
  if (today === valueToCheck) {
    return true;
  }
  return false;
}
