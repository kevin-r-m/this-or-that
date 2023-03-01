// Function to set cookies
export function setCookie(cookieName, value, expireDays) {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + expireDays);
  document.cookie = `${cookieName}=${encodeURIComponent(
    value
  )}; expires=${expireDate.toUTCString()}; Secure`;
}

// Returns the matched cookie & value based on the passed arg
export function getCookie(cookieName) {
  const match = document.cookie.match(
    new RegExp("(^| )" + cookieName + "=([^;]+)")
  );
  if (match) {
    return true;
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
