import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
} from 'framework7-react';

const PersonPage = () => (
  <Page name="person">
    {/* Top Navbar */}
    <Navbar sliding={false}>
      <NavLeft>
        <Link></Link>
      </NavLeft>
      <NavTitle sliding>Profile</NavTitle>
      <NavRight>
         <Link></Link>
      </NavRight>
    </Navbar>

    <div className="empty-box-nav"></div>
    <div className="empty-box-white"></div>

    {/* Page content */}
    <div className="main-content">
   </div>
  </Page>
);
export default PersonPage;