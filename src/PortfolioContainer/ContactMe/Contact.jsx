import React from 'react';
import './Contact.css';
import img1 from '../../assets/Home/mailz.jpeg';
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            'service_sx6ylv8', // gmail id
            'template_c1cwm0r', // templateid
            e.target,
            'ywoK4eXQDCk0jYOQs'//emailjs userid
            
            ).then(res=>{
                console.log(res);
                alert('email sent');
            }).catch(err => console.log(err));
    }
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
    <form onSubmit={sendEmail}>
        <p></p>
        <label >Name</label><input type="text" name='name'/>
        <label >Email</label><input type="email" name='email' />
        <label >Message</label><textarea type="text" name='message'></textarea>
        
            <button type="submit" >send<i class="fa fa-paper-plane"></i></button>
        
    </form>
    </div>
    </div>
</div>
  )
}
