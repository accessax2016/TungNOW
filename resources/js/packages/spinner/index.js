import SpinnerVue from '../../components/widgets/Spinner.vue';

const Spinner = {

    install(Vue, options) {

        this.EventBus = new Vue();

        Vue.component('Spinner', SpinnerVue);

        Vue.prototype.$spinner = {

            show() {
                Spinner.EventBus.$emit('show');
            },
            hide() {
                Spinner.EventBus.$emit('hide');
            }

        };

    }

}

export default Spinner;