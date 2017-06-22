
let setElementColor = (el, binding, color) => {

    // Verifies if there's the "background" argument 
    if (binding.arg == 'background')
        el.style.backgroundColor = color;
    else
        el.style.color = color;
}

export default {
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;

        // "delayed" modifier
        var delay = binding.modifiers['delayed']
            ? 2000
            : 0;

        if (binding.modifiers['blink']) {
            let mainColor = binding.value;
            let secondColor = 'blue';
            let currentColor = mainColor;

            setTimeout(function () {
                setInterval(function() {
                    currentColor = currentColor == secondColor
                        ? currentColor = mainColor
                        : currentColor = secondColor;
                    
                    setElementColor(el, binding, currentColor);
                }, 1000);
                setElementColor(el, binding, binding.value);
            }, delay);
        } else {
            setTimeout(function () {
                setElementColor(el, binding, binding.value);
            }, delay);
        }
    }
}