<!DOCTYPE html>
<html>
<head>
<title>Home</title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="css/jquery-ui-1.9.2.custom.css">
<link rel="stylesheet" type="text/css" href="css/main.css">
<!-- cant use some includes because change in postion -->
<!--what going to be on the page -->
<meta name="description" content=" BTC Uber" author="Correy Winke">
<!--<meta http-equiv="refresh" content="3">-->
 <meta name="language" content="english">
 <link href='http://fonts.googleapis.com/css?family=PT+Serif' rel='stylesheet' type='text/css'> <!-- header font -->
 <!-- favicon small incon in tab bar-->
 <!-- form http://www.favicon.cc/ -->
 <link rel="icon" type="image/x-icon" href="images/icon.ico" />
 <!-- why chrome  favicon don't show had to rename to icon-->
 <link rel="shortcut icon" type="image/x-icon" href="images/icon.ico" />
<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'> <!-- bodt head font -->
<!-- jquery Library-->
<script src="js/jquery.js" language="javascript" type="text/javascript"></script>
<script src="js/jquery.validate.js" language="javascript" type="text/javascript"></script>
<script src="js/jquery-ui-1.9.2.custom.js" language="javascript" type="text/javascript"></script>
<script src="js/jquery.cookie.js" language="javascript" type="text/javascript"></script>
<script src="js/er.js" language="javascript" type="text/javascript"></script>
<script src="js/bodyJs.js" language="javascript" type="text/javascript"></script>

</head>

<body>
<div id="container">

<?php include'includes/header.php' ?>

<!-- nav with links-->
<nav>
  <!-- href="http://www.blackhawk.edu/" target="_blank" -->
    <!-- http://media-cache-ec0.pinimg.com/736x/f6/e3/e9/f6e3e9bd77545b8b2cb8af3a85cebeaf.jpg  -->
    <img src="images/BTC.png" alt="BTC" id="BtcNavPic" class="NavPic" />
  <a href="index.php">Home &nbsp;</a>
  <a href="php/about.php" id="AboutNav">About &nbsp;</a>
  <a href="php/table.php"> Times &nbsp;</a>
    <a href="php/images.php"> Images &nbsp;</a>
<a href="php/FAQ.php"> FAQ</a>

  <!-- separte links from the forms-->
  <table>
    <!--Name telling the user groups name -->
    <legend id="forms">Forms</legend>
    <tr>
  <td><a href="php/formCss.php" ><pre class="hovre">Form Css </pre></a></td>
<td>  <a href="php/formJs.php" ><pre class="hovre">Form Js </pre></a></td>
<td>  <a href="php/formJQ.php" ><pre class="hovre">Form Jquery</pre></a></td>
</tr>
</table>
<!-- http://abovethecrowd.com/wp-content/uploads/2014/03/New-Logo-Vertical-Dark.jpg -->
<!-- href="https://get.uber.com/cl/?city_name=madison&utm_source=AdWords_Brand&utm_campaign=search-google-brand_1_219_us-madison_d_txt_acq_cpc_en-us_uber_kwd-169801042_89372823400_22880782120_e_c_track-jan21generalupdate_restructure&utm_medium=kenid_7465f74e-8380-4ca0-94cd-22f4ad67b3b8&cid=271812160&adg_id=22880782120&fi_id=&match=e&net=g&dev=c&dev_m=&cre=89372823400&kwid=kwd-169801042&kw=uber&placement=&tar=&gclid=CPTTzcKP7soCFZKCaQodQugLQA" target="_blank" -->
  <img src="images/Uber.png" alt="Uber" id="UbNavPic"  class="NavPic" />
</nav>
<!-- ghost div for background-->
<div id="bgNav"></div>

<div id="lbBackground" class="lightbox">
<div id="lblShower" class="lightbox">
<img src="images/blank.png" alt="Blank"  id="lbBlank" class="lightbox"/>
<img src="images/next.png" alt="Blank"  id="lblPrev" class="arrows"/>
<img src="images/prev.png" alt="Blank"  id="lblNext" class="arrows"/>
<img src="images/lbx.png" alt="X"  id="lblX" class="arrows"/>
</div>
</div>

<!--article with video and heading -->
<article id="ParArt">
<h2>BTC &amp; Uber action video</h2>
    <video controls autoplay loop src="video/BTCUber.mp4">
  </video>
</article>

<button id="newV" class="videosB" >New video</button>
<button id="oldV" class="videosB">Old video</button>
<!-- ghost div for background -->
<div id="ArtImgBgDiv"></div>
<!--article about join and with up and down line that image on side -->
<article id="ArtImg">
<p>
<pre>Blackhawk and Uber decided to team up to help <strong>students achieve greatness<strong>.
   Students can get a ride for free as long is there going to class.
   It's great for the community to
   hear about Blackhawk students  about their  successes.</pre>
</p>
<!--oringally leaft to right -->
<svg width="150" height="250">
  <line x1="50" y1="200" x2="500" y2="200"  />
</svg>
<!-- https://pbs.twimg.com/media/CSsp-EpUYAENwQz.jpg -->
<img src="images/BUCar.png" alt="Car"  id="car" />
</article>

<aside id="AsBTC">
  <!-- http://media-cache-ec0.pinimg.com/736x/f6/e3/e9/f6e3e9bd77545b8b2cb8af3a85cebeaf.jpg  -->
  <img src="images/BTC.png" alt="BlackHawk" />
  <h3>BTC</h3>
</aside>

<aside id="AsUber">
      <!-- http://abovethecrowd.com/wp-content/uploads/2014/03/New-Logo-Vertical-Dark.jpg -->
  <img src="images/Uber.png" alt="Uber" />
  <h3>Uber</h3>
</aside>


<?php include'includes/footer.php' ?>
