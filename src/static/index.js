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
    window.prompt("Copy to clipboard: Ctrl+C, Enter",
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
