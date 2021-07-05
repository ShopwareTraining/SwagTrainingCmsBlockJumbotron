import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'jumbotron',
    label: 'sw-cms.elements.jumbotron.label',
    component: 'sw-cms-el-jumbotron',
    configComponent: 'sw-cms-el-config-jumbotron',
    previewComponent: 'sw-cms-el-preview-jumbotron',
    defaultConfig: {
        title: {
            source: 'static',
            value: 'Example title',
            required: true,
        },
        text: {
            source: 'static',
            value: 'Example text',
            required: true,
        },
        buttonText: {
            source: 'static',
            value: 'Click me',
            required: true,
        },
        buttonLink: {
            source: 'static',
            value: '#example',
            required: true,
        },
        buttonClass: {
            source: 'static',
            value: 'btn-primary',
            required: true,
        },
        backgroundColor: {
            source: 'static',
            value: '#eeeeee',
            required: true,
        }
    }
});
