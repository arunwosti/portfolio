import React from 'react';
import './Contact.css';
import img1 from '../../assets/Home/mailz.jpeg';

export default function Contact() {
  return (
    <div className='main-container' id='contactme'>
<div class="heading-container">
    <div class="screen-heading">
        <span>Contact Me</span>
    </div>
    <div class="screen-sub-heading">
        <span>Lets Keep In Touch</span>
    </div>
    <div class="heading-seperator">
        <div class="seperator-line"></div>
        <div class="seperator-blob"><div>
    </div>
</div>
</div>
</div>
<div class="central-form">
    <div class="col">
        <h2 class="title">
            <p class="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
           
        </h2> 
        <div className='mycont mb-4'>
              <span>ostiarun55@gmail.com</span><br></br>
           <span><i className='fas fa-phone'></i> 9840135602</span> 
           
        </div>
        <a href="https://www.facebook.com/awroon.osti.50"><i class="fa fa-facebook-square"></i></a>
        <a href="#"><i class="fa fa-google-plus-square"></i></a>
        <a href="https://www.instagram.com/_awroon/"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-whatsapp"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
    </div>
<div class="back-form">
    <div class="img-back">
        <h4>Send Your Email Here!</h4>
        <img src={img1} alt="image not found"/>
    </div>
    <form>
        <p></p>
        <label for="name">Name</label><input type="text" value=""/>
        <label for="email">Email</label><input type="email" value=""/>
        <label for="message">Message</label><textarea type="text"></textarea>
        <div class="send-btn">
            <button type="submit">send<i class="fa fa-paper-plane"></i></button>
        </div>
    </form>
    </div>
    </div>
</div>
  )
}
