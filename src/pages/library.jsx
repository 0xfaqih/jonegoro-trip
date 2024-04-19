import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
} from 'framework7-react';

const LibraryPage = () => (
  <Page name="library">
    {/* Top Navbar */}
    <Navbar sliding={false}>
      <NavLeft>
        <Link></Link>
      </NavLeft>
      <NavTitle sliding>Library</NavTitle>
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
export default LibraryPage;