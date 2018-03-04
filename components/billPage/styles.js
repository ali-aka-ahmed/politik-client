import React from 'react';
import backgroundTheme from '../../themes/containerBackgroundColor';
import itemTheme from '../../themes/itemTheme';
import tabTheme from '../../themes/tabTheme';
import headerTheme from '../../themes/headerTheme';

const styles = {
    container: backgroundTheme,
    header: {
        height: headerTheme.height
    },
    title: {
        fontSize: itemTheme.titleFontSize,
        width: 275,
        textAlign: 'center',
        fontWeight: itemTheme.titleFontWeight,
        color: itemTheme.textColor
    },
    subheading: {
        fontSize: itemTheme.subheadingFontSize,
        width: 275,
        textAlign: 'center',
        color: itemTheme.textColor,
        fontWeight: itemTheme.subheadingFontWeight,
        paddingTop: itemTheme.subheadingPaddingTop,
        paddingBottom: itemTheme.paddingBottom,
        opacity: 0.7
    },
    backArrow: {
        height: 22,
        width: 22,
        marginLeft: 10,
    },
    tabText: {
        color: tabTheme.textColor,
        fontSize: tabTheme.fontSize
    },
    tabBackground: {
        backgroundColor: tabTheme.backgroundColor
        // height: tabTheme.height
    },
    tabUnderline: {
        backgroundColor: headerTheme.backgroundColor,
        // width: 187.5,
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    }
};

export default styles

