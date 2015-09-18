import config from 'polythene-theme/config';
import mixins from 'polythene-theme/mixins';

const sizeRegular = 56;
const paddingRegular = 16;
const sizeMini = 40;
const defaultBackgroundColor = '#d23f31';
const defaultColor = '#fff';

const styles = [{
    '.fab': [
        mixins.userSelectNone(), {
            'display': 'inline-block',
            'position': 'relative',
            'outline': 'none',
            'cursor': 'pointer',
            'z-index': 0,
            'width': sizeRegular + 'px',
            'height': sizeRegular + 'px',
            'padding': paddingRegular + 'px',
            'background': defaultBackgroundColor,
            'color': defaultColor,
            'border-radius': '50%',

            '.mini': {
                'width': sizeMini + 'px',
                'height': sizeMini + 'px',
                'padding': ((sizeMini - parseInt(config.iconSize, 10)) / 2) + 'px'
            },

            ' .content': {
                'border-radius': 'inherit'
            },
            ' .icon': {
                'pointer-events': 'none',
                'z-index': 3
            },
            ' .ripple': {
                'border-radius': 'inherit',
                'z-index': 2,
                ' .ripple-mask': {
                    'border-radius': 'inherit'
                }
            },
            ' .wash': {
                'background-color': 'transparent',
                'border-radius': 'inherit',
                'pointer-events': 'none',
                'z-index': 1,
                'transition': 'background-color ' + config.surfaceReactionDuration + ' ease-in-out'
            }
        }
    ]
}];

export default styles;
