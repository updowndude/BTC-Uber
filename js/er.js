  var flagSwitch=false;
$(document).ready(function(){
  //everthing used
var divHolder=document.getElementsByTagName("div");
var  tdHolder=document.getElementsByTagName("td");
var  trHolder=document.getElementsByTagName("tr");
var col1JQ=document.getElementsByClassName("col1");
var col2JQ=document.getElementsByClassName("col2");
var col3JQ=document.getElementsByClassName("col3");
var col4JQ=document.getElementsByClassName("col4");
var cnt=1;
var rowCnt=1;
var flowCnt=1;
var arrowChange=0;
var newOld=0;
var tdTrTotal=tdHolder.length/trHolder.length;
var flag=false;
var tFlag=false;
var holder;
var inputsFirst=document.getElementsByTagName("input");
var arrowsCopy=document.getElementsByClassName("myLBImg");
var myThis;
var mySrc;
var tagetFilter;
var timeDiv=document.getElementsByClassName("TableH");
var placerInput;
var tmpID;
var emailsOptions=["students.blackhawk.edu","blackhawk.edu"];
var emailText="";
var beforeAt;
var firstPartText="";
var btcEmailID= document.getElementById("BTCEmail");
var $acc=$("#faqContent");

if(document.getElementsByTagName("h2")[0].innerHTML.indexOf("Css") < 0)
{
$( document ).tooltip();
}

jQuery.data($acc,"adder",{
  btc:"From BTC",
  uber :"From Uber"
});

$(".addBtc").text(jQuery.data($acc,"adder").uber);
$(".addBtc").text(jQuery.data($acc,"adder").btc);
//config autocomplete for input
$("#BTCEmail").autocomplete({
  source: function (request, response)
  {
    //thanks to http://stackoverflow.com/questions/13552118/javascript-autocomplete-emails-domain-using-jquery-ui
    var mail = extractLast(request.term);
                          if(mail.length<1){return;}
                          var matcher = new RegExp( "^" + mail, "i" );
                          emailText= btcEmailID.value;
                          response( $.grep( emailsOptions, function( item ){
                              return matcher.test( item );
                          }));
  },focus:function() {
    return false;
  }, open: function(event,ui)
  {
    beforeAt=emailText.indexOf("@");
    firstPartText=emailText.substring(0,beforeAt);
  }, select : function (event, ui)
  {
  btcEmailID.value=firstPartText+"@"+ui.item.value;
  return false;
  }
});

$("#rad").find('span.ui-button-text').addClass('radioPad');
$("#jqQuality li:first").addClass("ui-selected");

$("#jqQuality").selectable().css("outline","0");
//set up jquery ui widgets
$("#rad").buttonset();
$("#lblShower").draggable({
  containment: "parent"
});
$("#check").dialog({
  autoOpen:false,
  modal: true
});
$("#restDialog").dialog({
  autoOpen:false,
  modal: true
});

$("#faqContent").accordion({
  collapsible:true,
  active:false,
  heightStyle: "content"
});

if ($("#aboutPre").html() !== undefined)
{
$("a").click(function(){
  //reload about page once
  if($(this).parent().is("nav") )
  {
    $.cookie("lastTime", "value");
  }
});

  if ($.cookie("lastTime")  == "value")
  {
      $.cookie("lastTime", "wrong");
      location.reload();
  }
  $("#btnAbout").position({
    my: "center",
    at: "bottom+50",
    of: "#ghostLb"
  });
}
else {

    $("#AboutNav") .on("click",function(){
       $.cookie("lastTime", "value");
    });
}



$("#myDialog").dialog({
  autoOpen:false,
  width: 765,
  show: {
    effect:"Slide",
    duration:100
  },
  hide: {
    effect:"explode",
    duration:100
  }
});

$( ":tabbable" ).filter("input,select").not("#sumbit").css("background-color"," #FFF2B3");

$("#jqTime").datepicker({
  showAnime: "Slide",
  dateFormat:"yy-mm-dd"
});

$("#btnAbout").click(function(){
  $("#myDialog").dialog("open");
});
$("button").button();

$("#myResetTwo,#myReset").button({
  icons: {
    primary:"ui-icon-trash"
  }
}).click(function()
{
$("#"+$(this).attr("id")).css("outline", "0");
}) ;

$("#sumbit,#sumbitTwo").button({
  icons: {
    primary:"ui-icon-document-b"
  }
}).click(function()
{
$("#"+$(this).attr("id")).css("outline", "0");
}) ;

$("#oldV").click(function(){
  $("video").attr("src","video/BTCUber.mp4");
}) ;
$("#newV").click(function(){
  $("video").attr("src","video/newVideoFinalr.mp4");
});
//nav hover animate
 $("a").not(":has(img )").mouseover(function()
{
  $("#BtcNavPic").animate({
    opacity: "0.7",
      left:"50px"
  }, 100);
  $("#UbNavPic").animate({
    opacity: "0.7",
      right:"50px"
  }, 100);
}).mouseleave(function()
{
  $("#BtcNavPic").animate({
    opacity: "1",
      left:"0px"
  }, 100);
 $("#UbNavPic").animate({
   opacity: "1",
      right:"0px"
  }, 100);
});

//focus first input
if(inputsFirst.length !== 0)
{
  inputsFirst[0].focus();
}
$("#TCampus").blur();

//give id to div
for (var i = 0; i < divHolder.length; i++) {
  if((divHolder[i].className == "errorMy") && (divHolder[i].id != "skipMe"))
  {
    divHolder[i].setAttribute("id",cnt);
    cnt++;
  }
  if(divHolder[i].className=="OnlyJS")
  {
    flag=true;
  }
}
//give same class to columns in table
for (var j = 0; j< tdHolder.length; j++) {
if(rowCnt >tdTrTotal+1)
{
  rowCnt=1;
}

  if(j >= 3)
  {
    if(rowCnt <tdTrTotal+1)
    {
      tdHolder[j].setAttribute("class","col"+rowCnt);
      rowCnt++;
    }
  }
}
//give id to tr in table
for (var z = 0; z< trHolder.length; z++) {
if(z !== 0)
{
  trHolder[z].setAttribute("id",z);
  rowCnt++;
}
}


//reset forum
if (flag === true) {
  $(".errorMy").height("24px");
  $(".labelsnum").attr("oninput","return checkJS(this);");
}
$("#sumbit").attr("name","sumbit");
$("#states").attr("name","states");

$("#myReset").click(function () {
  if(confirm("Are you sure"))
  {
    $("#mainForm").get(0).reset();
  }
});

$("#myResetTwo").click(function(){
  $("#restDialog").dialog({
    show: {
      effect:"Slide",
      duration:100
    }, hide: {
      effect:"explode",
      duration:100
    }, modal: true,
     buttons : {
      "Confirm" : function() {
        $("#mainForm").get(0).reset();
        $(this).effect("explode").dialog( "close" );
      },
      "Cancel" : function()
      {
        $(this).effect("explode").dialog( "close" );
      }
    }
});
  $("#restDialog").dialog("open");
});
//clickable images

$(".imgG , #car , .myLBImg, .arrows, .Tarrows, .NavPic").css( 'cursor', 'pointer' );

$("#BtcNavPic").click(function(){
   window.open("http://www.blackhawk.edu/");
});

$("#UbNavPic").click(function(){
   window.open("https://get.uber.com/cl/?city_name=madison&utm_source=AdWords_Brand&utm_campaign=search-google-brand_1_219_us-madison_d_txt_acq_cpc_en-us_uber_kwd-169801042_89372823400_22880782120_e_c_track-jan21generalupdate_restructure&utm_medium=kenid_7465f74e-8380-4ca0-94cd-22f4ad67b3b8&cid=271812160&adg_id=22880782120&fi_id=&match=e&net=g&dev=c&dev_m=&cre=89372823400&kwid=kwd-169801042&kw=uber&placement=&tar=&gclid=CPTTzcKP7soCFZKCaQodQugLQA");
});

$(".imgG").draggable({
  revert:true,
  stack: ".imgG",
  zIndex: 999999
});
$("#imageFull").droppable({
  drop: function(event, ui)
  {
    ui.draggable.draggable('option','revert',true).css("transform","translateY(5em)");
      $("#Nothing").attr("src",function()
  {
      return  ui.draggable.attr("src");
  });
  }
});


$(".imgG").click( function() {
  holder=$(this);
  $("#Nothing").hide(300);
  $("#Nothing").show(100);
  $("#Nothing").attr("src",function()
{
  return holder.attr("src");
});
});

//lightbox
$("#lblPrev").mouseover(function(){
  $(this).animate({
      right:"15px"
  }, 100);
}).mouseleave(function(){
  $(this).animate({
      right:"0px"
  }, 100);
});

$("#lblNext").mouseover(function(){
  $(this).animate({
      left:"15px"
  }, 100);
}).mouseleave(function(){
  $(this).animate({
      left:"0px"
  }, 100);
});

$(".arrows").click(function(){
myThis= $(this).attr("id");
mySrc= $("#lbBlank").attr("src");

//image cycle through
for (var i = 0; i < arrowsCopy.length; i++) {
  if (myThis == "lblPrev")
  {
    if(mySrc == arrowsCopy[i].getAttribute("src"))
    {
      if (i===0)
      {
          $("#lbBlank").attr("src",arrowsCopy[arrowsCopy.length-1].getAttribute("src"));
      }
      else {
          $("#lbBlank").attr("src",arrowsCopy[i-1].getAttribute("src"));
      }
    }
  }
  else {
    if(mySrc == arrowsCopy[i].getAttribute("src"))
    {
      if (i===arrowsCopy.length-1)
      {
          $("#lbBlank").attr("src",arrowsCopy[0].getAttribute("src"));
      }
      else {
          $("#lbBlank").attr("src",arrowsCopy[i+1].getAttribute("src"));
      }
    }
  }
}
});

$("#car,  .myLBImg").click(function(){
  holder=$(this);
$("#lbBackground").css("display","block");
  $("#lbBlank").attr("src",function()
{
  return holder.attr("src");
});
});

$("#lblShower").css("cursor","move");

$("#lbBackground").click(function(event){
  if((event.target.id == "lblNext") || (event.target.id == "lblPrev") || (event.target.id == "lbBlank") || (event.target.id == "lblShower"))
  {
  $("#lbBackground").css("display","block");
}
else {
  $("#lbBackground").css("display","none").effect("clip");
}
});
$("#lblX").click(function(){

  $("#lbBackground").css("display","none");
});

//all for table
$(".Tarrows").filter(function(){
  return $(this).css("visibility").visible;
});
$(".TableH").click(function(event){
if(event.target.nodeName != "INPUT")
{

  $(this).children(".Tarrows").css("visibility","visible");

  if($(".Tarrows").filter(function(){
    return $(this).css("visibility") == "visible";
  }).length > 1)
  {
  $(".Tarrows").css("visibility","hidden");
  $(this).children(".Tarrows").css("visibility","visible");
  newOld=0;
  myreset();
  }


if($(this).attr("id")=="Campus" )
{
  flowCnt=1;
}
if($(this).attr("id")=="Time" )
{
  flowCnt=2;
}
if($(this).attr("id")=="Riders" )
{
  flowCnt=3;
}
if($(this).attr("id")=="Price" )
{
  flowCnt=4;
}
//sort is aces or desc
    if( newOld===0)
    {
      myreset();
      sorter(0,"col"+flowCnt);
      $(this).children(".Tarrows").css("transform","rotate(0deg)");
      newOld++;
    } else  if(newOld==1) {
      myreset();
      sorter(1,"col"+flowCnt);
      $(this).children(".Tarrows").css("transform","rotate(180deg)");
      newOld=0;
    }
}

});
$("#Clear").click(function(){
  $("td").css("visibility","visible");
  $(".Tarrows").css("visibility","hidden");
  newOld=0;
  myreset();
});

$(".Tinput").blur(function(){
  tagetFilter=$(this);
  if(tagetFilter.attr("id")=="TCampus")
  {
    placerInput=col1JQ;
  }
  if(tagetFilter.attr("id")=="TPrice")
  {
    placerInput=col4JQ;
  }
  if(tagetFilter.attr("id")=="TTime")
  {
    placerInput=col2JQ;
  }
  if(tagetFilter.attr("id")=="TRiders")
  {
    placerInput=col3JQ;
  }
if(tagetFilter.val().length !== 0)
{
  for (var lcv = 0; lcv < trHolder.length -1; lcv++) {
    if(tagetFilter.val() != placerInput[lcv].innerHTML)
    {
      placerInput[lcv].style.visibility = "hidden";
    }
    else {
      placerInput[lcv].style.visibility = "visible";
    }
  }
}
else {
  for (var lcv2 = 0; lcv2 < trHolder.length -1; lcv2++) {
  placerInput[lcv2].style.visibility = "visible";
}
}
  tagetFilter.val("");
});

});

