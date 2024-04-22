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
import KayanganApi from './components/wisata-alam/kayangan-api';
import BanyuKuning from './components/wisata-alam/banyu-kuning';
import Growgoland from './components/wisata-alam/growgoland';
import TeksasWonocolo from './components/wisata-alam/teksas-wonocolo';

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

    <div className="empty-box-nav"></div>
    <div className="empty-box-white"></div>

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

        <KayanganApi/>
        <BanyuKuning/>
        <Growgoland/>
        <TeksasWonocolo/> 
        
      </div>
    </div>
  </Page>
);
export default HomePage;