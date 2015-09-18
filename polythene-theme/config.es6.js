import materialColors from 'polythene-theme/deps/material-colors/colors';

const rgba = (color, opacity) => ('rgba(' + color + ',' + opacity + ')');

// Sizes
const gridUnit = 4;
const componentGridUnit = 8;
const buttonSize = 6 * componentGridUnit; // 48
const iconSize = 3 * componentGridUnit; // 24

// Colors
const lightPrimaryTextColor = rgba('0, 0, 0', .87);
const lightTextColor = rgba('0, 0, 0', .73);
const lightButtonLabelColor = rgba('0, 0, 0', .69);
const lightSecondaryTextAlpha = 0.54;
const lightSecondaryTextColor = rgba('0, 0, 0', lightSecondaryTextAlpha);
const lightTertiaryTextColor = rgba('0, 0, 0', .40);
const lightDisabledTextColor = rgba('0, 0, 0', .26);
const lightHintTextColor = lightDisabledTextColor;
const lightBorderColor = rgba('0, 0, 0', .11);
const lightHoverBackgroundAlpha = 0.08;
const lightHoverBackgroundColor = rgba('0, 0, 0', lightHoverBackgroundAlpha); // comparable to rgba(#999, .2)
const lightActiveBackgroundAlpha = 0.14;
const lightActiveBackgroundColor = rgba('0, 0, 0', lightActiveBackgroundAlpha);
const darkPrimaryTextColor = rgba('255, 255, 255', 1);
const darkTextColor = darkPrimaryTextColor;
const darkSecondaryTextAlpha = 0.7;
const darkSecondaryTextColor = rgba('255, 255, 255', darkSecondaryTextAlpha);
const darkButtonLabelColor = darkSecondaryTextColor;
const darkTertiaryTextColor = rgba('255, 255, 255', .4);
const darkDisabledTextColor = rgba('255, 255, 255', .26);
const darkHintTextColor = darkDisabledTextColor;
const darkBorderColor = rgba('255, 255, 255', .1);
const darkHoverBackgroundAlpha = 0.08;
const darkHoverBackgroundColor = rgba('255, 255, 255', darkHoverBackgroundAlpha);
const darkActiveBackgroundAlpha = 0.14;
const darkActiveBackgroundColor = rgba('255, 255, 255', darkActiveBackgroundAlpha);

export default {
    gridUnit: gridUnit,
    gridUnitPx: gridUnit + 'px',
    componentGridUnit: componentGridUnit,
    componentGridUnitPx: componentGridUnit + 'px',
    screenSizeExtraLarge: '1280px',
    screenSizeLarge: '960px',
    screenSizeMedium: '480px',
    screenSizeSmall: '320px',
    buttonHeight: '36px',
    buttonTouchHeight: '48px',
    buttonBorderRadius: '2px',
    buttonFontSize: '14px',
    buttonFontWeight: 500,
    surfaceReactionDuration: '.2s',
    lineHeight: '1.3em',
    buttonSize: buttonSize + 'px',
    iconSizeLarge: 5 * componentGridUnit + 'px', // 40
    iconSizeMedium: 4 * componentGridUnit + 'px', // 32
    iconSize: iconSize + 'px', // 24
    iconSizeSmall: 2 * componentGridUnit + 'px', // 16
    iconButtonPadding: (buttonSize - iconSize) / 2,
    indent: '72px',
    toolbarHeightDesktop: '64px',
    toolbarHeightMobilePortrait: '56px',
    toolbarHeightMobileLandscape: '48px',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSizeTitle: '20px',

    vendor: {
        transition: '_o$_moz$_webkit$'
    },

    color: {
        light: {
            button: {
                flat: {
                    normal: {
                        background: 'transparent',
                        color: lightPrimaryTextColor
                    },
                    hover: {
                        background: lightHoverBackgroundColor
                    },
                    active: {
                        background: lightActiveBackgroundColor
                    },
                    disabled: {
                        background: 'transparent',
                        color: lightDisabledTextColor
                    }
                },
                raised: {
                    normal: {
                        background: '#E0E0E0',
                        color: lightPrimaryTextColor
                    },
                    hover: {
                        background: 'transparent'
                    },
                    active: {
                        background: lightHoverBackgroundColor // same as :hover
                    },
                    disabled: {
                        background: rgba('0, 0, 0', .07),
                        color: lightDisabledTextColor
                    }
                }
            }
        },
        dark: {
            button: {
                flat: {
                    normal: {
                        background: 'transparent',
                        color: '#fff'
                    },
                    hover: {
                        background: darkHoverBackgroundColor
                    },
                    active: {
                        background: darkActiveBackgroundColor
                    },
                    disabled: {
                        background: 'transparent',
                        color: rgba('255, 255, 255', .3)
                    }
                },
                raised: {
                    normal: {
                        background: materialColors.blue[500],
                        color: darkPrimaryTextColor
                    },
                    hover: {
                        background: materialColors.blue[600]
                    },
                    active: {
                        background: materialColors.blue[700]
                    },
                    disabled: {
                        background: rgba('255, 255, 255', .12),
                        color: rgba('255, 255, 255', .3)
                    }
                }
            }
        }
    }
};
