// Function to set cookies
export function setCookie(cookieName, value, expireDays, votedFor) {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + expireDays);
  document.cookie = `${cookieName}=[${value}, "${votedFor}", "${getTodaysDate()}"]; expires=${expireDate.toUTCString()}; Secure`;
}

// Returns the matched cookie & value based on the passed arg
export function getCookie(cookieName) {
  const match = document.cookie.match(
    new RegExp("(^| )" + cookieName + "=([^;]+)")
  );
  if (match) {
    const votedDate = JSON.parse(match[2].toString())[2];
    return checkCookieDate(votedDate);
  }
}

// Returns the matched cookie & value based on the passed arg
export function getCookie_withValue(cookieName, value) {
  const match = document.cookie.match(
    new RegExp("(^| )" + cookieName + "=([^;]+)")
  );
  if (match) {
    let returnData;
    if (value === "votedFor") {
      returnData = JSON.parse(match[2].toString())[1].toString();
    }
    return returnData;
  }
  return false;
}

// Returns today's date as a string
export function getTodaysDate() {
  let today = new Date();
  today = handleDateFormat(today);

  return today;
}

// Helper function for generating today's date
function handleDateFormat(date) {
  const dd = String(date.getDate());
  const mm = String(date.getMonth() + 1);
  const yyyy = date.getFullYear();
  date = mm + dd + yyyy;

  return date;
}

// Helper function for checking dates as string values, no special characters
function checkCookieDate(valueToCheck) {
  const today = getTodaysDate().toString();
  if (today === valueToCheck) {
    return true;
  }
  return false;
}
