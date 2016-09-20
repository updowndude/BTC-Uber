<!DOCTYPE html>
<html>
<head>
<title>Form CSS</title>
<?php include'../includes/top.php' ?>

<?php include'../includes/header.php' ?>
<?php include'../includes/nav.php' ?>
<!--form built and ready to go -->
<form action="../php/thankYou.php" method="get" id="mainForm" onerror="whathappend()" onsubmit="return forSure()">
<!--lables wtih there input -->
<!--only different is that this all html and css validation also using required attr -->
    <h2>Uber singUP!! using Css</h2>
    <div id="elementsWithlables">
    <label for="btcID" class="labels">Btc ID number</label>
    <input type="text"  pattern="^000\d{6}$" title="Enter a correct BTC ID"  class="labelsnum"  placeholder="Enter your BTC ID number" name="btcID" id="btcID" required  max="999999999" title="Please give us a ID number"/>
  <p class="errorMy" ></p>
    <br>

    <label for="states" class="labels" id="LblState"> State</label>
<?php include'../includes/form.php' ?>
  <p class="errorMy" ></p>
<br>
<label for="zip" class="labels">Zip code</label>
<input type="nunber" title="What is your zip" pattern="/(^\d{5}$)|(^\d{5}-\d{4}$)/" title="Zip code must in one of two formats" class="labelsnum" placeholder="Enter your Zip Code" name="zip" id="zip" required />
  <p class="errorMy" ></p>
<br>
<label for="BTCEmail" class="labels">BTC Email</label>
<input type="email" class="labelsnum" title="What is your BTC email" placeholder="@students.blackhawk.edu or @blackhawk.edu" name="BTCEmail" id="BTCEmail" required />
  <p class="errorMy" ></p>
<br>
<label for="PhoneNumber" class="labels">Phone number</label>
<input type="tel"  class="labelsnum" title="What is your phone number" placeholder="Enter your Phone number" name="PhoneNumber" id="PhoneNumber" required />
  <p class="errorMy" ></p>
<br>
<label for="fName" class="labels">Frist Name</label>
<input type="text" class="labelsnum" title="What is your first name" placeholder="Enter your Frist Name"  name="fName" id="fName" required />
<p class="errorMy" ></p>
<br>
<label for="lName" class="labels">Last Name</label>
<input type="text" class="labelsnum" title="what is your last name"  placeholder="Enter your Last Name" name="lName" id="lName" required />
<p class="errorMy" ></p>
<br>
<label for="address" class="labels">Address</label>
<input type="text" class="labelsnum" title="what is your address"  placeholder="Enter your Address" name="address" id="address" required />
<p class="errorMy" ></p>
<br>
<label for="city" class="labels">City</label>
<input type="text"  class="labelsnum" title="what city do live in" placeholder="Enter what city you live in" name="city" id="city" required />
<p class="errorMy" ></p>
<br>
</div>
<label for="campus" id="CampusRadiosTitle">Campus Location</label>
<br>
<label for="campus" class="labelRadio">Beloit</label><input type="radio" value="Beloit" name="campus"  class="radio"/>
<label for="campus" class="labelRadio">Central</label><input type="radio" value="Central" name="campus"  checked class="radio"/>
<label for="campus" class="labelRadio">Monroe</label><input type="radio" value="Monroe" name="campus" class="radio"/>
<br>
<button type="submit" id="sumbitTwo"  onclick="PassFailCheck();">Submit</button>
<button id="myReset" name="myReset">Reset</button>

</form>
<?php include'../includes/aside.php' ?>

<?php include'../includes/footer.php' ?>
