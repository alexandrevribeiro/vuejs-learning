export const fruitsMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            fruitFilterText: ''
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((item) => {
                return item.match(this.fruitFilterText);
            });
        }
    }
}