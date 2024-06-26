import { MarkerType } from "./types";

class MockStore {
  data: MarkerType[];

  constructor() {
    this.data = [
      {
        position: [50.4501, 30.5234],
        name: "Bag for sale",
        id: "4534rf",
        city: "Kiev",
        text: "Fashion bag for sale, only today with discount",
        image: "https://www.flickr.com/photos/rampx/53630535318/in/dateposted/",
      },
      {
        position: [49.8397, 24.0297],
        name: "Laptop on Sale",
        id: "9834hh",
        city: "Lviv",
        text: "High-end laptop with great discount!",
        image: "",
      },
      {
        position: [46.4825, 30.7233],
        name: "Bike for sale",
        id: "7654dh",
        city: "Odessa",
        text: "Great mountain bike in perfect condition.",
        image: "image3.jpg",
      },
      {
        position: [50.6203, 26.2516],
        name: "Shoes Sale",
        id: "8765jh",
        city: "Rivne",
        text: "Discount on shoes for a limited time!",
        image: "image4.jpg",
      },
      {
        position: [49.9884, 36.2304],
        name: "Watch Sale",
        id: "9823kl",
        city: "Kharkiv",
        text: "Exclusive watches at discounted prices!",
        image: "image5.jpg",
      },
      {
        position: [50.9077, 34.7997],
        name: "Camera on Sale",
        id: "4635nm",
        city: "Sumy",
        text: "Professional cameras at a great price!",
        image: "image6.jpg",
      },
      {
        position: [49.5535, 25.5948],
        name: "Furniture Sale",
        id: "5734pl",
        city: "Ternopil",
        text: "Quality furniture at discounted prices!",
        image: "image7.jpg",
      },
      {
        position: [50.6169, 26.2564],
        name: "Car Sale",
        id: "9867ok",
        city: "Rivne",
        text: "Affordable cars on sale!",
        image: "image8.jpg",
      },
      {
        position: [47.8388, 35.1396],
        name: "House for Sale",
        id: "4678ph",
        city: "Zaporizhzhia",
        text: "Beautiful house in a great location!",
        image: "image9.jpg",
      },
      {
        position: [48.5072, 32.2622],
        name: "Phone on Sale",
        id: "1298xz",
        city: "Kropyvnytskyi",
        text: "Smartphones at amazing prices!",
        image: "image10.jpg",
      },
    ];
  }

  addMarker(marker: MarkerType) {
    this.data.push(marker);
  }

  getMarkers() {
    return this.data;
  }
}

const mockStore = new MockStore();
export default mockStore;
