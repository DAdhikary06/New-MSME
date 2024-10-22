import React from "react";

function Sidebar() {
  

  return (
    <nav
      id="sidebar"
      className='sidebar js-sidebar'
    >
      <div className="sidebar-content js-simplebar" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: 0 }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
              <div
                className="simplebar-content-wrapper"
                tabIndex="0"
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden" }}
              >
                <div className="simplebar-content" style={{ padding: 0 }}>
                  <a className="sidebar-brand" href="/">
                    <span className="sidebar-brand-text align-middle">
                      Stocks
                    </span>
                    <span className="sidebar-brand-text align-middle text-success">
                      Saver
                    </span>
                  </a>

                  <div className="sidebar-user">
                    <div className="d-flex justify-content-center">
                      <div className="flex-shrink-0">
                        {/* Uncomment and add image source if needed */}
                        {/* <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> */}
                      </div>
                    
                    </div>
                  </div>

                  <ul className="sidebar-nav">
                    <li className="sidebar-header">Pages<hr></hr></li>
                    
                    <li className="sidebar-item active">
                      <a className="sidebar-link" href="/dashboard">
                        <span className="align-middle">Dashboards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/company">
                        <span className="align-middle">Company</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/add-medicine">
                        <span className="align-middle">Add Medicine</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/manage-medicine">
                        <span className="align-middle">Manage Medicine</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/company-amount">
                        <span className="align-middle">Manage Company Amount</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/manage-employee">
                        <span className="align-middle">Manage Employee</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/generate-bill">
                        <span className="align-middle">Generate Bill</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/customer-request">
                        <span className="align-middle">Customer Request</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;