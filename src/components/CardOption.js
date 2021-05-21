import React from 'react';
import './CardOptionCss.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Pohe from '../assets/Pohe.jpeg';
import Chaat from '../assets/Chaat.jpeg'
import Biryani from '../assets/Biryani.jpeg'
import Pizza from '../assets/Pizza.jpeg'
import Thaali from '../assets/Thali.jpeg'
import AliceCarousel from 'react-alice-carousel';
import Rating from '@material-ui/lab/Rating';
import "react-alice-carousel/lib/alice-carousel.css";

class CardOption extends React.Component {

  render() {

    return (
      <div>

        <h1 className="title-slide">
          Inspiration for your first order
        </h1>

        <Grid container className="root" justify="center" >
          <AliceCarousel>

            <Grid
              container
              className="gridItem"
            >
              <Card className="paper" >
                <CardMedia
                  className="media"
                  component="img" src={Pohe}
                  title="Pohe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h6">
                    Pohe
    </Typography>
                </CardContent>
              </Card>

              <Card className="paper" >
                <CardMedia
                  className="media"
                  component="img" src={Chaat}
                  title="Chaat"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h6">
                    Chaat
    </Typography>
                </CardContent>
              </Card>

              <Card className="paper" >
                <CardMedia
                  className="media"
                  component="img" src={Pizza}
                  title="Pizza"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h6">
                    Pizza
    </Typography>
                </CardContent>
              </Card>

              <Card className="paper" >
                <CardMedia
                  className="media"
                  component="img" src={Biryani}
                  title="Biryani"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h6">
                    Biryani
    </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              container
              className="gridItem"
            >
              <Card className="paper" >
                <CardMedia
                  className="media"
                  component="img" src={Thaali}
                  title="Thaali"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h5">
                    Thaali
    </Typography>
                </CardContent>
              </Card>
            </Grid>
          </AliceCarousel>

        </Grid>

        <h1 className="title-slide"> Top brands in spotlight</h1>

        <Grid container className="root" justify="center" >
          <AliceCarousel>

            <Grid
              container
              className="gridItem"
            >
              <Card className="paper-food-brand">
                <CardMedia
                  className="media-food-brand"
                  component="img" src={"https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp"}
                  title="McDelivary"
                />
              </Card>

              <Card className="paper-food-brand">
                <CardMedia
                  className="media-food-brand"
                  component="img" src={"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png?output-format=webp"}
                  title="Dominos"
                />
              </Card>

              <Card className="paper-food-brand">
                <CardMedia
                  className="media-food-brand"
                  component="img" src={"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"}
                  title="Pizza Hut"
                />
              </Card>


              <Card className="paper-food-brand" >
                <CardMedia
                  className="media-food-brand"
                  component="img" src={"https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp"}
                  title="KFC"
                />
              </Card>


              <Card className="paper-food-brand">
                <CardMedia
                  className="media-food-brand"
                  component="img" src={"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png?output-format=webp"}
                  title="Burger King"
                />
              </Card>

              <Card className="paper-food-brand">
                <CardMedia
                  className="media-food-brand"
                  component="img" src={"https://b.zmtcdn.com/data/brand_creatives/logos/f38a3c7db2e3a79f97de3336de685e11_1583993768.png?output-format=webp"}
                  title="Honestly Natural Ice Cream"
                />
              </Card>
            </Grid>

          </AliceCarousel>

        </Grid>

        <h1 className="title-slide"> Best Food In Location</h1>

        <Grid container className="root" justify="center" >

          
            <Grid
              container
              className="gridItem"
            >

              <Card className="paper-place-in-location">
                <CardMedia
                  className="media-place"
                  component="img" src={ "https://b.zmtcdn.com/data/pictures/chains/0/19035820/ff458b6f267bdbaaac66ff5ea85f369a_o2_featured_v2.png?output-format=webp" }
                  title="Bebe Di Rasoi"
                />

                <CardContent>  
                  <Typography gutterBottom variant="h5" component="h5" > Bebe Di Rasoi</Typography>
                  <Rating name="size-medium" defaultValue={2} />
                  <p> North Indian, Biryani, Desserts, Mughlai, Beverages </p>
                </CardContent>
              </Card>

              <Card className="paper-place-in-location">
                <CardMedia
                className="media-place"
                component="img" src={ "https://b.zmtcdn.com/data/pictures/chains/1/10571/98f61bae7f08ccd13f1522c72700c536_o2_featured_v2.jpg?output-format=webp" }
                title="McDonald's" >
                </CardMedia>

                <CardContent>
                  <Typography gutterButton variant="h5" component="h5" > McDonald's</Typography>
                  <Rating name="size-medium" defaultValue={2} />
                  <p>Quick Bites - Burger, Fast Food, Beverages</p>
                </CardContent>
              </Card>

              <Card className="paper-place-in-location">
                <CardMedia
                className="media-place"
                component="img" src={ "https://b.zmtcdn.com/data/pictures/7/19372057/8ad6172b871ead72007fcff9dc6f76dc_o2_featured_v2.jpg?output-format=webp" }
                title="Wow!Momo" >
                </CardMedia>

                <CardContent>
                  <Typography gutterButton variant="h5" component="h5" >Wow!Momo</Typography>
                  <Rating name="size-medium" defaultValue={2} />
                  <p>Quick Bites - Momos, Tibetan, Fast Food</p>
                </CardContent>

              </Card>

            </Grid>

        </Grid>

      </div>
    );
  }
}

export default CardOption;