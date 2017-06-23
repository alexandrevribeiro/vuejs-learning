export default {
    bind(el, binding, vnode) {
        // Hard-coded binding the "onclick" event
        el.onclick = () => {
            binding.value();
        }
    }
}