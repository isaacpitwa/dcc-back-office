import React from 'react'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

const itemProps = {
    //  backgroundColor: 'mono300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
};
const wideItemProps = {
    ...itemProps,
    overrides: {
        Block: {
            style: ({ $theme }) => ({
                width: `calc((200% - ${$theme.sizing.scale800}) / 5)`,
                flexDirection: 'column'
            }),
        },
    },
};

const imageProps = {
    ...itemProps,
    overrides: {
        Block: {
            style: ({ $theme }) => ({
                width: `calc((200% - ${$theme.sizing.scale800}) / 15)`,
                justifyContent: 'flex-start',
            }),
        },
    },
};

const  Auth=(props)=> {
    const { children } = props;
    return (
        <FlexGrid
            flexGridColumnCount={3}
            flexGridColumnGap="scale500"
            flexGridRowGap="scale500">
                <FlexGridItem {...imageProps}>
                    <img
                    alt="Vector Algebra & The scientific Method"
                        src={'https://firebasestorage.googleapis.com/v0/b/hozybook-7c2af.appspot.com/o/kari-shea-vGgaESc2M1Y-unsplash.jpg?alt=media&token=f0cccbb6-d574-47ef-832e-c30201022f1b'} style={{width:'100%',height:'100%'}} />
                </FlexGridItem>

                <FlexGridItem {...wideItemProps}>
                    {children}
                </FlexGridItem>
                <FlexGridItem display="none">
                    This invisible one is needed so the margins line up
                </FlexGridItem>
            </FlexGrid>
    )
}
export default Auth
