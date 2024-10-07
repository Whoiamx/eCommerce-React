import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Error404 } from "../../helpers/Error404";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const Cards = ({ info }) => {
  console.log("Esto es desde el componente Cards", info);
  return (
    <>
      {info !== null ? (
        info.map((el) => (
          <Card key={el.id} sx={{ maxWidth: 320 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={el.image}
              title="green iguana"
            />
            <CardContent>
              <Typography
                className="para"
                gutterBottom
                variant="h5"
                component="div"
                fontSize={15}
                textAlign={"center"}
              >
                {el.title}
              </Typography>
              <Typography
                className="para"
                gutterBottom
                variant="h5"
                component="div"
                fontSize={15}
                textAlign={"center"}
              >
                <b>USD {el.price} </b>
              </Typography>
              <Rating
                color="#ff6d75"
                name="customized-10"
                defaultValue={2}
                max={6}
                sx={{
                  fontSize: "8px",
                  "& .MuiRating-iconFilled": {
                    color: "#ffc107",
                  },
                  "& .MuiRating-iconHover": {
                    color: "#ffb300",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              ></Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success">
                Agregar al carrito
              </Button>
              <Button sx={{ fontSize: 10 }} size="small">
                Mas info
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Error404 />
      )}
    </>
  );
};
