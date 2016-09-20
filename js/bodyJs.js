   var masterTotal=0;
function checkJS(form)
{
  //nodelist of input with class name labelsnum
  var el=document.getElementsByClassName("labelsnum");
//get length of so it can do a for loop
  var arLength=el.length;
  var lengthO=arLength;
  var correctCount=0;
  for (var i = 0; i < el.length; i++)
  {
    //current spot what type it is
    var  elTypes=el[i].type;
    //current spot what id it is
    var elTmpString=el[i].id;
    //outstirgn to concat id and text
    var tmp="";
    var correctToken=0;
    //current sopt what value it is
    var emailString=el[i].value;
    //find the index of .com @ (  ) - and a space
    var lblM =document.getElementsByClassName("labelminus");
    var lblS =document.getElementsByClassName("labelsnum");
    var justS=emailString.indexOf("students");
    var btcS=emailString.indexOf("@students.blackhawk.edu");
    var btcE=emailString.indexOf("@blackhawk.edu");
    var emailCheck=emailString.indexOf(".com");
    var emailVal=emailString.indexOf("@");
    var tmpPl=emailString.indexOf("(");
    var tmpPr=emailString.indexOf(")");
    //teasting a idea
    var tmpPdC=emailString.indexOf("-");
    var tmpPd=emailString.indexOf("-");
    var tmpPd2=emailString.lastIndexOf("-");
    var tmpPd3=emailString.lastIndexOf(" ");
    //the lenght of the value entered by input
    var lenghtCnt=emailString.length;
    var taget=  document.getElementsByClassName("errorMy");
    var tagetReplace=  document.getElementsByClassName("errorReplaceMy");
    //remove node if they are typ radio submit or select
    if ((elTypes == "radio") || (elTypes == "submit") ||  (elTypes == "select")) {
        delete el[i];
    }

for (var n = 0; n< tagetReplace.length; n++) {
  tagetReplace[n].className="errorMy";
}
correctCount=0;
    //check to see if it's empty string
    if((el[i].value === "") && (elTmpString !="BTC ID"))
    {
      correctToken=1;
      //display the error with id and focus on it
      tmp="Enter a correct "+elTmpString;
      taget[i+1].innerHTML=tmp;
      taget[i+1].className="errorReplaceMy";
      correctCount=0;

      el[i].focus();
      return false;
    }


    if((el[i].value === "") && (elTmpString == "BTC ID"))
    {
      //display the error with id and focus on it
      tmp="Enter a correct "+elTmpString;
      taget[i].innerHTML=tmp;
      taget[i].className="errorReplaceMy";
      correctCount=0;

      el[i].focus();
      return false;
    }

    //current is btc email
    if(elTmpString == "BTC Email")
    {
      correctToken=0;

      //see if .com and @ are in vlaue
      if(emailVal === 0)
      {
        correctToken=1;
        taget[i+1].innerHTML="please put something in before @";
        taget[i+1].className="errorReplaceMy";
          correctCount=0;

        el[i].focus();
        return false;
      }
      else {
      if(justS < 0)
      {
if(btcE < 0)
{
    if((btcS   < 0))
    {
      correctToken=1;
      taget[i+1].innerHTML="Check employee email is correct";
      taget[i+1].className="errorReplaceMy";
        correctCount=0;

      el[i].focus();
      return false;
    }
  }
}
    else
    {
      if(btcS < 0)
      {
    if(btcE   < 0)
    {
      correctToken=1;
      taget[i+1].innerHTML="Check student  email is correct";
      taget[i+1].className="errorReplaceMy";
        correctCount=0;

      el[i].focus();
      return false;
    }
  }
}
}
    if(correctToken===0)
    {
      correctCount++;
      el[i].disabled=true;
    el[i].style.backgroundColor="#6F6E41";
  }
  }
  //make sure the btc id as only nine place values
    if(elTmpString == "BTC ID")
    {
      correctToken=0;

      if((emailString[0] == "0") && (emailString[1] == "0") && (emailString[2] == "0"))
      {
        if(emailString.length != 9)
        {
          correctToken=1;
          taget[i].innerHTML="ID has to have nine digits";
          taget[i].className="errorReplaceMy";
            correctCount=0;

          el[i].focus();
          return false;
        }
      }
      else {
        correctToken=1;
        taget[i].innerHTML="ID must have three 0 in front";
        taget[i].className="errorReplaceMy";
          correctCount=0;

        el[i].focus();
        return false;
    }
    if(correctToken===0)
    {
      correctCount++;
    el[i].disabled=true;
el[i].style.backgroundColor="#6F6E41";
}
    }
    // checks zip code
    if (elTmpString=="Zip") {
      correctToken=0;

      //teasting
      //alert(lenghtCnt);
      //is the - at select spot
      if (tmpPdC ===5) {
        //make sure the length is right for the format
        if(lenghtCnt==10)
        {
          //walks through the value one char at a time
        for (var g = 0; g < lenghtCnt.length; g++) {
          //we the value is something else so we skip over it
          if(g==5)
          {
            continue;
          }else {
            //display outpput if there's eorror
            if (isNaN(emailString[g]) === true) {
              correctToken=1;
              taget[i+1].innerHTML="Dash is in wrong spot";
              taget[i+1].className="errorReplaceMy";
                correctCount=0;

              el[i].focus();
              return false;
            }
          }

        }
      }
        else
        {
          //number enered was to long
          correctToken=1;
          taget[i+1].innerHTML="To many numbers where entered";
          taget[i+1].className="errorReplaceMy";
            correctCount=0;

          el[i].focus();
          return false;
        }
      }
      //checks the other format
      else if (tmpPdC <0) {
        //same length check as before
        if(lenghtCnt==5)
        {
        for (var a = 0; a < lenghtCnt.length; a++) {
            //display outpput if there's eorror
          if (isNaN(emailString[a]) === true) {
            correctToken=1;
            taget[i+1].innerHTML="Dash is in wrong spot";
            taget[i+1].className="errorReplaceMy";
              correctCount=0;

            el[i].focus();
            return false;
          }
        }
      }
      else {
          //display outpput if there's eorror
          correctToken=1;
        taget[i+1].innerHTML="To many numbers where entered";
        taget[i+1].className="errorReplaceMy";
          correctCount=0;

        el[i].focus();
        return false;
      }
      }
      else {
          //display outpput if there's eorror
          correctToken=1;
        taget[i+1].innerHTML="Sorry we don't support that format";
        taget[i+1].className="errorReplaceMy";
          correctCount=0;

        el[i].focus();
        return false;
      }
      if(correctToken===0)
      {
        correctCount++;
        el[i].disabled=true;
      el[i].style.backgroundColor="#6F6E41";
    }
    }
    if(elTmpString =="Phone Number")
    {
      correctToken=0;
      //teasting
            //alert(lenghtCnt);
      //alert(tmpPl+" "+tmpPr+" "+tmpPd3+" "+tmpPd2);
      //see if phone number is in a format
      if ((tmpPl<0) || (tmpPr <0))
      {
        ///see - are for a format
        if((tmpPd===3) && (tmpPd2===7))
        {
          if(lenghtCnt===12)
          {
          //for lop check numbers
          for (var j = 0; j < lenghtCnt; j++)
          {
            if ((j===3) ||  (j===7) )
            {
              continue;
            }
            else {
              if (isNaN(emailString[j]) === true) {
              //  alert(emailString[j]);
              correctToken=1;
                taget[i+1].innerHTML="Dash is in wrong spot";
                taget[i+1].className="errorReplaceMy";
                  correctCount=0;

                el[i].focus();
                return false;
              }
            }
          }
        }
        else {
          correctToken=1;
          taget[i+1].innerHTML="To many numbers where entered";
          taget[i+1].className="errorReplaceMy";
            correctCount=0;

          el[i].focus();
          return false;
        }
        }
        else {
          //alert(emailString[j]);
          correctToken=1;
          taget[i+1].innerHTML="Dash is in wrong spot";
          taget[i+1].className="errorReplaceMy";
            correctCount=0;

          el[i].focus();
          return false;
        }
      } else
      //check the other foramt if for ( ,),-, and spaces
      if((tmpPl===0) && (tmpPr===4) && (tmpPd3===5) && (tmpPd2===9))
      {
        if (lenghtCnt===14)
        {
        for (var k = 0; k < lenghtCnt; k++)
        {
          if ((k===0) ||  (k===4) || (k ===9 )  || (k ===5)){
            continue;
          }
          else {
            if (isNaN(emailString[k]) === true)
             {
               correctToken=1;
              taget[i+1].innerHTML="Parentheses is in wrong spot";
              taget[i+1].className="errorReplaceMy";
                correctCount=0;

              el[i].focus();
              return false;
            }
          }
        }
      }
      else {
        correctToken=1;
        taget[i+1].innerHTML="To many numbers where entered";
        taget[i+1].className="errorReplaceMy";
          correctCount=0;

        el[i].focus();
        return false;
      }
      }
      else {
        correctToken=1;
        taget[i+1].innerHTML="Sorry we can't handly that format";
        taget[i+1].className="errorReplaceMy";
          correctCount=0;

        el[i].focus();
        return false;
      }
      if(correctToken===0)
      {
        correctCount++;
        el[i].disabled=true;
      el[i].style.backgroundColor="#6F6E41";
    }
    }

  }

  if (correctCount == 4)
  {
    correctCount=0;
    masterTotal++;
    forSureTest();
}
}
function checkFew(form)
{
  var correctCount2=0;
  var btnSumbit=document.getElementById("sumbit");
   var nameF=document.getElementById("First");
 var nameL=document.getElementById("Last");
 var nameA=document.getElementById("Address");
 var nameC=document.getElementById("City");
 var nameFE=document.getElementById("errorF");
var nameLE=document.getElementById("errorL");
var nameAE=document.getElementById("errorA");
var nameCE=document.getElementById("errorC");

 if(nameF.value === "")
 {
   if(document.getElementById("idError").innerHTML === "Hahahahsaahahahahahahahahahah")
   {
   correctCount2=0;
   nameFE.innerHTML="Must put something there";
   nameFE.className="errorReplaceMy";
   nameF.focus();

   return false;
 }
 }
else {
  correctCount2++;
}

 if(nameL.value === "")
 {
   if(document.getElementById("idError").innerHTML === "Hahahahsaahahahahahahahahahah")
{
   nameLE.innerHTML="Must put something there";
   nameLE.className="errorReplaceMy";
  nameL.focus();

   return false;
 }
 }
 else {
   correctCount2++;
 }

 if(nameA.value === "")
 {
   if(document.getElementById("idError").innerHTML === "Hahahahsaahahahahahahahahahah")
{
   nameAE.innerHTML="Must put something there";
   nameAE.className="errorReplaceMy";
  nameA.focus();

   return false;
 }
 }
 else {
   correctCount2++;
 }

 if(nameC.value === "")
 {
   if(document.getElementById("idError").innerHTML === "Hahahahsaahahahahahahahahahah")
{
   nameCE.innerHTML="Must put something there";
   nameCE.className="errorReplaceMy";
  nameC.focus();

   return false;
 }
 }
 else {
   correctCount2++;
 }

 if (correctCount2== 4)
 {
   correctCount2=0;
   masterTotal++;
forSureTest();
}
}
//very thing works
function forSureTest()
{
  var lblM =document.getElementsByClassName("labelminus");
  var lblS =document.getElementsByClassName("labelsnum");
  if (masterTotal == 2) {
    var pass=confirm("Are you sure");
    if(pass===true )
    {
      event.preventDefault();
      masterTotal=0;
for (var i = 0; i < lblM.length; i++) {
  lblM[i].disabled=true;
        lblM[i].value.trim();
}
for (var j = 0; j < lblS.length; j++) {
  lblS[j].disabled=true;
  lblS[j].value.trim();
}
      document.getElementById("mainForm").submit();
      return true;
    }
    else {
      event.preventDefault();
      for (var o = 0; o < lblM.length; o++) {
        lblM[o].style.backgroundColor="#FFF2B3";
          lblM[o].disabled=false;
}
for (var p = 0; p< lblS.length; p++) {
  lblS[p].style.backgroundColor="#FFF2B3";
    lblS[p].disabled=false;
}

      masterTotal=0;
      return false;
    }
  }
}
