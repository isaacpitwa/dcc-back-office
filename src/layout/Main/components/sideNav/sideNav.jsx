import React,{ useState } from 'react';
import { Navigation } from 'baseui/side-navigation';
import { useHistory } from "react-router-dom";
import {NavItem} from '../../../../components'
import {faTh,faCog,faUsers} from '@fortawesome/free-solid-svg-icons'
//  import {faCog,} from '@fortawesome/free-brands-svg-icons'
import {faFolder,faHdd,faFile} from '@fortawesome/free-regular-svg-icons'




const nav = [
  {
    title: <NavItem title = 'Dashboard' icon={faTh}/>,
    itemId: '/',
    
  },
  {
    title: <NavItem title = 'Events' icon={faHdd}/>,
    itemId: '/dashboard/courses',
  },
  {
    title:  <NavItem title = 'Sermons' icon={faFile}/>,
    itemId: '/dashboard/tests',
  },
  {
    title: <NavItem title = 'Donation Request' icon={faUsers}/>,
    itemId: '/dashboard/classes',
  },
  {
    title: <NavItem title = 'FacebookPost' icon={faFolder}/>,
    itemId: '/dashboard/resources',
  },
  {
    title: <NavItem title = 'Twitter' icon={faFolder}/>,
    itemId: '/dashboard/resources',
  },
  {
    title: <NavItem title = 'Instagram' icon={faFolder}/>,
    itemId: '/dashboard/resources',
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