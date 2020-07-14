import React,{ useState } from 'react';
import { Navigation } from 'baseui/side-navigation';
import { useHistory } from "react-router-dom";
import {NavItem} from '../../../../components'
import {faTh,faCog,faUsers,faAd,faDonate,faFilm} from '@fortawesome/free-solid-svg-icons'
 import {faFacebookF,faTwitter,faInstagram,} from '@fortawesome/free-brands-svg-icons'
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons'




const nav = [
  {
    title: <NavItem title = 'Dashboard' icon={faTh}/>,
    itemId: '/',
    
  },
  {
    title: <NavItem title = 'Events' icon={faCalendarAlt}/>,
    itemId: '/dashboard/events',
  },
  {
    title:  <NavItem title = 'Sermons' icon={faFilm}/>,
    itemId: '/dashboard/sermons',
  },
  {
    title: <NavItem title = 'Ministries' icon={faUsers}/>,
    itemId: '/dashboard/donation',
  },
  {
    title: <NavItem title = 'Donations' icon={faDonate}/>,
    itemId: '/dashboard/donation',
  },
  {
    title: <NavItem title = 'Adverts' icon={faAd}/>,
    itemId: '/dashboard/ads',
  },
  {
    title: <NavItem title = 'Facebook ' icon={faFacebookF}/>,
    itemId: '/dashboard/facebook-post',
  },
  {
    title: <NavItem title = 'Twitter' icon={faTwitter}/>,
    itemId: '/dashboard/twitter-post',
  },
  {
    title: <NavItem title = 'Instagram' icon={faInstagram}/>,
    itemId: '/dashboard/instagram-post',
  },
  {
    title: <NavItem title = 'Settings' icon={faCog}/>,
    itemId: '/dashboard/settings',
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