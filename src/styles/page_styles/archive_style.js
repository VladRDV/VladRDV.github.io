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
        display: 'grid',
        color: white,
        // flex: 1,
        // justifyItems: 'center',
        gridTemplateColumns:'1fr',
        // gridAutoRows:'minmax(220px, auto-fit)',
        gridTemplateRows: 'repeat( auto-fit, auto)',
        gridGap:'15px',
        justifyContent:'space-evenly',
        alignItems:'stretch',
        // padding: '1%',
        '@media screen and (max-width: 900px)':{
            width: '90%',
        },
        '@media screen and (max-width: 480px)':{
            width: '94%',
        },  
    },
    currently_learning:{
        gridRow:1,
        flexDirection:'column',
        alignItems:'stretch',
        justifyContent:'space-around',
        padding: '10px',
    },
    border:{
        backgroundColor: black,
        border:`1px solid ${white}`,
    },
    part_title:{
        marginBottom:'10px',
    },
    projects:{
        gridRow: '3',
        // justifyContent: 'space-evenly',
        // alignItems:'stretch',
        display:'grid',
        padding:'10px',
        gridGap: '8px',
        gridTemplateColumns:'1fr 1fr 1fr',
        height: 'auto',
        // gridAutoRows:'minmax(220px, auto-fit)',
        gridTemplateRows: 'repeat( auto-fit,  120px)',
        '@media screen and (max-width: 900px)':{
            gridTemplateColumns:'1fr 1fr',
        },
        '@media screen and (max-width: 480px)':{
            gridTemplateColumns: '1fr',
        },  
    },
    skills:{
        padding: '10px',
        gridRow: '2',
    },
    skill:{
        // minHeight:'120px',
    },
});