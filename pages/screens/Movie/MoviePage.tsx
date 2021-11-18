import * as React from 'react'
import { Text, View, Dimensions, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
    color : rgba(225,225,225,0.6);
    margin-top: 10px;
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

const {height: SCREEN_HEIGHT} = Dimensions.get('window') //화면의 높이

export default function Movies(){

    const [loading, setLoading] = React.useState(true)
    const [nowplaying, setNowPlaying ] = React.useState([])
    const [upcoming, setUpcoming] = React.useState([])
    const [trending, setTrending] = React.useState([])


    async function getTrending(){
        const {results} = await (
            await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
                )
            ).json();
            // console.log(results)
            setTrending(results);
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
                <Swiper 
                    autoplay={true} 
                    autoplayTimeout={2.5}
                    loop 
                    containerStyle={{width:'100%', height:SCREEN_HEIGHT/3, marginBottom:10}}
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
                <ListTitle>Trending Movies</ListTitle>  
                <TrendingScroll horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingLeft: 30}}>
                   {trending.map((movie) => (
                    <Movie key={movie.id}>
                       <Poster source={{uri: makeImgPath(movie.poster_path)}}/>
                       <Name style={{marginBottom:-5}}>{movie.original_title.length > 15 ? movie.original_title.slice(0,10) : movie.original_title}</Name>
                       <Votes style={{color:'black'}}>⭐️{movie.vote_average}/10</Votes>
                   </Movie>
                    ))} 
                </TrendingScroll>     
            </Container>
        )
}
