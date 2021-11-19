const API_KEY="d37bee07915d9a2edbab49986b341e54"
const BASE_URL = "https://api.themoviedb.org/3"

function getTrending(){
    return(
        fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) => res.json())
    )
}

function getUpcoming(){
    return(
        fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`).then((res) => res.json())
    )
}

function getNowPlaying(){
    return(
        fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`).then((res) => res.json())
    )
}

export const moviesApi = { getTrending, getUpcoming, getNowPlaying}