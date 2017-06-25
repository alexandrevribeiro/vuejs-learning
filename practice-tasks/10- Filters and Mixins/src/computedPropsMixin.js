export default {
    computed: {
        reversedText() {
            return this.text.split('').reverse().join('');
        },
        textsWithCount() {
            return this.someTexts.map(function (item) {
                return `${item} (${item.length})`;
            });
        }
    }
}