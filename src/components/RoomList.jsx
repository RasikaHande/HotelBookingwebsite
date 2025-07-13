
import RoomCard from './RoomCard';
import './RoomList.css';

const roomData = [
  {
    id: 1,
    name: "Deluxe Room",
    image: "https://www.thelalit.com/wp-content/uploads/2024/10/DeluxeRoom-A.jpg",
    price: 3200
  },
  {
    id: 2,
    name: "Suite Room",
    image: "https://www.royalcaribbeanblog.com/sites/default/files/styles/fb_style/public/fb/ultimate-pano-suite.jpg?itok=YIGCKrRm",
    price: 5000
  },
  {
    id: 3,
    name: "Standard Room",
    image: "https://tse2.mm.bing.net/th/id/OIP.x_xeB9NmSYwJRWo34NTv9gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 2200
  },
  {
  id: 4,
  name: "Premium Suite",
  image: "https://i.pinimg.com/originals/96/8f/0e/968f0eb19f773af59a1a91ec6d38a96b.jpg",
  price: 5500
},
{
  id: 5,
  name: "Executive Room",
  image: "https://vertuharmonijakarta.com/wp-content/uploads/2024/08/Executive-Room-Monas-View1-1-scaled.jpg",
  price: 4200
},
{
  id: 6,
  name: "Luxury Suite",
  image: "https://img.freepik.com/premium-photo/luxury-room_948994-3321.jpg",
  price: 7000
},
{
  id: 7,
  name: "Standard Room",
  image: "https://img.grouponcdn.com/pwa_test/2zbKLahh3k3TCwmC98YvszvUt7t/2z-1000x664/v1/t440x300.jpg",
  price: 2800
},
{
  id: 8,
  name: "Heritage Room",
  image: "https://tailormadejourney.com/wp-content/uploads/2021/01/184256463-1.jpg",
  price: 3600
},
{
  id: 9,
  name: "Garden View Room",
  image: "https://palmgardenresort.com.vn/uploads/photos/full-1703518660_2874_7ba8bf9d7a0990a310c9671ab9d4f2e0.jpg",
  price: 3900
},
{
  id: 10,
  name: "City View Suite",
  image: "https://peninsula.gr/wp-content/uploads/2020/10/1.FAM2R-1.jpg",
  price: 5100
},
{
  id: 11,
  name: "Ocean View Room",
  image: "https://tse2.mm.bing.net/th/id/OIP.bcdsOyfjI_702S9Ktp61eQHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 5800
},
{
  id: 12,
  name: "Presidential Suite",
  image: "https://baiyokesky.baiyokehotel.com/images/room/presidential-suite/presidential-suite-16.jpg?v=1.0",
  price: 9500
},
{
  id: 13,
  name: "Couple's Retreat Room",
  image: "https://i.pinimg.com/736x/37/0f/92/370f9242b8d67942a9434a48c0e821bb--bedroom-ideas-for-couples-couple-bedroom.jpg",
  price: 4100
},
{
  id: 14,
  name: "Business Class Room",
  image: "https://media.cntraveler.com/photos/64385abf20ed5f12e69ddfcc/master/w_1600%2Cc_limit/Qatar%2520Airways%2520business%2520class%2520suite_443460-A64I6841-653135-original-1663140583.jpg",
  price: 4500
},
{
  id: 15,
  name: "Penthouse Suite",
  image: "https://symphony.cdn.tambourine.com/the-dominick/media/dominick-hotel-building-views-penthouse-view-1-5c4f20e0e84c4.jpg",
  price: 10000
},
{
  id: 16,
  name: "Family Suite",
  image: "https://tse1.mm.bing.net/th/id/OIP.3HzLApdknqIzu0sb2FOQawHaEK?w=910&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 6200
},
{
  id: 17,
  name: "Budget Room",
  image: "https://hotelfurnitureconcept.com/wp-content/uploads/2021/04/Budget-Friendly-Hotel-Guest-Room-Design.jpg",
  price: 2000
},
{
  id: 18,
  name: "Terrace View Room",
  image: "https://tse4.mm.bing.net/th/id/OIP.bRueI8teDLamidUv7_oLXQHaE7?w=1024&h=682&rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 4700
},
{
  id: 19,
  name: "Spa Suite",
  image: "https://my.aegialis.com/wp-content/uploads/SpaSuite_main.jpg",
  price: 6800
},
{
  id: 20,
  name: "Couple Suite",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/c0/8b/30/chambre-deluxe-vue-mer.jpg?w=700&h=-1&s=1",
  price: 7200
}

];

function RoomList() {
  return (
    <div className="room-list">
      {roomData.map((room) => (
        <RoomCard
          key={room.id}
          id={room.id}
          name={room.name}
          image={room.image}
          price={room.price}
        />
      ))}
    </div>
  );
}

export default RoomList;
