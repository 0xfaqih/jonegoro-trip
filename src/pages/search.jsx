import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
} from 'framework7-react';

const SearchPage = () => (
  <Page name="search">
    {/* Top Navbar */}
    <Navbar sliding={false}>
      <NavLeft>
        <Link></Link>
      </NavLeft>
      <NavTitle sliding>Search</NavTitle>
      <NavRight>
         <Link></Link>
      </NavRight>
    </Navbar>

    <div className="empty-box-nav"></div>
    <div className="empty-box-white"></div>

    {/* Page content */}
    <div className="main-content">
      <p>j</p>
   </div>
  </Page>
);
export default SearchPage;