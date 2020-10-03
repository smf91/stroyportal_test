new Vue({
    el: '#vue',
    props: {
        items: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    data: {
        message: 'hello Vue!',
        textSearch: '',
        result: [],
        show: false,
        fruit: ['Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple'],
        count: []
    },
    watch: {
        textSearch: () => {
            console.log();
        }
    },
    methods: {
        getCounter() {
            let arr2 = []
            fetch('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia')
                .then(r => r.json())
                .then(i => this.count.push(i))
        },
        Change() {
            if (this.textSearch.length != 0) {
                this.show = true
                this.filterResults()
                this.getCounter()
            }
            else
                this.show = false
        },
        filterResults() {
            this.result = this.count[0].filter(item => item.city.toLowerCase().indexOf(this.textSearch.toLowerCase()) > -1)
        },
        setResults(result) {
            this.textSearch = result
            this.show = false
        }
    }
})


