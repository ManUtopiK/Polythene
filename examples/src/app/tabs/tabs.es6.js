
import m from 'mithril';
import tabs from 'polythene/tabs/tabs';
import toolbar from 'polythene/toolbar/toolbar';
import iconBtn from 'polythene/icon-button/icon-button';
require('./tabs.css!');

const threeButtons = [
    {
        label: 'New'
    },
    {
        label: 'Favorites'
    },
    {
        label: 'Saved'
    }
];

const iconButtons = [
    {
        icon: {
            svg: {
                iconSet: 'mdi',
                name: 'heart'
            }
        }
    },
    {
        icon: {
            svg: {
                iconSet: 'mdi',
                name: 'bell'
            }
        }
    },
    {
        icon: {
            svg: {
                iconSet: 'mdi',
                name: 'cog'
            }
        }
    }
];

const iconTextButtons = [
    {
        icon: {
            svg: {
                iconSet: 'mdi',
                name: 'heart'
            }
        },
        label: 'Favs'
    },
    {
        icon: {
            svg: {
                iconSet: 'mdi',
                name: 'bell'
            }
        },
        label: 'Notifs'
    },
    {
        icon: {
            svg: {
                iconSet: 'mdi',
                name: 'cog'
            }
        },
        label: 'Custom'
    }
];

const longLabels = [
    {
        label: 'New'
    },
    {
        label: 'A very long label that does not fit'
    },
    {
        label: 'Saved'
    }
];

const longList = [
    {
        label: 'Web'
    },
    {
        label: 'Shopping'
    },
    {
        label: 'Videos'
    },
    {
        label: 'Images'
    },
    {
        label: 'Books'
    },
    {
        label: 'More'
    }
];

const btn = function(group, name) {
    return m.component(iconBtn, {
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};

const toolbarRow = [
    btn('google/navigation', 'menu'),
    m('span.flex', 'Page title'),
    btn('google/action', 'search'),
    btn('google/navigation', 'more-vert')
];

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};


let module = {};
module.view = () => {
    return m('.module-tabs', [

        m.component(titleBlock, {
            title: 'Default (no autofit)',
            content: m('.tabArea',
                m.component(tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Autofit',
            content: m('.tabArea',
                m.component(tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Centered (auto width)',
            content: m('.tabArea',
                m.component(tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    centered: true,
                    autofit: false
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Centered (largest tab width)',
            content: m('.tabArea',
                m.component(tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    centered: true,
                    largestWidth: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Centered (fixed width in CSS)',
            content: m('.tabArea',
                m.component(tabs, {
                    class: 'demo-tabs fixedWidth',
                    buttons: threeButtons,
                    centered: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Preselected tab',
            content: m('.tabArea',
                m.component(tabs, {
                    class: 'demo-tabs',
                    buttons: threeButtons,
                    autofit: true,
                    selectedTab: 1
                })
            )
        }),

        m.component(titleBlock, {
            title: 'In toolbar',
            content: m('.tabArea.hasToolbar',
                m.component(toolbar, {
                    mode: 'medium-tall',
                    topBar: toolbarRow,
                    bottomBar: m.component(tabs, {
                        class: 'demo-tabs',
                        buttons: threeButtons,
                        autofit: true
                    })
                })
            )
        }),

        m.component(titleBlock, {
            title: 'In toolbar and scrollable (small)',
            content: m('.tabArea.small.hasToolbar',
                m.component(toolbar, {
                    mode: 'medium-tall',
                    topBar: toolbarRow,
                    bottomBar: m.component(tabs, {
                        class: 'demo-tabs small',
                        buttons: longList,
                        scrollable: true
                    })
                })
            )
        }),

        m.component(titleBlock, {
            title: 'In toolbar and scrollable (desktop)',
            content: m('.tabArea.hasToolbar',
                m.component(toolbar, {
                    mode: 'medium-tall',
                    topBar: toolbarRow,
                    bottomBar: m.component(tabs, {
                        class: 'demo-tabs',
                        buttons: longList,
                        scrollable: true
                    })
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Long label: wrap to second line',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'demo-tabs small',
                    buttons: longLabels,
                    autofit: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Hide indicator',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'demo-tabs small',
                    buttons: threeButtons,
                    autofit: true,
                    hideIndicator: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'No indicator slide',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'demo-tabs small',
                    buttons: threeButtons,
                    autofit: true,
                    noIndicatorSlide: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'No ink',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'demo-tabs small',
                    buttons: threeButtons,
                    autofit: true,
                    tabOpts: {
                        ink: false
                    }
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Tabs with icons',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'demo-tabs small',
                    buttons: iconButtons,
                    autofit: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Tabs with icons (dark theme)',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'dark-theme demo-tabs small',
                    buttons: iconButtons,
                    autofit: true
                })
            )
        }),

        m.component(titleBlock, {
            title: 'Tabs with icons and text',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'demo-tabs small',
                    buttons: iconTextButtons,
                    autofit: true
                })
            )
        })

        /*
        m.component(titleBlock, {
            title: 'More button dropdown TODO',
            content: m('.tabArea.small',
                m.component(tabs, {
                    class: 'demo-tabs small',
                    buttons: threeButtons,
                    autofit: false,
                    scrollable: true
                })
            )
        }),
        */

    ]);
};

export default module;

