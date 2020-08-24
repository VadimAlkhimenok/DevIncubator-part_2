export const runLoading = () => {
    main__text.insertAdjacentHTML('beforeend', `
        <div class="d-flex justify-content-center loader">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    `)
}