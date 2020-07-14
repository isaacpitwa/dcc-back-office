import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavItem(props) {
    return (
        <div style={{display:'flex',alignItems:'baseline'}}>
           <div><p style={{margin:'0',color:'black'}}>{props.title}</p></div> 
           <div style={{flex: 1,textAlign: 'end'}}><FontAwesomeIcon icon={props.icon}/></div>
        </div>
    )
}
export default  NavItem