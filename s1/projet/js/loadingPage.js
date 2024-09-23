const preLoading = document.getElementById('preLoading');

export function loadingPage() {
    preLoading.classList.add('startLoading');
    setTimeout(() => {
        preLoading.classList.add('endLoading');
    }, 2000);
}