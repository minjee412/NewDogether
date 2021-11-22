import * as React from 'react';
import {Dimensions, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-swiper';
import {makeImgPath} from '../../../utils';
import {useQuery} from 'react-query';
import {moviesApi} from '../../../api';
import {
  Container,
  ViewStyle,
  Loader,
  BgImg,
  Poster,
  Title,
  Wrapper,
  Column,
  Overview,
  Votes,
  ListTitle,
  Movie,
  TrendingScroll,
  Name,
  ListContainer,
  HMovie,
  HColumn,
  Release,
  Search_Input,
} from './styles';

const {height: SCREEN_HEIGHT} = Dimensions.get('window'); //화면의 높이

export default function Movies(props) {
  // const [loading, setLoading] = React.useState(true)
  // const [nowplaying, setNowPlaying ] = React.useState([])
  // const [upcoming, setUpcoming] = React.useState([])
  // const [trending, setTrending] = React.useState([])

  const [query, setQuery] = React.useState('');
  const {isLoading: nowplayingLoading, data: nowplayingData} = useQuery(
    'nowplaying',
    moviesApi.getNowPlaying,
  );
  const {isLoading: upcomingLoading, data: upcomingData} = useQuery(
    'upcoming',
    moviesApi.getUpcoming,
  );
  const {isLoading: trendingLoading, data: trendingData} = useQuery(
    'trending',
    moviesApi.getTrending,
  );

  // async function getTrending(){
  //     const {results} = await (
  //         await fetch(
  //             `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  //             )
  //         ).json();
  //         // console.log(results)
  //         setTrending(results);
  //         // console.log(results[0].overview)

  //     }

  // async function getUpcoming(){
  //     const {results} = await (
  //     await fetch(
  //         `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  //         )
  //     ).json();
  //     // console.log(results)
  //     setUpcoming(results);
  // }

  // async function getNowPlaying(){
  //     const {results} = await (
  //         await fetch(
  //         `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  //         )
  //     ).json();
  //     // console.log(results)
  //     setNowPlaying(results);
  // }

  // async function getData(){
  //     await Promise.all([getTrending(), getUpcoming(), getNowPlaying()]);
  //     // wait for all of them
  //     setLoading(false);
  // };

  function onChangeText(text) {
    setQuery(text);
  }
  // console.log(query);

  function onSubmit() {
    if (query != '') {
      return console.log('search');
    }
  }

  // React.useEffect(()=>{
  //     getData();
  // },[])

  const loading = nowplayingLoading || upcomingLoading || trendingLoading;
  return loading ? (
    <Loader>
      <ActivityIndicator size="large" />
    </Loader>
  ) : (
    <Container>
      <Swiper
        autoplay={true}
        autoplayTimeout={2.5}
        loop
        containerStyle={{
          width: '100%',
          height: SCREEN_HEIGHT / 3.5,
          marginBottom: 10,
        }}
        showsPagination={false}>
        {/* SCREEN_HEIGHT / 4 => Dimensions에서 구한 높이에서 4/1 만큼만 높이 지정 */}
        {nowplayingData.results.map(movie => (
          <ViewStyle key={movie.id}>
            <BgImg
              source={{uri: makeImgPath(movie.backdrop_path)}}
              style={{borderWidth: 1}}
              blurRadius={30}
            />

            <Wrapper>
              <Poster source={{uri: makeImgPath(movie.poster_path)}}></Poster>
              <Column>
                <Title>{movie.original_title}</Title>
                {movie.vote_average > 0 ? (
                  <Votes>🍑 {movie.vote_average}/10</Votes>
                ) : null}
                <Overview>
                  {movie.overview.length > 100
                    ? movie.overview.slice(0, 100)
                    : movie.overview}
                  ...
                </Overview>
              </Column>
            </Wrapper>
          </ViewStyle>
        ))}
      </Swiper>

      <ListContainer>
        <ListTitle>✅ 인기 상영작</ListTitle>
        <TrendingScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 30}}>
          {trendingData.results.map(movie => (
            <Movie key={movie.id}>
              <Poster source={{uri: makeImgPath(movie.poster_path)}} />
              <Name style={{marginBottom: -5}}>
                {movie.original_title.slice(0, 13)}
                {movie.original_title.length > 13 ? '...' : null}
              </Name>
              <Votes style={{color: 'white'}}>
                {movie.vote_average > 0
                  ? `🍑 ${movie.vote_average}/10`
                  : `🌱 Coming soon`}
              </Votes>
            </Movie>
          ))}
        </TrendingScroll>
      </ListContainer>
      <ListTitle style={{marginBottom: 15}}>✅ 개봉 예정작</ListTitle>
      {upcomingData.results.map(movie => (
        <HMovie key={movie.id}>
          <Poster source={{uri: makeImgPath(movie.poster_path)}} />
          <HColumn>
            <Name
              style={{
                fontSize: 16,
                fontWeight: '600',
                fontStyle: 'italic',
                color: 'white',
              }}>
              {movie.original_title}
            </Name>
            <Release>
              {new Date(movie.release_date).toLocaleDateString('ko')} (개봉
              예정)
            </Release>
            <Overview>
              {movie.overview.length > 100
                ? movie.overview.slice(0, 100)
                : movie.overview}
              ...
            </Overview>
          </HColumn>
        </HMovie>
      ))}
    </Container>
  );
}
