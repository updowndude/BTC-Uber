<!DOCTYPE html>
<html>
<head>
<title>About</title>
<!--bring in different parts to be used -->
<?php include'../includes/top.php' ?>
<?php include'../includes/header.php' ?>

<?php include'../includes/nav.php' ?>

<div id="lbBackground" class="lightbox">
<div id="lblShower" class="lightbox">
<img src="../images/blank.png" alt="Blank"  id="lbBlank" class="lightbox"/>
<img src="../images/next.png" alt="Blank"  id="lblPrev" class="arrows"/>
<img src="../images/prev.png" alt="Blank"  id="lblNext" class="arrows"/>
<img src="../images/lbx.png" alt="X"  id="lblX" class="arrows"/>
</div>
</div>

<button id="btnAbout">Message from devs</button>
<!--p & img descrbing about the site -->
<article id="ArtAbout">
    <h2 id="aboutH2">Blackhawk Technical College teams up with Uber</h2>
    <!-- http://media-cache-ec0.pinimg.com/736x/f6/e3/e9/f6e3e9bd77545b8b2cb8af3a85cebeaf.jpg  -->
    <!-- http://abovethecrowd.com/wp-content/uploads/2014/03/New-Logo-Vertical-Dark.jpg -->
<section id="MyLightbox" class="Lightbox">
  <img src="../images/BTC.png" alt="Btc"  id="lbBTC" class="myLBImg"/>
  <img src="../images/Uber.png" alt="Uber"  id="lbUber" class="myLBImg" />
  <img src="../images/BU.png" alt="BTC Uber" id="lbBU" class="myLBImg"/>
</section>

    <div id="ghostLb"></div>
      <hr id="aboutHr">
    <p>
      <pre id="aboutPre">Why did uber decided to team up with blackhawk. Uber is trying out on a new program where
      they Let students getting right for free unless they have good grades. Allow students to
      communicate with community members share their ideas and vice versa.Grant the student be
      dependable way to get to college while having a goal to get better grades. Community member
      side give them jobs or an extra source of income. The program is great for both sides hope
      student sign up soon.</pre>
    </p>
    <!--message dialog -->
    <div id="myDialog" title="IT web Devlopment">
      <p>The IT- Web Software Developer Associate of Applied Science Degree meets the specific skills and
        knowledge requirements of technical and professional jobs within the information technology field
        for Web development specialists including analyst /programmer, e-Commerce, or Web design/support.
         It is designed to meet entry-level education needs of most segments of the IT field which utilize a
         variety of computers. Training blends general educational development and required IT technical skills.
          Graduates are prepared for entry-level Web developer jobs in government, insurance, manufacturing,
           service, software development, wholesale and retail sales, utilities, banking and accounting.
<span class="addBtc"></span>
         </p>
    </div>
</article>

<?php include'../includes/aside.php' ?>
<?php include'../includes/footer.php' ?>
