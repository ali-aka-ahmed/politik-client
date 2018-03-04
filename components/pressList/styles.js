import React from 'react';
import backgroundTheme from '../../themes/containerBackgroundColor';
import headerTheme from '../../themes/headerTheme';
import itemTheme from '../../themes/itemTheme';

const styles = {
    container: backgroundTheme,
    amount: {
    },
    listItemBody: {
        flex:1,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    header: {
        height: headerTheme.height
    },
    menuButton: {
        height: 12,
        width: 22,
    },
    title: {
        fontSize: 18,
        width: 275,
        textAlign: 'center',
        fontWeight: '500',
        color: 'white'
    },
    backArrow: {
        height: 22,
        width: 22,
        marginLeft: 10,
    }
};

export default styles;