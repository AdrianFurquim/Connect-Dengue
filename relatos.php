<?php
    include("forms/conexao.php");

    $verificar="SELECT nome, experiencia, estado, relato FROM relato ORDER BY nome";

    $result=$conexao->query($verificar);

    mysqli_close($conexao);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Relatos - Connect Dengue</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="images/icons/icon-152x152.png" rel="icon">
  <link href="images/icons/icon-152x152.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <h1>Connect Dengue</h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="sobre.html">Sobre</a></li>
          <li><a href="vetor.html">Vetor</a></li>
          <li><a href="sintomas.html">Sintomas</a></li>
          <li><a href="prevencao.html" style="color: rgb(173, 2, 2);">Prevenção</a></li>
          <li><a href="combates.html">Combate</a></li>
          <li><a href="relatos.html" class="active">Relatos</a></li>
          <li><a href="denuncia.html">Denúncia</a></li>
        </ul>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="page-header d-flex align-items-center" style="background-image: url('assets/img/inicial-todas.jpg');">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>Relatos</h2>
              <p>Você pode inserir ou ler alguns relatos sobre como foi a experiência de contrair o vírus da Dengue.</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Relatos</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Breadcrumbs -->
    
    <br><br>
    <div id="centralizar">
      <a href="criar-relato.html"><input type="button" value="Criar relato" id="criar"></a>
    </div>
      
    <!-- ======= About Us Section ======= -->

    <section>

        <?php
             while($user_data= mysqli_fetch_assoc($result)){
                echo "<div id='exemplo'>";
                    echo "<div = 'texto'>";
                        echo "<img src='assets/img/anonimo - exemplo - relato.png' alt='Simolo redondo de anonimato.' width='60'> <br><br>";
                        echo "<p>".$user_data['nome']." (".$user_data['experiencia'].") ".$user_data['estado']." </p><br>";
                        echo "<p>".$user_data['relato']."</p>";
                    echo "</div>";
                echo "</div> <br><br>";
             }
        ?>

    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>Connect Dengue</span>
          </a>
          <p>Este é um site utilizado com o fundamento de auxiliar em qualquer dúvida sobre o vírus da Dengue.</p>
          <div class="social-links d-flex mt-4">
            <a href="https://www.instagram.com/connect_dengue/?igshid=MzRlODBiNWFlZA%3D%3D" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Outros Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="relatosDelete.php">Delete itens</a></li>
            <li><a href="https://saude.sp.gov.br/">Site do Governo</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contatos</h4>
          <p>
            Nome do contato Connect Dengue<br>
            Brazil<br><br>
            <strong>Email:</strong> connect.dengue@gmail.com<br>
          </p>

        </div>

      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Connect Dengue</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="#"> Connect Dengue</a>
      </div>
    </div>

  </footer><!-- End Footer -->
  <!-- End Footer -->

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>