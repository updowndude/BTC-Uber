<!DOCTYPE html>
<html>
<head>
<title>Form JS</title>
<?php include'../includes/top.php' ?>

<?php include'../includes/header.php' ?>
<?php include'../includes/nav.php' ?>
<!-- uses on onsubmit to check form with js-->
<!-- thanks to  http://stackoverflow.com/questions/11806253/onsubmit-multiple-javascript-functions-->
<form action="../php/thankYou.php" method="get" id="mainForm" onblur="return !! (checkJS(this) & checkFew(this));" onsubmit="return !! (checkJS(this) & checkFew(this) & forSureTest());">
<!-- change the id so they be easy display by js-->
    <h2>Uber singUP!! using Javascript</h2>
    <div id="elementsWithlables" class="OnlyJS">
    <label for="btcID" class="labels">Btc ID number</label>
    <input type="text" class="labelsnum"  placeholder="Enter your BTC ID number" name="btcID" id="BTC ID"  />
    <p class="errorMy" id="idError" >Hahahahsaahahahahahahahahahah</p>
    <label for="states" class="labels" id="LblState"> State</label>
<?php include'../includes/form.php' ?>
    <p class="errorMy" >Hahahahsaahahahahahahahahahah</p>
<label for="zip" class="labels">Zip code</label>
<input type="nunber"  class="labelsnum" placeholder="Enter your Zip Code" name="Zip" id="Zip"  />
    <p class="errorMy" >Hahahahsaahahahahahahahahahah</p>
<label for="BTCEmail" class="labels">BTC Email</label>
<input type="text" class="labelsnum"  placeholder="@students.blackhawk.edu or @blackhawk.edu" name="BTCEmail" id="BTC Email"  />
    <p class="errorMy" >Hahahahsaahahahahahahahahahah</p>
<label for="PhoneNumber" class="labels">Phone number</label>
<input type="text" class="labelsnum" placeholder="Enter your Phone number" name="PhoneNumber" id="Phone Number"  />
    <p class="errorMy" >Hahahahsaahahahahahahahahahah</p>
    <label for="fName" class="labels">Frist Name</label>
    <input type="text" class="labelminus" placeholder="Enter your Frist Name"  name="fName" id="First"  />
    <p class="errorMy" id="errorF" >Hahahahsaahahahahahahahahahah</p>
    <label for="lName" class="labels">Last Name</label>
    <input type="text" class="labelminus"  placeholder="Enter your Last Name" name="lName" id="Last"  />
    <p class="errorMy"  id="errorL">Hahahahsaahahahahahahahahahah</p>
    <label for="address" class="labels">Address</label>
    <input type="text" class="labelminus"  placeholder="Enter your Address" name="address" id="Address"  />
    <p class="errorMy"  id="errorA">Hahahahsaahahahahahahahahahah</p>
    <label for="city" class="labels">City</label>
    <input type="text"  class="labelminus" placeholder="Enter what city you live in" name="city" id="City"  />
    <p class="errorMy"  id="errorC">Hahahahsaahahahahahahahahahah</p>
</div>
<label for="campus" id="CampusRadiosTitle">Campus Location</label>
<br>
<label for="campus" class="labelRadio">Beloit</label><input type="radio" value="Beloit" name="campus"  class="radio labelsnum"/>
<label for="campus" class="labelRadio">Central</label><input type="radio" value="Central" name="campus"  checked class="radio labelsnum"/>
<label for="campus" class="labelRadio">Monroe</label><input type="radio" value="Monroe" name="campus" class="radio labelsnum"/>
<br>
<button type="submit" id="sumbitTwo"  onclick="PassFailCheck();">Submit</button>
<button id="myReset" name="myReset">Reset</button>

</form>
<?php include'../includes/aside.php' ?>

<?php include'../includes/footer.php' ?>
