import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  BlockHeader
} from 'framework7-react';

import CardActivities from './components/card-activities';
import CardRecom from './components/card-recom';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={false}>
      <NavLeft>
        <Link></Link>
      </NavLeft>
      <NavTitle sliding>Home</NavTitle>
      <NavRight>
        <Link iconIos="f7:notifications" iconMd="material:notifications" color='white' />
      </NavRight>
    </Navbar>

    <div className="empty-box-nav">
    </div>

    {/* Page content */}
    <div className="main-content">
      <div className="title-home">
        <h1 className='title-main'>Jonegoro Trip</h1>
        <p className='title-desc'>Lets Explore Together</p>
      </div>

      {/* kegiatan */}
      <div id='card-activities-container'>
        <CardActivities/>
        <CardActivities/>
        <CardActivities/>
      </div>

      {/* wisata */}
      <div id='card-recom-container'>
        <div className='recom-header'>
          <h1 className='recom-title'>Rekomendasi</h1>
          <p>Tampilkan Semua</p>
        </div>

        <CardRecom/>
        <CardRecom/>
        <CardRecom/>
      </div>
    </div>
  </Page>
);
export default HomePage;