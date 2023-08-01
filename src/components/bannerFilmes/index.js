import React,{Fragment} from 'react'
import { Image,Text ,Fra} from 'react-native'
import styles from './styles';



export default function BannerMovies(){

    return(
             <>


            <Image style = {styles.imageBanner}source={require(`../../Img/fundo.jpg`)} />

            </>


    );


}