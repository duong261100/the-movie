module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{vue,js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        colors: {
            'main-color': "#f36522",
            'dark-theme-color': "#060f19",
            'gray-theme-color': "#182028",
            'movie-bg-after': "rgba(0, 0, 0, 0.5)",
        },
        extend: {
            backgroundImage: {
                'slider-bg-after': "linear-gradient(to top, rgba(242, 101, 34, 0.51) -18%, rgba(10, 21, 33, 0.9) 75%)",
                'movie-bg-hover': "linear-gradient(to bottom left, rgba(242, 101, 34, 0.51) 0%, rgba(10, 21, 33, 0.5) 100%)",
            },
        },
    },
    plugins: [],
}