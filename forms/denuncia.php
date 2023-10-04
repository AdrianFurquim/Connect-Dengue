<?php 
    include("conexao.php");

    $den_pontoReferencia=$_POST['denuncia_referencia'];
    $den_estado=$_POST['denuncia_estado'];
    $den_municipio=$_POST['denuncia_municipio'];
    $den_numResidencia=$_POST['denuncia_numResidencia'];
    $den_bairro=$_POST['denuncia_bairro'];
    $den_descricaoLocal=$_POST['denuncia_descricao'];
    $den_imagem=$_POST['denuncia_imagem'];

    if (empty($den_pontoReferencia)) {
      $den_pontoReferencia = "Não foi inserido";
    }

    if (empty($den_estado)) {
      $den_estado = "Não foi inserido";
    }

    if (empty($den_municipio)) {
      $den_municipio = "Não foi inserido";
    }

    if (empty($den_numResidencia)) {
      $den_numResidencia = "Não foi inserido";
    }

    if (empty($den_bairro)) {
      $den_bairro = "Não foi inserido";
    }

    if (empty($den_imagem)) {
      $den_imagem = "Não foi inserido";
    }

    if (empty($den_descricaoLocal)) {
      
    } else{
      $sql="INSERT INTO denuncia (den_pontoReferencia, den_estado, den_municipio, den_numResidencia, den_bairro, den_descricaoLocal, den_imagem) 
      VALUES ('$den_pontoReferencia','$den_estado','$den_municipio','$den_numResidencia','$den_bairro','$den_descricaoLocal','$den_imagem')";

      if(mysqli_query($conexao, $sql)){
        
      }else{
        echo "Erro".mysqli_connect_error($conexao);
      }
      mysqli_close($conexao);
    }
    
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Criar Relato - Connect Dengue</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="../images/icons/icon-152x152.png" rel="icon">
  <link href="../images/icons/icon-152x152.png" rel="apple-touch-icon">

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
        
        <h1 style="color: grey;">Connect Dengue</h1>
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

            <?php
              if (empty($den_descricaoLocal)) {
                echo "<br><h3 class='respostaRelato'>Lamento informar, mas ocorreu algum erro com sua denúncia, porfavor, insira os dados novamente</h3>";
                echo "<div id='centralizar'>
                        <a href='../denuncia.html'><input type='button' value='Refazer denúncia' id='criar'></a>
                      </div>";
              }else{
                echo "<h3 class='respostaRelato'>Denúncia concluído com sucesso!</h3>";
              }          
            ?>
                <br>
            </div>

            <a id="cor" href="../denuncia.html"><input type="button" value="Voltar" id="enviar"></a><br><br>

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
            <li><a href="../index.html">Home</a></li>
            <li><a href="../sobre.html">Sobre</a></li>
            <li><a href="../fontes.html">Fontes/Referências</a></li>
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
        Designed by <a href="#">ConnectDengue</a>
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
  <script src="../assets/js/main.js"></script>

</body>

</html>
