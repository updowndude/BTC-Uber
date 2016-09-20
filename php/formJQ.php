<!DOCTYPE html>
<html>
<head>
<title>Form Jquery</title>
<?php include'../includes/top.php' ?>

<?php include'../includes/header.php' ?>
<?php include'../includes/nav.php' ?>
<!-- http://blog.protectmyid.com/wp-content/uploads/2010/09/Check_Pic.jpg-->
<img src="../images/check.png" alt="Uber" id="Check" class="PassFail" />
<!--http://dailytwocents.com/wp-content/uploads/2015/02/pixabay/8/Capital_X_1423664428.png -->
<img src="../images/x.png" alt="Uber" id="Wrong"  class="PassFail"/>
<form action="../php/thankYou.php" method="get" id="mainForm" oninput="return newCheck(this);" >

    <h2>Uber singUP!! using Jquery</h2>
    <div id="elementsWithlables">
    <label for="btcID" class="labels">Btc ID number</label>
    <input type="text" class="labelsnum" tabindex="1"  placeholder="Enter your BTC ID number" name="btcID" id="btcID"  />
  <div class="errorMy" >Hahahahsaahahahahahahahahahah</div>


    <label for="states" class="labels" id="LblState"> State</label>
<?php include'../includes/form.php' ?>
  <div class="errorMy"  id="skipMe">Hahahahsaahahahahahahahahahah</div>

<label for="zip"  class="labels">Zip code</label>
<input type="nunber"  tabindex="1" class="labelsnum" placeholder="Enter your Zip Code" name="zip" id="zip"  />
  <div class="errorMy" >Hahahahsaahahahahahahahahahah</div>
<label for="BTCEmail"  class="labels">BTC Email</label>
<input type="text" tabindex="1" class="labelsnum"  placeholder="@students.blackhawk.edu or @blackhawk.edu" name="BTCEmail" id="BTCEmail"  />
  <div class="errorMy" >Hahahahsaahahahahahahahahahah</div>
<label for="PhoneNumber" class="labels">Phone number</label>
<input type="text" tabindex="1" class="labelsnum" placeholder="Enter your Phone number" name="PhoneNumber" id="PhoneNumber"  />
  <div class="errorMy" >Hahahahsaahahahahahahahahahah</div>

<label for="fName" class="labels">Frist Name</label>
<input type="text" tabindex="1" class="labelminus" placeholder="Enter your Frist Name"  name="fName" id="fName"  />
<div class="errorMy" >Hahahahsavahahahahahahahahahah</div>
<label for="lName" class="labels">Last Name</label>
<input type="text" tabindex="1" class="labelminus"  placeholder="Enter your Last Name" name="lName" id="lName"  />
<div class="errorMy" >Hahahahsaahahahahahahahahahah</div>
<label for="address" class="labels">Address</label>
<input type="text" tabindex="1" class="labelminus"  placeholder="Enter your Address" name="address" id="address"  />
<div class="errorMy" >Hahahahsaahahahahahahahahahah</div>
<label for="city" class="labels">City</label>
<input type="text" tabindex="1"  class="labelminus" placeholder="Enter what city you live in" name="city" id="city"  />
<div class="errorMy" >Hahahahsaahahahahahahahahahah</div>
<label for="jqTime" class="labels">Date</label>
<input type="text"  tabindex="1" class="labelminus" placeholder="Pick a time" name="jqTime" id="jqTime"  />
<div class="errorMy" >Hahahahsaahahahahahahahahahah</div>
<label for="jqQuality" class="labels" id="jqQualityLbl" title="Quality of driver">Quality</label>
<ol  tabindex="1" class="labelminus"name="jqQuality" id="jqQuality">
<li><p>5</p></li>
<li><p>4</p></li>
<li><p>3 </p></li>
<li><p>2</p></li>
<li><p>1</p></li>
</ol>
<div class="starRap" id="star5"><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span></div>
<div class="starRap" id="star4"><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span></div>
<div class="starRap" id="star3"><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span></div>
 <div class="starRap" id="star2"><span class="ui-icon ui-icon-star"></span><span class="ui-icon ui-icon-star"></span></div>
<div class="starRap" id="star1"> <span class="ui-icon ui-icon-star"></span></div>
</div>
<label for="campus" id="CampusRadiosTitle">Campus Location</label>
<br>
<div id="rad">
<input type="radio" value="Beloit" id="rad1" name="campus"  class="radio"/><label for="rad1" class="labelRadio">Beloit</label>
<input type="radio" value="Central" id="rad2" name="campus"  checked class="radio"/><label for="rad2" class="labelRadio">Central</label>
<input type="radio" value="Monroe" id="rad3" name="campus" class="radio"/><label for="rad3" class="labelRadio">Monroe</label>
</div>
<br>
<button type="submit" id="sumbitTwo"  onclick="PassFailCheck();">Submit</button>
<button id="myResetTwo" name="myReset">Reset</button>
</form>
<!-- submit dilog-->
<div id="check" title="Sumbit">
Are you sure when you to sumbit.
</div>
<!-- reset dilog-->
<div id="restDialog" title="Reset">
You are about to reset the form.
</div>

<!--librarys to used and makes so that only this page uses jquery validation -->
<script src="../js/bodyJQ.js" language="javascript" type="text/javascript"></script>


<?php include'../includes/aside.php' ?>

<?php include'../includes/footer.php' ?>
