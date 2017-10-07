import React from 'react';
import backgroundTheme from '../../themes/containerBackgroundColor';
import headerTheme from '../../themes/headerTheme';

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
        height: headerTheme.height,
        backgroundColor: headerTheme.backgroundColor,
        paddingBottom: headerTheme.paddingBottom
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
    }
};

export default styles;