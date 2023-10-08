function sendDataToGoogleScript(data) {
   var scriptUrl = "https://script.google.com/macros/s/AKfycbx3Sgmg7jsOvSxT_vDGk77dxJr9Wmoi4NhjQN5CAgFPf-she4h8vJfWt5kDJEOu718o/exec";
   var xhr = new XMLHttpRequest();
   xhr.open("POST", scriptUrl, true);
   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.send("data=" + JSON.stringify(data));
}

function recordData() {
  // Здесь вы можете записывать нужные вам данные
  var data = {
    view: "1",
  };
  
 sendDataToGoogleScript(data);
}

setTimeout(recordData, 3 * 60 * 1000);
