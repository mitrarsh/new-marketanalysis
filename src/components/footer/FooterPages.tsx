
import { Link } from 'react-router-dom'
const FooterPages = () => {
  return (
    <div className='footer-pages'>
        <h2>Pages</h2>
        <ul>
          <Link className='link' to="/FAQs">FAQs</Link>
          <Link className='link' to="About-us">About us</Link>
          <Link className='link' to="/terms-and-conditions">Terms & Conditions</Link>
        </ul>
    </div>
  )
}

export default FooterPages