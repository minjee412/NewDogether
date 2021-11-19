import * as React from 'react'
import { Text, View, Dimensions, ActivityIndicator, Image } from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import styled from '@emotion/native';
import { makeImgPath } from '../../../utils';


const API_KEY="d37bee07915d9a2edbab49986b341e54"

const Container = styled(ScrollView)`
    /* border: 1px solid black; */
`;

const ViewStyle = styled(View)`
    flex: 1;
`;

const Loader = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const BgImg = styled(Image)`
    width:100%;
    height: 100%;
    position: absolute;
`;

const Poster = styled(Image)`
    width: 100px;
    height: 160px;
    border-radius: 5px ;
    background-color: grey;
`

const Title = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    color: white;
`

const Wrapper = styled(View)`
    flex-direction: row;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
`

const Column = styled(View)`
    width: 60%;
    margin-left: 10px;
`

const Overview = styled(Text)`
    color : black;
    margin-top: 10px;
    width: 80%;
`

const Votes = styled(Overview)``

const ListTitle = styled.Text`
    color: black;
    font-weight: 600;
    margin-left: 20px;
    font-size: 18px;
`

const Movie = styled(View)`
    margin-right: 10px;
    align-items: center;
`

const TrendingScroll = styled.ScrollView`
    margin-top: 20px;
`

const Name = styled(Text)`
`

const ListContainer = styled.View`
    margin-bottom: 10px;
`

const HMovie = styled.View`
    padding: 0px 30px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

const HColumn = styled.View`
    margin-left: 10px;
    width: 80%;
`

const Release = styled.Text`
    font-size: 12px;
    color: blue;
    font-weight: 500;
`

const Search_Input = styled.TextInput`
    border: 1px solid grey;
    border-radius: 10px;
    width: 90%;
    margin-left: 20px;
    font-size: 14px;
    height: 1.1%;
    padding: 10px 15px;
    margin-bottom: 5px;
    margin-top: 5px;
`

const {height: SCREEN_HEIGHT} = Dimensions.get('window') //화면의 높이

export default function Movies(){

    const [loading, setLoading] = React.useState(true)
    const [nowplaying, setNowPlaying ] = React.useState([])
    const [upcoming, setUpcoming] = React.useState([])
    const [trending, setTrending] = React.useState([])
    const [query, setQuery] = React.useState('');


    async function getTrending(){
        const {results} = await (
            await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
                )
            ).json();
            // console.log(results)
            setTrending(results);
            // console.log(results[0].overview)

        }
    
    
    async function getUpcoming(){
        const {results} = await (
        await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`
            )
        ).json();
        // console.log(results)
        setUpcoming(results);
    }

    
    async function getNowPlaying(){
        const {results} = await (
            await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
            )
        ).json();
        // console.log(results)
        setNowPlaying(results);
    }

    async function getData(){
        await Promise.all([getTrending(), getUpcoming(), getNowPlaying()]);
        // wait for all of them
        setLoading(false);
    };

    function onChangeText(text){
        setQuery(text);
    }
    console.log(query);


    React.useEffect(()=>{
        getData();
    },[])

    
    return loading 
        ? 
            <Loader>
            <ActivityIndicator size='large'/>
            </Loader>
        :(
            <Container>
                <Search_Input
                    placeholder='검색어를 입력 해주세요.'
                    returnKeyType='search'
                    onChangeText={onChangeText}
                />
                <Swiper 
                    autoplay={true} 
                    autoplayTimeout={2.5}
                    loop 
                    containerStyle={{width:'100%', height:SCREEN_HEIGHT/3.5, marginBottom:10}}
                    showsPagination={false}
                > 
                {/* SCREEN_HEIGHT / 4 => Dimensions에서 구한 높이에서 4/1 만큼만 높이 지정 */}
                    {nowplaying.map((movie) =>(
                        <ViewStyle key={movie.id}>
                            <BgImg source={{ uri: makeImgPath(movie.backdrop_path) }} style={{borderWidth:1}} blurRadius={30}/>
                            
                            <Wrapper >
                                <Poster source={{uri: makeImgPath(movie.poster_path)}}></Poster>
                            <Column>
                                <Title>{movie.original_title}</Title>
                                {movie.vote_average > 0 ? <Votes>⭐️{movie.vote_average}/10</Votes> : null}
                                <Overview>{movie.overview.length > 100 ? movie.overview.slice(0,100) : movie.overview}...</Overview>
                            </Column>
                            </Wrapper>

                        </ViewStyle>
                    ))}                              
                </Swiper>

                <ListContainer>
                <ListTitle>✅  인기 상영작</ListTitle>  
                <TrendingScroll horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingLeft: 30}}>
                    {trending.map((movie) => (
                    <Movie key={movie.id}>
                        <Poster source={{uri: makeImgPath(movie.poster_path)}}/>
                        <Name style={{marginBottom:-5}}>
                            {movie.original_title.slice(0,13)}
                            {movie.original_title.length > 13 ? '...' : null}
                        </Name>
                        <Votes style={{color:'black'}}>
                        {movie.vote_average > 0 ? `⭐️ ${movie.vote_average}/10` : `🌱 Coming soon`}
                        </Votes>
                    </Movie>
                    ))} 
                </TrendingScroll>

                </ListContainer>
                <ListTitle style={{marginBottom:15}}>✅  개봉 예정작</ListTitle>
                {upcoming.map((movie) => <HMovie key={movie.id}>
                    <Poster  source={{uri: makeImgPath(movie.poster_path)}}/>
                    <HColumn>
                    <Name style={{fontSize:16, fontWeight:'600', fontStyle:'italic', color:'black'}}>
                        {movie.original_title}
                    </Name>
                    <Release>{new Date(movie.release_date).toLocaleDateString("ko")} (개봉 예정)</Release>
                    <Overview>{movie.overview.length > 100 ? movie.overview.slice(0,100) : movie.overview}...</Overview>
                    </HColumn>
                </HMovie>)}

            </Container>
        )
}
