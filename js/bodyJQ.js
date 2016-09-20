var minus= document.getElementsByClassName("labelminus");
var sum= document.getElementsByClassName("labelsnum");

$("#mainForm").find("input").on( "blur",function(){
  $.validator.addMethod("regCheck", function(value, element, regexpr) {
      return regexpr.test(value);
  }, "Invalid format");
    $("#mainForm").validate({
      //what library validate and how
      rules: {
        btcID: {
          required:true,
          max: 999999999,
          regCheck:/^000\d{6}$/
        },
        fName:  {
          required : true
        },
        lName: {
          required:true
        },
        address: {
          required:true
        },
        city:  {
          required:true
        },
        zip:  {
          required:true,
          regCheck: /(^\d{5}$)|(^\d{5}-\d{4}$)/
        },
        BTCEmail: {
          required:true,
          regCheck:/(^[A-Za-z0-9.]+@students.blackhawk.edu$)| (^[A-Za-z0-9.]+@blackhawk.edu$)/
        },
        PhoneNumber:{
          required:true,
          regCheck:/(^\d{3}\-\d{3}\-\d{4}$)|(^\(\d{3}\)\s\d{3}\-\d{4}$)|/
        },
        Time :{
          required:true
        }
    },
    //what messages is disaplay
  messages: {
    btcID: {
      required:"Please enter your BTC ID",
      maxlength: "ID entered dons't match the total length",
      regCheck: "Must have three 0s and 6 numbers after that"
    },
      fName:  "      Please enter a first name       ",
      lName:  "       Please enter a last name       ",
      address: "        Please enter a address        ",
      city:  "         Please enter a city          ",
      zip:  {
        required:"Please enter a Zip code",
        regCheck:"Enter a vaild Zip Code"
      },
      BTCEmail : {
        required:"Please enter a email",
        regCheck:"Your email enter must format correctly"
      },
      PhoneNumber:{
        required:"Please enter a Phone Number",
        regCheck: "Enter a vaild Phone Number"
      }
    },
    //places error
    errorPlacement: function(error, element) {
       if(element.attr("name") =="btcID")
       {
         //specif error placemnent
         $("#1").html(error);
       }
       if(element.attr("name") =="zip")
       {
         $("#2").html(error);
       }
       if(element.attr("name") =="BTCEmail")
       {
         $("#3").html(error);
       }
       if(element.attr("name") =="PhoneNumber")
       {
         $("#4").html(error);
       }
       if(element.attr("name") =="fName")
       {
         $("#5").html(error);
       }
       if(element.attr("name") =="lName")
       {
         $("#6").html(error);
       }
       if(element.attr("name") =="address")
       {
         $("#7").html(error);
       }
       if(element.attr("name") =="city")
       {
         $("#8").html(error);
       }
     },
     //changes text
     success : function () {
        $(".errorMy").html("Hahahahsaahahahahahahahahaha");
     },
     //all work
     submitHandler : function(form)
     {
       //ask user if they when to
       $("#check").dialog({
         show: {
           effect:"Slide",
           duration:100
         }, hide: {
           effect:"explode",
           duration:100
         }, modal: true,
         buttons: {
           "Confirm" : function()
           {
             $(".labelsnum").prop("disabled","disabled");
              $(".labelminus").prop("disabled","disabled");
for(var i=0;i<sum.length;i++)
{
  sum[i].value.trim();
}
for(var j=0;j<minus.length;j++)
{
  minus[j].value.trim();
}
           document.getElementById("mainForm").submit();
           },
           "Cancel" : function()
           {
             $("#Wrong").animate({
               opacity: "0.7",
               position: "relative",
               bottom:"-500px"
             },100).fadeOut(200, function() {
               //Stuff to do *after* the animation takes place
               $("#Wrong").hide();
               $("#Check").show().animate({
                 transform: "translateX(25em)",
                 transition:"all 0.25s ease"
               },50).fadeIn(200);
               flagSwitch=true;
             });
               flagSwitch=true;
             $(".labelsnum").css("background-color","#FFF2B3");
             $(".labelminus").css("background-color","#FFF2B3");
             $(".labelsnum").prop("disabled","");
              $(".labelminus").prop("disabled","");
              $(this).effect("explode").dialog( "close" );
           }
         }
       });
       $("#check").dialog("open");
     }
});

});

//move along focus
//same check has js veriosn but using rega exp
function newCheck(from)
{

    var el=document.getElementsByClassName("labelsnum");
    var el2=document.getElementsByClassName("labelminus");
    var cnt=0;
    var IDTest=/^000\d{6}$/ ;
    var zipTest1=/^\d{5}$/;
    var zipTest2=/^\d{5}-\d{4}$/;
    var phoneTest=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ ;
    var emailTest=/^[A-Za-z0-9.]+@students.blackhawk.edu$/;
    var emailTest2=/^[A-Za-z0-9.]+@blackhawk.edu$/;
for (var i = 0; i < el.length; i++)
{
var elText=el[i].value;
var elToken=el[i].id;

  if(elToken=="btcID")
  {
    if(IDTest.test(elText))
    {
      el[i].disabled=true;
      el[i].style.backgroundColor="#6F6E41";
      el[i+1].focus();
        $("#1").children("label").removeClass("error").addClass("errorMy");
  }
}
if(elToken=="zip")
{
  if((zipTest1.test( elText )) || (zipTest1.test( elText )))
  {
el[i].disabled=true;
  el[i].style.backgroundColor="#6F6E41";
    el[i+1].focus();
      $("#2").children("label").removeClass("error").addClass("errorMy");
}
}
if(elToken=="BTCEmail")
{
  if(emailTest.test( elText ) || (emailTest2.test( elText )))
{
  el[i].disabled=true;
    el[i].style.backgroundColor="#6F6E41";
  el[i+1].focus();
    $("#3").children("label").removeClass("error").addClass("errorMy");
}
}
if(elToken=="PhoneNumber")
{
  if(phoneTest.test( elText ))
  {
    el[i].disabled=true;
      el[i].style.backgroundColor="#6F6E41";
        $("#4").children("label").removeClass("error").addClass("errorMy");
}
}

}
}
//hand animete for check and x
function PassFailCheck()
{
  if(! $("#mainForm").valid())
  {
  if(flagSwitch === false)
  {
      $("#Check").animate({
        opacity: "0.7",
        bottom:"-500px"
      },50).fadeOut(100, function() {
        //Stuff to do *after* the animation takes place
        $("#Check").hide();
        $("#Wrong").show().animate({
          transform: "translateX(25em)",
          transition:"all 0.25s ease"
        },50).fadeIn(100);
        flagSwitch=true;
      });
}
    }
}
