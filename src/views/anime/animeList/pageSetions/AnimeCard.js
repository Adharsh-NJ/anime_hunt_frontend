import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactCardFlip from 'react-card-flip'
import ReactPlayer from 'react-player'
import styles from "../../../../styles/animeListStyles"
import { makeStyles } from '@mui/styles';
import { useHistory } from "react-router-dom";

const useStyles=makeStyles(styles)
const AnimeCard = (props) => {
  const data = props.anime
  const history = useHistory();
  const classes=useStyles()
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (id) => {
    history.push(`/animesdetails/${id}`);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' key={data.id}>
      <Card sx={{ maxWidth: 345 }} onClick={() => { data?.trailer_url && setIsFlipped(!isFlipped) }} className={classes.animeCard} style={{backgroundColor:"black",borderRadius:"12px" }}>
        <CardMedia
          component="img"
          height="140"
          image={data.banner_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={data?.cover_color || "white"} style={{ maxHeight: "16vh" }}>
            {data.titles.en}
          </Typography>
          <Typography variant="body2" color="white" style={{ display:"inline-block" }}>
            {data.descriptions.en?.slice(0, 200) + "..."}
          </Typography>
          {data?.trailer_url && <Typography variant='h6' color="#FABB4C" style={{ paddingTop: "10px" }}>Click on the card to watch trailer</Typography>}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => { handleClick(data.id) }}>View More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }} onClick={() => { setIsFlipped(!isFlipped) }} className={classes.animeCard} style={{backgroundColor:"black",borderRadius:"12px" }} onMouseLeave={() => { setIsFlipped((prev) => !prev); }} >
        <CardActionArea >
          {isFlipped && <ReactPlayer url={data.trailer_url} width="300" controls="true" />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              Trailer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ReactCardFlip>
  )
}

export default AnimeCard
