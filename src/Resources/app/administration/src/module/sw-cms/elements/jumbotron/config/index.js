import template from './template.html.twig';

Shopware.Component.register('sw-cms-el-config-jumbotron', {
    template,
    mixins: ['cms-element'],
    created() {
        this.createdComponent();
    },
    methods: {
        createdComponent() {
            this.initElementConfig('jumbotron');
        }
    }
});
