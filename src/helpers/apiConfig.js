const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2aa7bc7b6c9ccd4b3002154d5f9176ee',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;