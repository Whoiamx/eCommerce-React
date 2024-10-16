import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Error404 } from "../../helpers/Error404";

import Rating from "@mui/material/Rating";
import { Loader } from "../../helpers/Loader";

export const Cards = ({ info }) => {
  return (
    <>
      {info !== null ? (
        info.map((el) => (
          <Card
            key={el.id}
            sx={{
              width: 310,
              height: 420,
            }}
          >
            <CardMedia
              sx={{ height: 250, backgroundSize: "220px 220px" }}
              image={`${el.image}`}
            />
            <CardContent>
              <Typography
                className="para"
                gutterBottom
                variant="h5"
                component="div"
                fontSize={18}
                textAlign={"center"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              >
                {el.title}
              </Typography>
              <Typography
                className="para"
                gutterBottom
                variant="h5"
                component="div"
                fontSize={18}
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
                  fontSize: "15px",
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
        <Loader />
      )}
    </>
  );
};
