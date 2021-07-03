import template from './template.html.twig';
import './style.scss';

Shopware.Component.register('sw-cms-el-jumbotron', {
    template,
    mixins: ['cms-element'],
    computed: {
        title() {
            return this.element.config.title.value;
        },
        text() {
            return this.element.config.text.value;
        },
        buttonText() {
            return this.element.config.buttonText.value;
        },
        buttonLink() {
            return this.element.config.buttonLink.value;
        },
        buttonClass() {
            return this.element.config.buttonClass.value;
        }
    },
    created() {
        this.createdComponent();
    },
    methods: {
        createdComponent() {
            this.initElementConfig('jumbotron');
        }
    }
});
