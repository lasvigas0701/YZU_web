function IP() {
    let h = "<table><tr><td>目前ip位置</td><td>";
    $.ajax({
      url: "php/ipInfo.php",
      data: {
      },
      type: "GET",
      datatype: "html",
      success: function (output) {
        h += output;
        h += "</td></tr></table>";
        $("#IPinfo").html(h);
      },
      error: function () {
        alert("Request failed.");
      }
    });
  }
  
  function getFivePict() {
    let pictKind = [];
    let main = Math.floor(Math.random() * 3) + 1; // 取得哪一種為三個同種
    if (main == 1) {
      pictKind = [1, 1, 1, 2, 3];
    }
    else if (main == 2) {
      pictKind = [2, 2, 2, 1, 3];
    }
    else {
      pictKind = [3, 3, 3, 1, 2]
    }
  
    let baseURL = "pic/";
    let pictArray = [];
    pictKind.sort(function () { return (0.5 - Math.random()) });
  
  
    // 取得每個類別中要拿哪一張
    for (let i = 1; i < 6; i++) {
      pictArray[i] = i;
    }
    pictArray.sort(function () { return (0.5 - Math.random()) });
  
    let html = '<table><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>';
    for (let i = 0; i < 5; i++) {
      html += '<td><img src="' + baseURL + pictKind[i] + pictArray[i] + '.jpg" width="200" </td>';
    }
    html += '</tr></table>';
    $("#fivePicture").html(html);
  
  
    let chosehtml = '<form id="chosebox" >請勾選答案<br>';
    for (let i = 0; i < 5; i++) {
      let corr = 1;
      if (pictKind[i] == main) {
        corr = 0;
      }
      chosehtml += '<input type="checkbox" value ="' + corr + pictKind[i] + pictArray[i] + '" name="' + pictKind[i] + pictArray[i] + '">' + (i + 1) + '<br>';
    }
    chosehtml += ' <input type="button" onclick="vaildate()"> </form>';
    $("#choosenBox").html(chosehtml);
  }
  
  function vaildate() {
    let array = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  
    for (let i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value);
    }
  
    if (array.length == 2 && array[0] > 100 && array[1] > 100) {
      $("#result").html("<h1>OK</h1>");
    }
    else {
      $("#result").html("<h1>FAIL</h1>");
      addLog()
    }
    
  }
  
  function addLog() {
    $.ajax({
      url: "php/ipInfo.php",
      data: {
      },
      type: "GET",
      datatype: "html",
      success: function (ip) {
        $.ajax({
          url: "php/QueryLog.php",
          data: {
            IP: ip,
          },
          type: "POST",
          datatype: "html",
          success: function (t) {
            t += 1;
            $.ajax({
              url: "php/AddLog.php",
              data: {
                ip: ip,
                t: t,
              },
              type: "POST",
              datatype: "html",
              success: function (output) {
                console.log(">>> add", output);
              },
              error: function () {
              }
            });
          },
          error: function () {
            console.log(" query Request failed.");
          }
        });
      },
      error: function () {
        alert("Request failed.");
      }
    });
  
  }
  