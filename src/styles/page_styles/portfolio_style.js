import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    white,
    trns,
    // danger,
    black,
    read_back,
} from '../colors/colors';
export const portfolio_style = StyleSheet.create({
    main:{
        alignSelf: 'stretch',
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent: 'center',
        paddingTop:'70px',
        minHeight: '100vh',
        // height: 'auto',
        height: '100%',
        width: '100%',
        background: black,
        // overflow: 'hidden',
        // marginBottom:'50px',
    },
    container:{
        width: '60%',
        height: '100%',
        display: 'grid',
        color: white,
        // flex: 1,
        // justifyItems: 'center',
        gridTemplateColumns:'repeat(4, minmax(25%, 220px))',
        gridAutoRows: 'repeat(5, minmax(20%, 220px))',
        gridGap:'10px',
        justifyContent:'space-evenly',
        alignItems:'stretch',
        '@media screen and (max-width: 900px)':{
            width: '90%',
        },
    },
    currently_learning:{
        gridRow:'1/3',
        gridColumn: '1/3',
        flexDirection:'column',
        alignItems:'stretch',
        justifyContent:'space-around',
        padding: '10px',
        '@media screen and (max-width: 600px)':{
            gridColumn: '1/5',
        }
    },
    border:{
        backgroundColor: black,
        border:`1px solid ${white}`,
    },
    part_title:{
        marginBottom:'10px',
    },
    projectsContainer:{
        // gridRow: '3/7',
        gridRow: '3/8',
        gridColumn: '1/5',
        padding:'10px',
        '@media screen and (max-width: 600px)':{
            gridRow: '5/8',
        }
    },
    projectsTitle:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        height: '30px',
        width:'100%',
    },
    projects:{
        display: 'grid',
        gridTemplateColumns:'repeat(2, minmax(220px, 50%))',
        gridAutoRows:'repeat(2, minmax(220px, 50%))',
        gridGap: '10px',        
        justifyContent:'ceenter',
        alignItems:'stretch',
        height: 'auto',
        width: '100%',
        '@media screen and (max-width: 600px)':{
            gridTemplateColumns:'1fr',
        }
    },
    project:{
        minHeight:'220px',
        color: black,
        padding:'10px',
        backgroundColor: white,
    },
    skills:{
        gridRow:'1/3',
        gridColumn: '3/5',
        padding: '10px',
        '@media screen and (max-width: 600px)':{
            gridColumn: '1/5',
            gridRow:'3/5',
        }
    },
    skill:{
        // minHeight:'120px',
    },
});