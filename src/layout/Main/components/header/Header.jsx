/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Search , Plus} from 'baseui/icon';
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Button, KIND,SIZE } from 'baseui/button';
import Upload from 'baseui/icon/upload';
import {Avatar} from 'baseui/avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faComment} from '@fortawesome/free-regular-svg-icons'
import {StatefulPopover, PLACEMENT,TRIGGER_TYPE} from 'baseui/popover';
import {StatefulMenu} from 'baseui/menu';
import {
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from "baseui/header-navigation";
import './header.css'
import { useHistory } from "react-router-dom";
import * as ROUTES from '../../../../utils/constants/routes'

const ITEMS = [
    {label: 'Sermon',url:ROUTES.NEW_SERMON},
    {label: 'Event',url:ROUTES.NEW_EVENT},
    {label: 'Ministry',url:ROUTES.NEW_MINISTRY},
    {label: 'Support Donation',url:ROUTES.NEW_DONATION},
    {label: 'Facebook Post',url:ROUTES.NEW_FACEBOOK},
    {label: 'Twitter Post',url:ROUTES.NEW_TWITTER},
    {label: 'Instagram Post',url:ROUTES.NEW_INSTAGRAM},

  ];
const Header = () => {
    let history = useHistory();
    return (
        <nav >
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem><img src='./img/core-img/logo.png' alt="DCC"></img></StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>
                   <Block>
                   <Input
                        className="search"
                        overrides={{
                            After,
                            InputContainer:{
                                style:{
                                    borderRadius:'4px'
                                }
                            }
                        }} placeholder="Search"
                        size='compact'
                    />
                   </Block>
                    

                </StyledNavigationItem>
               

            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right} >
                <StyledNavigationItem>
                <StatefulPopover
                focusLock
                placement={PLACEMENT.bottom}
                triggerType={TRIGGER_TYPE.hover}
                content={({close}) => (
                    <StatefulMenu
                        items={ITEMS}
                        onItemSelect={(item) => {
                            close();
                            history.push(item.item.url)
                        }}
                        overrides={{
                        List: {style: { width: '132px'}},
                        }}
                    />
                )}>
    <Button startEnhancer={() => <Plus size={24} />}  size={SIZE.compact} overrides={{BaseButton:{
        style:{
            marginRight:'21px',
            borderRadius:'4px'
        }
    }}}>
      Create New
    </Button>
  </StatefulPopover>
                    <Button kind={KIND.tertiary}>
                        <Upload />
                    </Button>
                    <Button kind={KIND.tertiary}>
                    <FontAwesomeIcon icon={faBell} />
                    </Button>
                    <Button kind={KIND.tertiary}>
                    <FontAwesomeIcon icon={faComment} />
                    </Button>
                    <Avatar
                    name={`user`}
                    size={'scale900'}
                    src={`https://api.adorable.io/avatars/285/${5}@adorable.io.png`}
                    key={'profile '}/>
                </StyledNavigationItem>
            </StyledNavigationList>
        </nav>

    );
    function After() {
        const [css, theme] = useStyletron();
        return (
            <div
                className={css({
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: theme.sizing.scale500,
                    
                })}
            >
                <Search size="18px" />
            </div>
        );
    }
}

export default Header;
