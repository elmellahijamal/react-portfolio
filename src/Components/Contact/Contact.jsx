import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "432c8f7b-23f1-4335-a6fc-27023b336ff7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='container'>
      <section className='header'>
    <h2>Contact me</h2>
      <div className="line"></div>
      </section>
        
        <div className="contactme">
        
          <section className="getintouch">
          <div className="contact-info">
          <h3>Get in Touch :</h3>
            <p><span>Email :</span> mjamalelmellahi@gmail.com</p>
            <p><span>Phone :</span> +212636564087</p>
          </div>
          <div className="social-media">
            <h3>Social Media : </h3>
            <a href='https://www.linkedin.com/in/jamal-el-mellahi/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='icon'/> LinkedIn</a>
            <br /><br />
            <a href='https://github.com/elmellahijamal' target='_blank'><FontAwesomeIcon icon={faGithub} className='githubicon'/> GitHub</a>
            <br />
            <a href="src/assets/files/CVMOHAMEDJAMALELMELLAHI.PDF" download className='download-link'>
            <button id='resume'>Get my Resume <FontAwesomeIcon icon={faFilePdf} /></button>
            </a>
          </div>
          </section>

          <section className="sendform">
            <form onSubmit={onSubmit}>
              <h1>Email Me</h1>
              <div className="input-box">
                <label>Name : </label>
                <input type="text" name='name' placeholder='Enter Your name' className='field'/>
              </div>
              <div className="input-box">
              <label>Email : </label>
                <input type="text" name='email' placeholder='Enter Your Email' className='field'/>
              </div>
              <div className="input-box">
                <label>Your Message :</label>
                <textarea name='message' placeholder='Enter Your Message' className='field mes'></textarea>
              </div>
              <button type='submit'>Send</button>
            </form>
          </section>
        </div>

    </div>
  )
}

export default Contact