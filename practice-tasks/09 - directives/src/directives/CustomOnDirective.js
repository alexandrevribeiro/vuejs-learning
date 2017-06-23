export default {
    bind(el, binding, vnode) {
        // Hard-coded binding the "onclick" event
        // el.onclick = () => {
        //     binding.value();
        // }
        const type = binding.arg;
        const fn = binding.value;

        // Binds it for any kind of event
        el.addEventListener(type, fn);
    }
}