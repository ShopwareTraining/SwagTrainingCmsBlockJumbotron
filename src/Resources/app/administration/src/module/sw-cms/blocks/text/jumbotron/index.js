import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'jumbotron',
    category: 'text',
    label: 'sw-cms.blocks.jumbotron.label',
    component: 'sw-cms-block-jumbotron',
    previewComponent: 'sw-cms-preview-jumbotron',
    defaultConfig: {
        padding: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        main: 'jumbotron'
    }
});
