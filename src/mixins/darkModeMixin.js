// darkModeMixin.js
export default {
    data() {
        return {
            darkMode: false,
        };
    },
    created() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.updateDarkMode();
    },
    watch: {
        darkMode(value) {
            localStorage.setItem('darkMode', value.toString());
            this.updateDarkMode();
        },
    },
    methods: {
        updateDarkMode() {
            if (this.darkMode) {
                document.documentElement.classList.add('dark-mode');
            } else {
                document.documentElement.classList.remove('dark-mode');
            }
        },
    },
};
