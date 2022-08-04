<style>
  #footer .php-email-form button[type=submit] {
  background:#0d6efd;
  border: 0;
  border-radius: 3px;
  padding: 8px 30px;
  color: #fff;
  transition: 0.3s;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background:#0d6efd;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background:  #f1ac40;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}


#footer .footer-top .social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background:#0d6efd;
  color: #fff;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background:  #f1ac40;
  color: #fff;
}

#footer .footer-top .footer-links ul a:hover {
  color: #82f6ab;
}


.description {
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 0;
  text-align: justify;
  text-justify: inter-word;
  text-indent: 25px;
}























</style>
  <!-- ======= Footer ======= -->
  <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">

        <div class="row">

          <div class="col-lg-6">

            <div class="row">

              <div class="col-sm-6">

                <div class="footer-info">
                  <h3>POSO </h3>
                  <p>promotes public order, security, and peace in the City. It is mandated to maintain orderliness through the strict implementation of all existing rules governing land use as well as other rules related to the maintenance of peace and order.</p>
                </div>

                <div class="description">
                  <h4>FUNCTIONAL STATEMENTS</h4>
                  <p>For the purpose of providing an effective traffic and transportation management in the city development of a scheme is imperative in consonance with the City Ordinance No. 511, S. 2011 known as the 2011 Calamba City Traffic Code. <br>
                 <br> To enforce/implement national laws and local ordinances that may contribute to the City’s objective in having a disciplined society, safe environment, effective traffic management.</p>
                  
                </div>

              </div>

              <div class="col-sm-6">
                <div class="footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#services">Features</a></li>
                
                    <li><a href="#">Privacy policy</a></li>
                  </ul>
                </div>

                <div class="footer-links">
                  <h4>Contact Us</h4>
                  <strong>Department Head: </strong>Mr. Jeffrey Rodriguez
                  <strong>Address:</strong>2nd Floor, CDRRM Bldg., New City Hall Compound
                  <br><br>
                    <strong>Tel no.:</strong> 545-6789<br>
                    <strong>Email:</strong> : poso@calambacity.gov.ph <br>
                  </p>
                </div>

                <div class="social-links">
                  <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                 
                </div>

              </div>

            </div>

          </div>

          <div class="col-lg-6">

            <div class="form">

              <h4>Send us a message</h4>
              <p>Feel free to contact us!</p>

              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>

                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>

                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
              </form>

            </div>

          </div>

        </div>

      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>POSO</strong>. All Rights Reserved
      </div>
     
    </div>
  </footer><!-- End  Footer -->