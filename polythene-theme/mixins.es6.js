export default {

	boxSizing: (type = 'border-box') => ({
		'box-sizing': type
	}),

	fit: () => ({
		'position': 'absolute',
		'top': 0,
		'right': 0,
		'bottom': 0,
		'left': 0
	}),

	userSelectNone: () => ({
		'user-select': 'none',
		'-webkit-user-select': 'none',
		'-ms-user-select': 'none'
	}),

	fontSmoothing: (smoothing = true) => {
		if (smoothing) {
			return {
				'-webkit-font-smoothing': 'antialiased',
				'-moz-osx-font-smoothing': 'grayscale'
			};
		} else {
			return {
				'-webkit-font-smoothing': 'subpixel-antialiased',
				'-moz-osx-font-smoothing': 'auto'
			};
		}
	},

	singleLine: () => ({
		'white-space': 'nowrap',
		'overflow': 'hidden',
		'text-overflow': 'ellipsis'
	}),

	hairline: (which) => ({
	// does not work in Chrome

	// #{$which}-width: 1px;
	// @media screen and (min-resolution: 2dppx) {
	//     #{$which}-width: 0.5px;
	// }
	}),

	verticalCenter: (position = 'relative') => ({
		'position': position,
		'top': '50%',
		'transform': 'translateY(-50%)'
	}),

	verticalCenterParent: () => ({
		'transform-style': 'preserve-3d'
	})
};
