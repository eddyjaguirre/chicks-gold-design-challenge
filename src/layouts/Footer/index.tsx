import './style.scss';
import logo from '../../assets/chicks-logo-large.svg';

import visa from '../../assets/payment-methods/visa.svg';
import mastercard from '../../assets/payment-methods/mastercard.svg';
import amex from '../../assets/payment-methods/amex.svg';
import skrill from '../../assets/payment-methods/skrill.svg';
import crypto from '../../assets/payment-methods/crypto.svg';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import discord from '../../assets/icons/discord.svg';

import trustpilot from '../../assets/icons/trust-pilot-5-star.svg';

function Footer() {
  const paymentMethods = [
    visa, mastercard, amex, skrill, crypto
  ]
  const social = [,
    facebook, instagram, twitter, discord
  ]
  const sections = [
    {
      title: 'Chicks Gold',
      submenu: [
        'Games',
        'About Us',
        'Blog',
        'Sitemap'
      ]
    },
    {
      title: 'Support',
      submenu: [
        'Contact Us',
        'FAQ',
      ]
    },
    {
      title: 'Legal',
      submenu: [
        'Privacy Policy',
        'Terms of Service',
        'Copyright Policy'
      ]
    },
  ]
  return(
    <footer className='footer'>
      <div className="footer__top">
        <div className="container">
          <ul>
            {
              paymentMethods.map((item) => {
                return(
                  <li>
                    <img src={item} />
                  </li>
                )
              })
            }
            <li>and 50+ more</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__social">
            <ul>
              {
                social.map((item) => {
                  return(
                    <li>
                      <img src={item} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="footer__bottom-container">
            <div>
              <img src={logo} alt="Chicks Gold Logo"/>
              <p>support@chicksgold.com</p>
            </div>
            {
              sections.map(section => {
                return (
                  <div className='footer__bottom-menu'>
                    <h6>{section.title}</h6>
                    <ul>
                      {
                        section.submenu.map(sub => {
                          return (
                            <li>{sub}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
            <div>
              <div className="footer__trustpilot">
                <img src={trustpilot} alt="trustpilot" />
                <p>Trustpilot reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;