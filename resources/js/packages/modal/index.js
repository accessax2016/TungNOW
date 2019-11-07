import ModalVue from '../../components/widgets/Modal.vue';

const Modal = {

    install(Vue, options) {

        this.EventBus = new Vue();

        Vue.component('Modal', ModalVue);

        Vue.prototype.$modal = {

            showComponentModal(params) {

                Modal.EventBus.$emit('showComponentModal', params)

            },
            showSuccessModal(params) {

                Modal.EventBus.$emit('showSuccessModal', params)

            },
            showErrorModal(params) {

                Modal.EventBus.$emit('showErrorModal', params)

            },
            showConfirmModal(params) {

                Modal.EventBus.$emit('showConfirmModal', params)

            }

        };

    }

}

export default Modal;