function myreset()
{
  var trRowCnt=1;
  var  trHolder2=document.getElementsByTagName("tr");
  for (var ui = 1; ui < trHolder2.length ; ui++) {
$('#mainTable > tbody:last-child').append($("#"+ui));
trRowCnt++;
  }
}

//handles the sorting
function sorter(sort,columsSelect)
{
  var columSort=document.getElementsByClassName(columsSelect);
  var colArray=[columSort.length];
  var  colHolder;
  var trCopysJQ=$("tr");
  var trCopysJS=document.getElementsByTagName("tr");
  var colRev=[];
  var col1JQ=document.getElementsByClassName("col1");
  var col2JQ=document.getElementsByClassName("col2");
  var col3JQ=document.getElementsByClassName("col3");
  var col4JQ=document.getElementsByClassName("col4");
  var skipCnt=0;
  var correctCnt=1;

  $("td").css("visibility","visible");
if(columsSelect == "col1")
{
  skipCnt=1;
}
if(columsSelect == "col2")
{
  skipCnt=2;
}
if(columsSelect == "col3")
{
  skipCnt=3;
}
if(columsSelect == "col3")
{
  skipCnt=4;
}


for (var i = 0; i < columSort.length; i++) {
  colHolder ={
    ind:correctCnt,
    myval:columSort[i].innerHTML
  };
  colArray[i]=colHolder;
  correctCnt++;
}

if(columsSelect == "col3")
{
colArray.sort(function(a,b) {
return a.myval - b.myval;
});

}

if(columsSelect == "col4"){
colArray.sort(function(a,b) {
return a.myval.substring(1) - b.myval.substring(1);
});
}
if(columsSelect == "col2"){
colArray.sort(function(a,b) {
return a.myval.charAt(0) - b.myval.charAt(0);
});
}
if(columsSelect == "col1")
{
  colArray.sort(function(a,b) {
    //http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
    if (a.myval < b.myval)
    return -1;
  else if (a.myval > b.myval)
    return 1;
  else
    return 0;
  });
}


//sort aces
  if(sort === 0)
  {
//adds  new orders to button
for (var b = 0; b < columSort.length;b++) {
$('#mainTable > tbody:last-child').append($("#"+colArray[b].ind));
}

  }
  else {
    for (var l = columSort.length-1;l >= 0;l--) {
      $('#mainTable > tbody:last-child').append($("#"+colArray[l].ind));
    }
  }


}
// thanks to http://stackoverflow.com/questions/13552118/javascript-autocomplete-emails-domain-using-jquery-ui
function extractLast( val ) {
      if (val.indexOf("@")!=-1){
          var tmp=val.split("@");
          return tmp[tmp.length-1];
      }
      return "";
  }


//test funcation
function   testHelp() {
    alert("test");
}
function   testHelp(testC) {
    alert(testC);
}
