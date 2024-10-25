import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ce9322d0-2f50-4809-b3e7-40a40a0e8fbb");
  
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
    <div className='contact'>
        <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to reach out to us! We are here to provide you with comprehensive support and guidance every step of the way. Let us help you navigate the admission process and make your educational dreams a reality.</p>
        <ul>
            <li><img src={mail_icon} alt="" />@gmail.com</li>
            <li><img src={phone_icon} alt="" />+92 320-9093025</li>
            <li><img src={location_icon} alt="" />Haripur,Pakistan</li>
        </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter our name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message"rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact