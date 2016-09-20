<!DOCTYPE html>
<html>
<head>
<title>Times</title>
<?php include'../includes/top.php' ?>

<?php include'../includes/header.php' ?>
<?php include'../includes/nav.php' ?>
<h2 id="StopMe">Times</h2>
<!--headers table -->
<div id="Campus" class="TableH">
  <label for="TCampus" class="Tlabel" id="lblTime"> Campus</label>
  <input type="text"  class="Tinput" placeholder="Campus" name="TCampus" id="TCampus" />
  <!-- http://communityplates.org/wp-content/uploads/2014/04/arrow-down.jpg -->
  <img src="../images/arrows.png" alt="arrows" class="Tarrows"/>
</div>
<div id="Time" class="TableH">
      <label for="TTime" class="Tlabel" id="lblTime"> Time</label>
      <input type="text"  class="Tinput" placeholder="Time" name="TTime" id="TTime" />
  <!-- http://communityplates.org/wp-content/uploads/2014/04/arrow-down.jpg -->
  <img src="../images/arrows.png" alt="arrows" class="Tarrows"/>
</div>
<div id="Riders" class="TableH">
  <label for="TRiders" class="Tlabel" id="lblRiders"> Riders</label>
  <input type="text"  class="Tinput" placeholder="# Riders" name="TRiders" id="TRiders" />
  <!-- http://communityplates.org/wp-content/uploads/2014/04/arrow-down.jpg -->
  <img src="../images/arrows.png" alt="arrows" class="Tarrows"/>
</div>
<div id="Price" class="TableH">
  <label for="TPrice" class="Tlabel" id="lblPrice"> Price</label>
  <input type="text"  class="Tinput" placeholder="Price" name="TPrice" id="TPrice" />
  <!-- http://communityplates.org/wp-content/uploads/2014/04/arrow-down.jpg -->
  <img src="../images/arrows.png" alt="arrows" class="Tarrows"/>
</div>
<!-- table it's self--->
<table id="mainTable" class="MaintT" >
  <tbody>
<tr>
  <td>Central</td>
  <td>4:00pm</td>
  <td>5</td>
  <td>$5</td>
</tr>
<tr>
  <td>Beloit</td>
  <td>1:00pm</td>
  <td>8</td>
  <td>$10</td>
</tr>
<tr>
  <td>Monroe</td>
  <td>8:00am</td>
  <td>3</td>
  <td>$8</td>
</tr>
<tr>
  <td>Central</td>
  <td>2:00pm</td>
  <td>1</td>
  <td>$3</td>
</tr>
<tr>
  <td>Beloit</td>
  <td>5:00pm</td>
  <td>1</td>
  <td>$20</td>
</tr>
</tbody>
</table>
<div id="ghostTable"></div>
<button id="Clear" class="btnTimes" title="Clears the sort and search">Clear</button>
<?php include'../includes/aside.php' ?>
<?php include'../includes/footer.php' ?>
