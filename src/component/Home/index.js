import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/320694449_572991277984259_1811033785827769976_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEyjofCDujqhfhWR1aYDQo0yHfzmCR0ZKzId_OYJHRkrKY63aqyuewU9dON1TSnaNxGOyxLev0KaC5uXG96UOr6&_nc_ohc=pibwYIWIYIoAX8e3Hs4&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&oh=00_AfApSCwRxcQMDhSvZWhqpD9izJDjvttGtlToFtvFLzATCg&oe=63A96BFE"
          alt="First slide"
         
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/319842997_520258806717553_9211637109865622366_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFcmDDAyyzxm01o6xBg4_RIaONgGrjAIPto42AauMAg-5XADXFbgAOzAphBv41JI8i9bbBHOX4L4fnGb7BUyInB&_nc_ohc=mEWLq4FsV3cAX-S89r5&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfCAO_xGAfOdtiPccb4X28bQX5tfReK9ZFZJp7frIoBwpQ&oe=63A9051A"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/318753905_218914220474836_5665279943311583875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGM00veEHQOff6pVynAIMJCT-5NSxAjhjNP7k1LECOGM7wXQbKWTJrAsQEiwgYuDuQJHknjCBPrG8g_lw2pBpil&_nc_ohc=RW4HtdTCOdoAX9ogkCB&_nc_oc=AQn1Siu6OUA9PhaTh1JDQJuv3MslNHmFEYc_p6-80ghXXz2rbIgkKu3Xsu4F216zcGs&_nc_zt=23&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfBMZ8MYO0HPLfCaxf9ve5o3Hxaf1ATGay_SJDcGVN8YrA&oe=63A7E389"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
