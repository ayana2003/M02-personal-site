
    
    //$("a").hover(
      //  function() {
        //($(this),"bigger");

        //$(this).css("font-size", "2x");
    //     $(this).addClass("bigger");
    // }, function() {
    //     $(this).removeClass("bigger");
//     }


//     );
// });


//AJAX REQUEST
let newInfoRequest = new XMLHttpRequest();
newInfoRequest.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    let GitObj = JSON.parse(this.responseText);
    document.getElementById("username").innerHTML = GitObj.login;
    document.getElementById("email").innerHTML = GitObj.email;

  }
};
newInfoRequest.open("GET", "new.json", true);
newInfoRequest.send();


//AJAX BUTTON REQUEST
$(document).ready(function() {
  $("#driver").click(function() {
    $("#githubInfo").load("new.json");
  });
});



//SOCIAL MEDIA ICONS 
$(document).ready(function() {
  $(".social-media").hover(function() {
    $(this).addClass("bigger");
    }, function() {
        $(this).removeClass("bigger");
    });
  });
  
//CONTACT ICONS (JQUERY)
  $(document).ready(function() {
    $(".contact-icon").hover(function() {
      $(this).addClass("bigger");
      }, function() {
          $(this).removeClass("bigger");
      });
    });

//BUTTON CLICK CHANGE PIC
$(document).ready(function() {
  $("#bitmoji").click(function() {
      $("#headshot").attr("src", "https://sdk.bitmoji.com/render/panel/20013376-100498112659_13-s5-v1.png?transparent=1&palette=1&scale=2");
  });
});


//FAILED AJAX BUTTON 
// function showGitHub() {
//   const xhttp = new XMLHttpRequest();
//   //letitHubInfoRequest = 
//   xhttp.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//       document.getElementById("githubInfo").innerHTML = this.responseText; //GitHubObj.type;

//     }
//     //let GitHubObj = JSON.parse(this.responseText);
//   }
// };
// xhttp.open("GET", "json.txt", true);
// xhttp.send();
