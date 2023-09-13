// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body_container">
          {showLeftNavbar ? (
            <div className="left_navbar">
              <h1 className="body_header_text">Left Navbar Menu</h1>
              <ul className="list_items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="body_header_text">content</h1>
              <p className="content_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right_navbar">
              <h1 className="body_header_text">Right Navbar Menu</h1>
              <div className="ad_box_container">
                <p className="ad_box">Ad 1</p>
                <p className="ad_box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
