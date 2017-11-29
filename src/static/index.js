function goToSSH(form) {
  if (form.hostname.value == "") {
    alert("Please fill the hostname field!");
  } else {
    var username = "";
    if (form.username.value != "") {
      username = form.username.value + "@";
    }
    window.location.href = "/go.html?ssh=ssh://" +
                            username +
                            form.hostname.value +
                            ":" +
                            form.portnumber.value
  }
}
function copyURL(form) {
  if (form.hostname.value == "") {
    alert("Please fill the hostname field!");
  } else {
    var username = "";
    if (form.username.value != "") {
      username = form.username.value + "@";
    }
    var shortcut = "Ctrl+C"; 
    if (navigator.appVersion.indexOf("Mac") != -1) {
      shortcut = "⌘+C"
    }
    window.prompt("Copy to clipboard: " + shortcut + ", Enter",
                  window.location.protocol + 
                  '//' +
                  window.location.hostname + 
                  '/go.html?ssh=ssh://' +
                  username +
                  form.hostname.value +
                  ":" +
                  form.portnumber.value);
  }
}
