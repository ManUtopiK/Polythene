
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import button from 'polythene/button/button';
import icon from 'polythene/icon/icon';
import iconBtn from 'polythene/icon-button/icon-button';
import scrollTo from 'polythene/util/scrollto';
require('polythene-theme/tabs/tabs');

const SLIDE_DURATION = 250; // milliseconds
const SCROLL_DURATION = 380; // milliseconds
const POSITION_LEFT = (1 << 1);
const POSITION_RIGHT = (1 << 2);

const createScrollButton = (ctrl, position) => {
    return m.component(iconBtn, {
        class: ['scroll-btn', (position === POSITION_LEFT ? 'scroll-btn-left' : 'scroll-btn-right')].join(' '),
        icon: {
            svg: {
                name: position === POSITION_LEFT ? 'chevron-left' : 'chevron-right',
                iconSet: 'mdi'
            }
        },
        ripple: {
            center: true
        },
        config: (el, inited) => {
            if (inited) {
                return;
            }
            if (position === POSITION_LEFT) {
                ctrl.scrollButtonLeftEl = el;
            } else {
                ctrl.scrollButtonRightEl = el;
            }
        }
    });
};

const setTabMaxWidth = (ctrl) => {
    // use the smallest: tab max-width 264 or view width minus 56
    // this is really only for screens smaller than 320px
    const tabsElWidth = ctrl.tabsEl.getBoundingClientRect().width;
    const maxWidth = Math.min((tabsElWidth - 56), 264);
    ctrl.tabs.forEach(tab => tab.style.maxWidth = maxWidth + 'px');
};

const alignToTitle = (ctrl) => {
    const firstTab = ctrl.tabs[0];
    const firstInnerLabel = firstTab.querySelector('.label span');
    const firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
    const firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
    const firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
    firstTab.style.marginLeft = -firstTabOffset + 'px';
};

const createRightButtonOffset = (ctrl) => {
    // add padding to right so that last item is not hidden behind scroll button
    const scrollButtonRightWidth = ctrl.scrollButtonRightEl.getBoundingClientRect().width;
    const scrollButtonOffsetEl = ctrl.tabsEl.querySelector('.scrollButtonOffset');
    scrollButtonOffsetEl.style.width = scrollButtonRightWidth + 'px';
};

const scrollToTab = (tabIndex, tabs, scroller) => {
    const left = tabs.slice(0, tabIndex).reduce((width, el) => {
        return width + el.getBoundingClientRect().width;
    }, 0);
    scrollTo({
        element: scroller,
        to: left,
        duration: SCROLL_DURATION,
        which: 'scrollLeft'
    });
};

const updateScrolButtons = (ctrl) => {
    const scrollerEl = ctrl.scrollerEl;
    const scrollLeft = scrollerEl.scrollLeft;
    const currentTabIndex = ctrl.selectedTabIndex();
    const tabs = ctrl.tabs;
    const tabsEl = ctrl.tabsEl;
    const scrollButtonLeftEl = ctrl.scrollButtonLeftEl;
    const scrollButtonRightEl = ctrl.scrollButtonRightEl;
    const minTabIndex = 0;
    const maxTabIndex = tabs.length - 1;
    const isAtLeft = (scrollerEl.scrollLeft === 0) && (currentTabIndex === minTabIndex);
    const isAtRight = (scrollLeft >= (scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1)) && (currentTabIndex === maxTabIndex);
    if (isAtLeft && !ctrl.isLeft) {
        ctrl.isLeft = true;
        scrollButtonLeftEl.classList.add('inactive');
    } else if (!isAtLeft && ctrl.isLeft) {
        ctrl.isLeft = false;
        scrollButtonLeftEl.classList.remove('inactive');
    } else if (isAtRight && !ctrl.isRight) {
        ctrl.isRight = true;
        scrollButtonRightEl.classList.add('inactive');
    } else if (!isAtRight && ctrl.isRight) {
        ctrl.isRight = false;
        scrollButtonRightEl.classList.remove('inactive');
    }
};

const manageScroll = (ctrl, context) => {
    const minTabIndex = 0;
    const maxTabIndex = ctrl.tabs.length - 1;
    const tabs = ctrl.tabs;
    const scrollerEl = ctrl.scrollerEl;
    const scrollButtonLeftEl = ctrl.scrollButtonLeftEl;
    const scrollButtonRightEl = ctrl.scrollButtonRightEl;

    const getNewIndex = (index) => {
        return {
            left: Math.max(index - 1, minTabIndex),
            right: Math.min(index + 1, maxTabIndex)
        };
    };

    const handleClick = (e, direction) => {
        e.stopPropagation();
        e.preventDefault();
        const currentTabIndex = ctrl.selectedTabIndex();
        const newIndex = getNewIndex(currentTabIndex)[direction];
        scrollToTab(newIndex, tabs, scrollerEl);
        if (newIndex !== currentTabIndex) {
            console.log('setSelectedTab', newIndex);
            setSelectedTab(newIndex, true, ctrl);
            m.redraw();
        }
        updateScrolButtons(ctrl);
    };

    const onLeftScrollButtonClick = (e) => {
        handleClick(e, 'left');
    };
    const onRightScrollButtonClick = (e) => {
        handleClick(e, 'right');
    };
    const onScroll = () => {
        updateScrolButtons(ctrl);
    };

    createRightButtonOffset(ctrl);
    scrollButtonLeftEl.addEventListener('click', onLeftScrollButtonClick, false);
    scrollButtonRightEl.addEventListener('click', onRightScrollButtonClick, false);
    scrollerEl.addEventListener('scroll', onScroll);

    context.onunload = () => {
        scrollerEl.removeEventListener('scroll', onScroll);
        scrollButtonLeftEl.removeEventListener('click', onLeftScrollButtonClick, false);
        scrollButtonRightEl.removeEventListener('click', onRightScrollButtonClick, false);
    };
};

