// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationContext = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration_controls_container">
          <div className="responsive_controls_container">
            <h1 className="layout_heading">Layout</h1>
            <div className="checkbox_group">
              <div className="checkbox_container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label className="label_text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox_container">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                />
                <label className="label_text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox_container">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                />
                <label className="label_text" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController