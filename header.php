<?php

echo "Moj prvi php"

?>
<header class="site-header">
  <nav class="nav">
    <a href="index.html" class="brand">
      <img src="images/logo-mark.svg" alt="" width="30" height="30">
      Sentinel Sigurnost
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">
      ☰ Izbornik
    </button>
    <ul class="nav-links" id="primary-nav">
      <li><a href="index.html" aria-current="page">Početna</a></li>
      <li><a href="o-nama.html">O nama</a></li>
      <li><a href="usluge.html">Usluge</a></li>
      <li><a href="blog.html">Novosti</a></li>
      <li><a href="kontakt.html">Kontakt</a></li>
    </ul>
  </nav>

  <?php
  $naziv_tvrtke="Sentinel Sigurnost d.o.o";

  $godina_osnutka=2026;

  echo $naziv_tvrtke;

  echo "<p> Godina osnutka naše tvrtke je $godina_osnutka</p>";

  echo"<p> Godina kad smo počeli djelovati bila je ".$godina_osnutka." godina</p>";

  ?>