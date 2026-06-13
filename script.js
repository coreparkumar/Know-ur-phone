// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Google Form status helper
const formFrame = document.getElementById("google-form");
const status = document.getElementById("form-status");

function showStatus(msg, type) {
  status.textContent = msg;
  status.className = "form-status " + (type || "");
}

// Warn if the placeholder Google Form ID hasn't been replaced
if (formFrame && formFrame.src.includes("YOUR_FORM_ID")) {
  showStatus(
    "⚠️ Google Form not configured yet. Replace YOUR_FORM_ID in index.html to collect emails. See README.md for setup steps.",
    "error"
  );
}
