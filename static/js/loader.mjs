export default {
    on: () => {
        document.getElementById('loading').style.display = '';
    },
    off: () => {
        document.getElementById('loading').style.display = 'none';
    }
};