import config from 'polythene-theme/config';
import mixins from 'polythene-theme/mixins';

const styles = {
    '&.selected, &[disabled]': {
        'cursor': 'default',
        'pointer-events': 'none'
    },
    ' .content': {
        'position': 'relative',
        'border-radius': 'inherit',
        ' .label': [
            mixins.fontSmoothing(), {
                'position': 'relative',
                'display': 'block',
                'border-radius': 'inherit',
                'z-index': 2, // to make it float above .wash and .ripple
                'pointer-events': 'auto'
            }
        ]
    },
    ' .ripple': {
        'border-radius': 'inherit',
        'z-index': 3
    },
    ' .wash': {
        'z-index': 1,
        'border-radius': 'inherit',
        'pointer-events': 'none',
        [config.vendor.transition]: {
            'transition': 'background-color ' + config.surfaceReactionDuration + ' ease-in-out'
        }
    }
};

export default styles;
