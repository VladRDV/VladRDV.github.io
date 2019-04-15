import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    white,
    trns,
    // danger,
    form_back,
    read_back,
    black,
    std_bg,
} from '../colors/colors';
export const contact_style = StyleSheet.create({
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
        marginBottom:'50px',
    },
    container:{
        width: '60%',
        display: 'grid',
        // flex: 1,
        // justifyItems: 'center',
        gridTemplateColumns:'repeat(3, minmax( 33%, 220px))',
        gridAutoRows:'minmax(220px, 220px)',
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
    contactLink:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2.2rem',
        color: white,
        transition: '.8s ease-in-out',
        textDecoration:'none',
        ':hover':{
            backgroundColor: white,
            color: black,
        },
    },
    border:{
        border:`solid 2px ${white}`
    },
    emails:{
        flexDirection:'column',
        alignItems:'stretch',
        justifyContent:'space-between',
        gridColumn: '1/4',
        gridRow: '1',
        '@media screen and (max-width: 900px)':{
            gridColumn: '1/3',
            gridRow: '1',
        },
        '@media screen and (max-width: 480px)':{
            gridColumn: '1/2',
        },
    },
    email:{
        display:'flex',
        height: '50%',
        justifyContent:'flex-end',
        textAlign:'right',
        padding: '0 9%',
        alignItems:'center',
        fontSize:'2rem',
        color: white,
        transition: '.8s ease-in-out',
        textDecoration:'none',
        ':hover':{
            backgroundColor: white,
            color: black,
        },
        '@media screen and (max-width: 900px)':{
            justifyContent:'center',
            textAlign:'center',
            fontSize:'1.5rem',
        },
        '@media screen and (max-width: 480px)':{
            fontSize:'1.2rem',
        },
    }
});