import config from 'polythene-theme/config';

const iconSize = (size = config.iconSize) => ({
    width: size,
    height: size
});

const styles = [{
    '.icon': [
        iconSize(), {
            'display': 'inline-block',
            'vertical-align': 'middle',
            'background-repeat': 'no-repeat',
            'fill': 'currentcolor',
            'position': 'relative',
            ' .fit': {
                'height': '100%'
            },
            '&.avatar img': {
                'border-radius': '50%',
                'width': '100%',
                'height': '100%'
            },
            ' i': {
                'display': 'block',
                'font-size': 'inherit',
                'color': 'inherit',
                'line-height': 'inherit',
                ' img': {
                    height: '100%'
                },
                ' svg': {
                    'width': '100%',
                    'height': '100%',
                    'fill': 'currentcolor',
                    'color': 'inherit',
                    ' path:not([fill=none])': {
                        'fill': 'currentcolor'
                    }
                }
            },
            '&.icon-small': iconSize(config.iconSizeSmall),
            '&.icon-medium': iconSize(config.iconSizeMedium),
            '&.icon-large': iconSize(config.iconSizeLarge)
        }
    ]
}];

export default styles;
