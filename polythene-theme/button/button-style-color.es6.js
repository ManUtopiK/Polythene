import config from 'polythene-theme/config';

const style = (tint, element, type) => {
    return {
        'color': config.color[tint][element][type].normal.color,
        ' .content': {
            'background-color': config.color[tint][element][type].normal.background
        },

        '&[disabled]': {
			'color': config.color[tint][element][type].disabled.color,
            ' .content': {
                'background-color': config.color[tint][element][type].disabled.background
            }
        },

        '&:active, &.selected': {
            ' .wash': {
                'background-color': config.color[tint][element][type].active.background
            }
        }
    };
};

const noWash = (tint, element, type) => {
	return {
		' .wash': {
			'background-color': config.color[tint][element][type].hover.background
		}
	};
};

const styles = [
	{
		'.button': style('light', 'button', 'flat')
	},
	{
		'html.no-touch .button:hover': noWash('light', 'button', 'flat')
	},
	{
		'.button.raised': style('light', 'button', 'raised')
	},
	{
		'html.no-touch .button.raised:hover': noWash('light', 'button', 'raised')
	},
	{
		'.dark-theme .button': style('dark', 'button', 'flat')
	},
	{
		'.dark-theme .button.raised': style('dark', 'button', 'raised')
	},
	{
		'html.no-touch .dark-theme .button:hover': noWash('dark', 'button', 'flat')
	},
	{
		'html.no-touch .dark-theme .button.raised:hover': noWash('dark', 'button', 'raised')
	}
];

export default styles;