const setSelectedTab = (index, animate, ctrl) => {
    ctrl.selectedTabIndex(index);
    const selectedTabEl = ctrl.tabs[index];
    if (selectedTabEl && ctrl.tabIndicatorEl && ctrl.tabsEl) {
        const parentRect = ctrl.tabsEl.getBoundingClientRect();
        const rect = selectedTabEl.getBoundingClientRect();
        const style = ctrl.tabIndicatorEl.style;
        const scaleX = 1 / parentRect.width * rect.width;
        const translateX = (rect.left - parentRect.left + ctrl.scrollerEl.scrollLeft) / scaleX;
        const transformCmd = 'scaleX(' + scaleX + ') translate(' + translateX + 'px)';
        const duration = animate ? SLIDE_DURATION : 0;
        style['transition-duration'] =
            style['-webkit-transition-duration'] =
            style['-moz-transition-duration'] =
            style['-o-transition-duration'] = duration + 'ms';
        style.transform =
            style['-webkit-transform'] =
            style['-moz-transform'] =
            style['-o-transform'] = transformCmd;
    }
    if (ctrl.managesScroll) {
        updateScrolButtons(ctrl);
    }
};

const createTab = (index, opts, tabsOpts, ctrl) => {
    const autofit = (tabsOpts.scrollable || tabsOpts.centered) ? false : (tabsOpts.autofit ? true : false);
    const tabIcon = opts.icon ? m.component(icon, opts.icon) : null;
    const tabButtonOptions = Object.assign({}, {
        content: m('.layout.vertical', [
            m('.flex'),
            tabIcon,
            m('.label', m('span', opts.label)),
            m('.flex')
        ]),
        class: ['tab', (autofit ? 'flex' : 'flex none'), (opts.icon && opts.label ? 'hasIconLabel' : null), opts.class].join(' '),
        wash: false,
        events: {
            onclick: () => setSelectedTab(index, tabsOpts.noIndicatorSlide ? false : true, ctrl)
        },
        config: (el, inited) => {
            if (inited) {
                return;
            }
            ctrl.tabs.push(el);
        }
    }, opts, tabsOpts.tabOpts || {});
    return m.component(button, tabButtonOptions);
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = {
        class: ['tabs', opts.scrollable ? 'scrollable' : null, opts.class].join(' '),
        config: (el, inited, context) => {
            if (inited) {
                return;
            }
            ctrl.tabsEl = el;

            if (opts.largestWidth) {
                const widths = ctrl.tabs.map(tab => tab.getBoundingClientRect().width).sort();
                const largest = widths[0];
                ctrl.tabs.forEach(tab => tab.style.width = largest + 'px');
            }

            setTabMaxWidth(ctrl);

            // align first scrollable tab to title
            if (opts.scrollable) {
                alignToTitle(ctrl);
            }
            // handle scroll
            if (opts.scrollable && document.documentElement.classList.contains('no-touch')) {
                ctrl.managesScroll = true;
                manageScroll(ctrl, context);
            }

            const onResize = () => {
                setSelectedTab(ctrl.selectedTabIndex(), false, ctrl);
                m.redraw();
            };
            p.addListener('resize', onResize);

            context.onunload = () => {
                p.removeListener('resize', onResize);
            };

            setSelectedTab(opts.selectedTab || 0, false, ctrl);
        }
    };
    const tabRow = opts.buttons.map((buttonOpts, index) => {
        buttonOpts = Object.assign(buttonOpts, {
            selected: index === ctrl.selectedTabIndex()
        });
        return createTab(index, buttonOpts, opts, ctrl);
    }).concat([
        // offset for right scroll button
        m('.scrollButtonOffset.flex.none')
    ]);

    let scrollButtonLeft, scrollButtonRight;
    if (opts.scrollable) {
        scrollButtonLeft = createScrollButton(ctrl, POSITION_LEFT);
        scrollButtonRight = createScrollButton(ctrl, POSITION_RIGHT);
    }

    const content = [
        opts.scrollable ? scrollButtonLeft : null,
        m('div', {
            class: ['tabRow layout horizontal', opts.scrollable ? 'indent' : null].join(' '),
            config: (el, inited) => {
                if (inited) {
                    return;
                }
                ctrl.scrollerEl = el;
            }
        }, [
            opts.centered ? m('.flex') : null,
            tabRow,
            opts.hideIndicator ? null : m('.tabIndicator', {
                config: (el, inited) => {
                    if (inited) {
                        return;
                    }
                    ctrl.tabIndicatorEl = el;
                }
            }),
            opts.centered ? m('.flex') : null
        ]),
        opts.scrollable ? scrollButtonRight : null
    ];
    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    controller: () => {
        return {
            tabsEl: null,
            scrollerEl: null,
            tabs: [],
            tabIndicatorEl: null,
            selectedTabIndex: m.prop(0),
            isLeft: false,
            isRight: false,
            managesScroll: false
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
