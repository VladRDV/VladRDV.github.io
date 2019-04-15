import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    white,
    trns,
    // danger,
    black,
    read_back,
} from '../colors/colors';
export const archive_style = StyleSheet.create({
    main:{
        alignSelf: 'stretch',
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent: 'center',
        paddingTop:'70px',
        minHeight: '100vh',
        height: 'auto',
        width: '100%',
        background: black,
        // overflow: 'hidden',
        // marginBottom:'50px',
    },
    container:{
        width: '60%',
        backgroundColor:'red',
        display: 'grid',
        // flex: 1,
        // justifyItems: 'center',
        gridTemplateColumns:'repeat(3, minmax( 33%, 220px))',
        // gridAutoRows:'minmax(220px, auto-fit)',
        gridTemplateRows: 'repeat( auto-fit, 220px)',
        gridGap:'4px',
        justifyContent:'space-evenly',
        // padding: '0 5px',
        '@media screen and (max-width: 900px)':{
            width: '90%',
            gridTemplateColumns:'repeat(2, minmax( 50%, 220px))',
        },
        '@media screen and (max-width: 480px)':{
            width: '94%',
            gridTemplateColumns: '100%',
        },  
    },
        skills:{
            gridColumn: '1/4',
            gridRow: '2/3',
            backgroundColor:'orange',
        },
        currently_learning:{
            gridColumn: '1/4',
            gridRow: '1/2',
            backgroundColor:'blue',
        },
        projects:{
            flex: 1,
            gridColumn: '1/4',
            gridRow: '3/span',
            backgroundColor:'indigo',
        },
});