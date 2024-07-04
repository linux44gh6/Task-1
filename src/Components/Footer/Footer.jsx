import React from 'react';
import light from '../../assets/light.png'
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer bg-[#020043] text-[#FFFFF5]  p-10 mt-40">
  <aside>
    <img src={light} alt="" />
    <p>
    123 Main Street Anytown, USA <br /> Postal Code: 12345
    </p>
    <p>
Support: support@oyolloo.com <br />
(Available : 10:00am to 07:00pm)
    </p>
  </aside>
  <nav>
    
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Success Page    </a>
    <a className="link link-hover">Terms and condition</a>
  </nav>
  <nav>
   
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Scheduling</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Patient Porta</a>
  </nav>
  <nav>
   
    <a className="link link-hover">Follow Us</a>
   <span className='flex gap-1 text-2xl'>
    <FaFacebook></FaFacebook>
    <FaInstagram></FaInstagram>
    <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
    <AiOutlineYoutube></AiOutlineYoutube>

   </span>
    <a className="link link-hover">@docplus 202</a>
  </nav>
</footer>
    );
};

export default Footer;