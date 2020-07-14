import React,{ useState } from 'react';
import { Navigation } from 'baseui/side-navigation';
import { useHistory } from "react-router-dom";
import {NavItem} from '../../../../components'
import {faTh,faCog,faUsers,faAd,faDonate,faFilm} from '@fortawesome/free-solid-svg-icons'
 import {faFacebookF,faTwitter,faInstagram,} from '@fortawesome/free-brands-svg-icons'
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import * as ROUTES from '../../../../utils/constants/routes' 



const nav = [
  {
    title: <NavItem title = 'Dashboard' icon={faTh}/>,
    itemId: ROUTES.DASHBOARD,
    
  },
  {
    title: <NavItem title = 'Events' icon={faCalendarAlt}/>,
    itemId: ROUTES.EVENTS,
  },
  {
    title:  <NavItem title = 'Sermons' icon={faFilm}/>,
    itemId: ROUTES.SERMONS,
  },
  {
    title: <NavItem title = 'Ministries' icon={faUsers}/>,
    itemId: ROUTES.MINISTRIES,
  },
  {
    title: <NavItem title = 'Donations' icon={faDonate}/>,
    itemId: ROUTES.DONATIONS,
  },
  {
    title: <NavItem title = 'Adverts' icon={faAd}/>,
    itemId: ROUTES.ADS,
  },
  {
    title: <NavItem title = 'Facebook ' icon={faFacebookF}/>,
    itemId: ROUTES.FACEBOOK,
  },
  {
    title: <NavItem title = 'Twitter' icon={faTwitter}/>,
    itemId: ROUTES.TWITTER,
  },
  {
    title: <NavItem title = 'Instagram' icon={faInstagram}/>,
    itemId: ROUTES.INSTAGRAM,
  },
  {
    title: <NavItem title = 'Settings' icon={faCog}/>,
    itemId: ROUTES.SETTINGS,
  },
  
];


export default () => {
  const [location, setLocation] = useState('/');
  let history = useHistory();
  return (
    <Navigation
      items={nav}
      activeItemId={location}
      onChange={({ event,item }) => { 
        event.preventDefault();
        setLocation(item.itemId)
        history.push(item.itemId)}}
        overrides={{
          Root:{
            style:{
              height:'100vh',
              width:'20%',
            },
           
          },
          NavItemContainer:{
            style:{
              width:'140%',
            }
          }
        }}
    />
  );
};