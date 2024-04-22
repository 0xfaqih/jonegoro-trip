import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  Searchbar,
  NavRight,
  Link,
} from 'framework7-react';

import SearchBar from './components/searchbar';


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
   
    <div className="search-bar-container">
    <SearchBar/>
   </div>

   
  </Page>
);

export default SearchPage;