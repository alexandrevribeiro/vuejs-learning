export default {
    computed: {
        textsWithCount() {
            return this.someTexts.map(function (item) {
                return `${item} (${item.length})`;
            });
        }
    }
}