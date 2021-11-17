import animeList from "../images/animeList.jpg"

const animeListStyles={
    pageContainer:{
        background:`url(${animeList}) no-repeat  fixed`,
        backgroundColor:"black",
        backgroundSize: "fit",
        backgroundPosition: "40% 10%",
        overflow:"hidden"
    },
    listContainer:{
        backgroundColor:"transparent" ,
        width: "100%",
    height: "100%",
    overflow: "hidden",
    marginTop:"20px"
    },
    searchBar:{
        color:"white",
         paddingLeft:"10px",
    },
    dropDownContainer:{
        paddingLeft: "10px",
    },
    dropDown:{
        backgroundColor: "black",
         borderRadius: "10px",
          border:"2px solid white",
          width:"100px",
          marginRight:"40px" 
    },
    inputLabelDropDown:{
        color:"white",
    },
    dropDownSelect:{
        color: "white", height: "50px"
    },
    searchContainer:{
        paddingBottom:"30px",
    },
    animeSearch:{
        backgroundColor:"black",
        border:"2px solid white",
        borderRadius:"10px",
        height:"42px",
    },
    searchIcon:{
        '@media(minWidth: 580px)':{
           disable:'true'
        }
    },
    cardContainer:{
        height:"80vh",
        paddingTop:"30px",
        overflowY:"auto", 
        paddingRight: "17px",
        listStyle: "none",
        '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'white',
            outline: '1px solid slategrey'
          }
    },
    animeCard:{
         border:"2px solid white",
    }
}

export default animeListStyles;