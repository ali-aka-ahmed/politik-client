import React from 'react';
import backgroundTheme from '../../themes/containerBackgroundColor';
import tabTheme from '../../themes/tabTheme';
import headerTheme from '../../themes/headerTheme';

const styles = {
    container: backgroundTheme,
    header: {
        height: headerTheme.height,
        backgroundColor: headerTheme.backgroundColor,
        paddingBottom: headerTheme.paddingBottom
    },
    title: {
        fontSize: headerTheme.titleFontSize,
        width: 275,
        textAlign: 'center',
        fontWeight: headerTheme.titleFontWeight,
        color: headerTheme.textColor
    },
    amount: {
        fontSize: 20,
        width: 275,
        textAlign: 'center',
        fontWeight: '200',
        paddingTop: 2
    },
    tabText: {
        color: tabTheme.textColor,
        fontSize: tabTheme.fontSize
    },
    tabBackground: {
        backgroundColor: tabTheme.backgroundColor,
        height: tabTheme.height,
        top: 0
    },
    menuButton: {
        height: 12,
        width: 22,
    },
    tabUnderline: {
        backgroundColor: headerTheme.backgroundColor,
        // width: 187.5,
    }
};

export default styles;