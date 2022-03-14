// The portfolio
$(document).ready(function(){
  $("#image1").hover(function(){
    $(".firstText").toggle();
    $("#image1").css("filter", "brightness(40%)");    
})
 $("#image2").hover(function(){
    $(".secondText").toggle();
    $("#image2").css("filter", "brightness(40%)");    
})
  $("#image3").hover(function(){
    $(".thirdText").toggle();
    $("#image3").css("filter", "brightness(40%)");    
})
  $("#image4").hover(function(){
    $(".fourthText").toggle();
    $("#image4").css("filter", "brightness(60%)");    
})
  $("#image5").hover(function(){
   $(".fifthText").toggle();
   $("#image5").css("filter", "brightness(60%)");    
})
  $("#image6").hover(function(){
    $(".sixthText").toggle();
    $("#image6").css("filter", "brightness(60%)");    
})
  $("#image7").hover(function(){
    $(".seventhText").toggle();
    $("#image7").css("filter", "brightness(60%)");    
})
  $("#image8").hover(function(){
    $(".eightText").toggle();
    $("#image8").css("filter", "brightness(60%)");    
})
});

// what we do
$(document).ready(function(){
    $("#design").onclick(function(){
      $("#img-design").show();
    }).click(function(){
      $("#img-design").hide();
    });
  })
  $(document).ready(function(){
    $("#img-design").click(function(){
      $("#img-design").hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").hide('1500');
      $("#img-design").show('1500');
    });
  });

  $(document).ready(function(){
    $("#img-development").click(function(){
      $("#img-development").hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").hide('1500');
      $("#img-development").show('1500');
    });
  });

  $(document).ready(function(){
    $("#img-product").click(function(){
      $("#img-product").hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").hide('1500');
      $("#img-product").show('1500');
    });
  });

  // form
 

  $('button#submit').click(function(){
    let userName=$('input#fname').val()
    
    
    if(userName===""){
        alert("please fill the required fields")
    }
    else {
        alert(`${userName}, we have received your message.Thank you for reaching out`)

    } 
   
});

$(document).ready(function(){
  $(":reset").css("background-color", "wheat", "font-size", "10px");
});

