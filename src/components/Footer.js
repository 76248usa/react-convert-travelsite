import React from 'react'
import {pageLinks, socialLinks} from '../data'

function Footer() {
  return (
    <footer className="section footer">
    <ul className="footer-links">
      {pageLinks.map((link) => {
        return  <li key={link.id}>
        <a href={link.href} class="footer-link">{link.text}</a>
      </li>
      })}
     
    </ul>
    <ul class="footer-icons">
    {socialLinks.map((link) => {
      const {id, icon, href} = link;
      return <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" class="footer-icon"
        ><i class={icon}></i
      ></a>
    </li>
    })}
    </ul> 
    
    <p class="copyright">
    copyright &copy; Backroads travel tours company
    <span id="date">{new Date().getFullYear()}</span> all rights reserved
    <p>AppsByElsabe</p>
  </p>


  </footer>
  )
}

export default Footer