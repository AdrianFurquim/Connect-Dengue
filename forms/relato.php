<?php 
    include("conexao.php");

    $nome=$_POST['nome'];
    $experiencia=$_POST['anonimo'];
    $estado=$_POST['estado'];
    $relato=$_POST['relato'];

    if(empty($nome)){
      $nome = 'Anônimo';
    }

    if (empty($relato)) {
      echo "por favir, insira um relato dentro do campo";
    } else{
      $sql="INSERT INTO relato(nome, experiencia, estado, relato) VALUES ('$nome', '$experiencia', '$estado', '$relato')";

      if(mysqli_query($conexao, $sql)){
        
      }else{
        echo "Erro".mysqli_connect_error($conexao);
      }
      mysqli_close($conexao);
    }
    mysqli_close($conexao);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Criar Relato - Conecte Dengue</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="../assets/img/dengue-icon.png" rel="icon">
  <link href="../assets/img/dengue-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="../assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
  <link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="../assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="../assets/css/main.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="../index.html" class="logo d-flex align-items-center">
        
        <h1 style="color: grey;">Conecte Dengue</h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="../index.html" style="color: grey;">Home</a></li>
          <li><a href="../sobre.html" style="color: grey;">Sobre</a></li>
          <li><a href="../vetor.html" style="color: grey;">Vetor</a></li>
          <li><a href="../sintomas.html" style="color: grey;">Sintomas</a></li>
          <li><a href="../prevencao.html" style="color: rgb(173, 2, 2);">Prevenção</a></li>
          <li><a href="../combates.html" style="color: grey;">Combate</a></li>
          <li><a href="../relatos.html" style="color: grey;">Relatos</a></li>
          <li><a href="../denuncia.html" style="color: grey;">Denúncia</a></li>
        </ul>
      </nav><!-- navbar -->

    </div>
  </header>
  <!-- End Header -->

  <main id="fundo-criar-relato" style="background-image: url('../assets/img/inicial-todas.jpg');">
    <main id="main"><br><br>

      <section>
        <div id="bordinha" style="background: white; margin-top: 2%; ">
            <div id="dados" style="text-align: center;">

                <h3>Relato Concluído com Sucesso</h3>
                <br>
            </div>

            <a id="cor" href="../relatos.php"><input type="button" value="Voltar" id="enviar"></a><br><br>

        </div>      
      </section>
    </main>
  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="../index.html" class="logo d-flex align-items-center">
            <span>Conecte Dengue</span>
          </a>
          <p>Este é um site utilizado com o fundamento de auxiliar em qualquer dúvida sobre o vírus da Dengue.</p>
          <div class="social-links d-flex mt-4">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Outros Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="../fontes.html">Fontes/Referências</a></li>
            <li><a href="https://saude.sp.gov.br/">Site do Governo</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Outros Serviços</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="../login.html">Login</a></li>
            <li><a href="../assets/pdf/dengue-pdf-sobre.pdf">PDF Sobre </a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contatos</h4>
          <p>
            Nome do contato <br>
            Endereço do contato<br>
            Brazil<br><br>
            <strong>Telefone:</strong> <br>
            <strong>Email:</strong> cone.dengue@gmail.com<br>
          </p>

        </div>

      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Conecte Dengue</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="#">ConecteDengue</a>
      </div>
    </div>

  </footer><!-- End Footer -->
  <!-- End Footer -->

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="../assets/vendor/aos/aos.js"></script>
  <script src="../assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="../assets/js/botao.js"></script>
  <script src="../assets/js/main.js"></script>

</body>

</html>
