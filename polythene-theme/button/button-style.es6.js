import config from 'polythene-theme/config';
import mixins from 'polythene-theme/mixins';
import effects from 'polythene-theme/button/button-style-effects';

const marginV = config.gridUnitPx;
const paddingH = ((parseInt(config.buttonTouchHeight, 10) - parseInt(config.buttonHeight, 10)) / 2);

const styles = [
	{
		'.button': [
			mixins.userSelectNone(),
			effects,
			{
				'display': 'inline-block',
				'min-width': 8 * config.componentGridUnit + 'px',
				'height': config.buttonTouchHeight,
				'margin': '0 ' + marginV,
				'padding': paddingH + 'px 0',
				'background': 'transparent',
				'text-align': 'center',
				'font': 'inherit',
				'outline': 'none',
				'cursor': 'pointer',
				'border': 'none',
				'border-radius': config.buttonBorderRadius,

				' .content': {
					'height': config.buttonHeight,
					'padding': '0 ' + 2 * parseInt(config.gridUnitPx, 10) + 'px',

					' .label': {
						'line-height': config.buttonHeight,
						'font-size': config.buttonFontSize,
						'font-weight': config.buttonFontWeight,
						'text-transform': 'uppercase',
						'white-space': 'pre'
					}
				}
			}
		]
	}
];

export default styles;
