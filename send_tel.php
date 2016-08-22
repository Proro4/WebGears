  <link rel="stylesheet" type="text/css" href="css/style.css">
<?
  if (isset($_POST['name']) && isset($_POST['tel']) )  {
 
     if (empty($_POST['name']) || empty($_POST['tel'])) {
   
       echo "
        <div class='send-page'>
          <div class='container'>
            <div class='row'>
              <div class=' header-send'>
                <div class='main-container' id='home'>
                  <a href='#' class='logo'><img src='img/logo.png' alt=''><b>web’s gears</b></a>
                </div>
              </div>
              <div class='send-message'>
                <p class='sent-title'>Благодарим вас за внимание к нашей продукции!</p>
                <p class='send-text'>Нажаль, ваше сообщение не было отправлено, попробуйте вернутся на главную страницу и отправить заново.</p>
              </div>
                <div class='tb-info-buttom'>
                    <a href='#' class='but-blue'>
                      <p>вернуться назад</p>
                    </a>
                 </div>
            </div>
          </div>
        </div>
       ";

    } else {

      $name = strip_tags($_POST['name']);

      $telephone = strip_tags($_POST['tel']);


      

       $to = "sales@websgears.com";

       $charset = "utf-8";

       $subject = "New massage";

       $content = "text/plain";

       $message = "Name: $name \n\nTel: $tel";

      

       $send = mail($to, $subject, $message);

       echo "
        <div class='send-page'>
          <div class='container'>
            <div class='row'>
              <div class=' header-send'>
                <div class='main-container' id='home'>
                  <a href='#' class='logo'><img src='img/logo.png' alt=''><b>web’s gears</b></a>
                </div>
              </div>
              <div class='send-message'>
                <p class='sent-title'>Благодарим вас за внимание к нашей продукции!</p>
                <p class='send-text'>Ваша заявка будет обработана в ближайшее время и наш менеджер свяжется с Вами для уточнения Вашего заказа.</p>
              </div>
                <div class='tb-info-buttom'>
                    <a href='#' class='but-blue'>
                      <p>вернуться назад</p>
                    </a>
                 </div>
            </div>
          </div>
        </div>
       ";
     }

   } else {

    echo "
        <div class='send-page'>
          <div class='container'>
            <div class='row'>
              <div class=' header-send'>
                <div class='main-container' id='home'>
                  <a href='#' class='logo'><img src='img/logo.png' alt=''><b>web’s gears</b></a>
                </div>
              </div>
              <div class='send-message'>
                <p class='sent-title'>Благодарим вас за внимание к нашей продукции!</p>
                <p class='send-text'>Нажаль, ваше сообщение не было отправлено, попробуйте вернутся на главную страницу и отправить заново.</p>
              </div>
                <div class='tb-info-buttom'>
                    <a href='#' class='but-blue'>
                      <p>вернуться назад</p>
                    </a>
                 </div>
            </div>
          </div>
        </div>
    ";
  }

?>
