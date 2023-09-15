// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

import './index.css'

const Layout = () => (
  <div className="layout_container">
    <div className="responsive-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
