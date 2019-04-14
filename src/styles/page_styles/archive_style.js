import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    white,
    trns,
    // danger,
    // black,
} from '../colors/colors';
export const archive_style = StyleSheet.create({
    main:{
        alignSelf: 'stretch',
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent: 'center',
        paddingTop:'70px',
        height: '100vh',
        width: '100%',
        background: trns,
        // overflow: 'hidden',
    },
    container:{
        maxWidth: '65%',
        flex: 1,
        // backgroundColor:'blue',
        padding: '0 5px',
        '@media screen and (max-width: 992px)':{
            maxWidth:'80%',
        },
        '@media screen and (max-width: 576px)':{
            maxWidth:'100%',
        },
    },
    cards:{
        // backgroundColor:'orange',
        display:'grid',
        gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
        gridTemplateRows: 'auto-fit repeat(6, 155px)',
        gridGap: '8px',
        height:'auto',
        maxHeight:'calc(100vh - 70px)',
        maxWidth:'100%',
        // overflowY:'auto',
        '@media screen and (max-width: 576px)':{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }
    },
    card:{
        display:'flex',
        color: white,
        textDecoration:'none',
        fontSize:'2rem',
        justifyContent: 'center',
        alignItems:'center',
        padding: '10px',
        textAlign:'center',
        backgroundColor: 'rgba(0,0,0,.7)',
        border: `1px solid ${white}`,
        transition: '.4s background-color ease-in',
        ":hover":{
            backgroundColor: 'rgba(21, 101, 192, .7)',
        }
        // opacity: 0.8,
    },
    // bg_websites:{
    //     backgroundImage: 'url(../../static/img/project_categories/websites.jpg) no-repeat cover',
    // },
    skills:{
        height:'auto',
        minWidth:'100%',
        marginTop: '1rem',
        backgroundColor:'indigo',
    },
});