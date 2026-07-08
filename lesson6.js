let hasApiKey = true;
let hasCredits = false;

if (hasApiKey && hasCredits) {
  console.log("Request Sent");
} else {
  console.log("Request Failed");
}

let loginMethod = "Facebook";

if (loginMethod === "Google" || loginMethod === "GitHub") {
  console.log("Login Success");
} else {
  console.log("Login Failed");
}

let isPremium = true;
let hasCredits1 = false;
let isAdmin = true;

if ((isPremium && hasCredits1) || isAdmin) {
  console.log("AI Request Allowed");
} else {
  console.log("AI Request Blocked");
}
