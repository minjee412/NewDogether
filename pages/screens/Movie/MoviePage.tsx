import * as React from 'react'
import { Text, View, Dimensions, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-web-swiper';
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

const BgImg = styled.Image`
    flex: 2;
`;

const {height: SCREEN_HEIGHT} = Dimensions.get('window') //화면의 높이

export default function Movies(){

    const [loading, setLoading] = React.useState(true)
    const [nowplaying, setNowPlaying ] = React.useState([])
    
    async function getNowPlaying(){
        const {results} = await (
            await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
            )
        ).json();
        // console.log(results)
        setNowPlaying(results);
        setLoading(false)

    }

    React.useEffect(()=>{
        getNowPlaying();
    },[])

    
    return loading 
        ? 
            <Loader>
            <ActivityIndicator size='large'/>
            </Loader>
        :(
            <Container>
                <Swiper 
                    timeout={3.5} 
                    loop 
                    containerStyle={{width:'100%', height:SCREEN_HEIGHT/3}}
                    controlsEnabled={false}
                > 
                {/* SCREEN_HEIGHT / 4 => Dimensions에서 구한 높이에서 4/1 만큼만 높이 지정 */}
                    {nowplaying.map((movie) =>(
                        <ViewStyle key={movie.id}>
                            <BgImg source={{ uri: makeImgPath(movie.backdrop_path) }} style={{borderWidth:1}}/>
                            <Text style={{justifyContent:'center', alignItems:'center'}}>{movie.original_title}</Text>
                        </ViewStyle>
                    ))}

                        
                </Swiper>
            </Container>
        )
        console.log(makeImgPath)
}
