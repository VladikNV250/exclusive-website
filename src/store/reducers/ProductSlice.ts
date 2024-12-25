import { IProduct } from "@/models/IProduct";
import { createSlice } from "@reduxjs/toolkit";
import coat from "@/assets/products/coat.png";
import bookself from "@/assets/products/bookself.png";
import bag from "@/assets/products/bag.png";
import cooler from "@/assets/products/cooler.png";
import gamepad1 from "@/assets/products/gamepad.png";
import gamepad2 from "@/assets/products/gamepad2.png";
import chair from "@/assets/products/chair.png";
import monitor from "@/assets/products/gaming-monitor.png";
import keyboard from "@/assets/products/keyboard.png";
import dogfood from "@/assets/products/dog-food.png";
import notebook from "@/assets/products/notebook.png";
import jacket from "@/assets/products/jacket.png";
import shoes from "@/assets/products/shoes.png";
import curology from "@/assets/products/curology.png";
import car from "@/assets/products/car.png";
import camera from "@/assets/products/camera.png";

interface ProductState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
}

const initialState: ProductState = {
    products: [
        {
            id: 1,
            image: coat, 
            name: "The north coat",
            price: 260, 
            oldPrice: 360,
            tags: ["best-selling"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            id: 2,
            image: bag, 
            name: "Gucci duffle bag",
            price: 960, 
            oldPrice: 1160,
            tags: ["best-selling"],
            options: {
                haveQuickView: true,
                rating: 4.5,
                numberOfReviews: 75,
            }
        },
        {
            id: 3,
            image: cooler, 
            name: "RGB liquid CPU Cooler",
            price: 160, 
            oldPrice: 170,
            tags: ["best-selling"],
            options: {
                haveQuickView: true,
                rating: 4.5,
                numberOfReviews: 65,
            }
        },
        {
            id: 4,
            image: bookself, 
            name: "Small BookSelf",
            price: 360, 
            tags: ["best-selling"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            id: 5,
            image: gamepad1, 
            name: "HAVIT HV-G92 Gamepad",
            price: 120, 
            oldPrice: 200,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 88,
            }
        },
        {
            id: 6,
            image: keyboard, 
            name: "AK-900 Wired Keyboard",
            price: 960, 
            oldPrice: 1479,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 4.0,
                numberOfReviews: 75,
            }
        },
        {
            id: 7,
            image: monitor, 
            name: "IPS LCD Gaming Monitor",
            price: 370, 
            oldPrice: 530,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 99,
            }
        },
        {
            id: 8,
            image: chair, 
            name: "S-Series Comfort Chair ",
            price: 375, 
            oldPrice: 500,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 4.5,
                numberOfReviews: 99,
            }
        },
        {
            id: 9,
            image: keyboard, 
            name: "AK-900 Wired Keyboard",
            price: 960, 
            oldPrice: 1160,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 4.0,
                numberOfReviews: 75,
            }
        },
        {
            id: 10,
            image: gamepad1, 
            name: "HAVIT HV-G92 Gamepad",
            price: 120, 
            oldPrice: 160,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 88,
            }
        },
        {
            id: 11,
            image: chair, 
            name: "S-Series Comfort Chair ",
            price: 375, 
            oldPrice: 400,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 4.5,
                numberOfReviews: 99,
            }
        },
        {
            id: 12,
            image: monitor, 
            name: "IPS LCD Gaming Monitor",
            price: 370, 
            oldPrice: 400,
            tags: ["flash-sales"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 99,
            }
        },
        {
            id: 13,
            image: dogfood, 
            name: "Breed Dry Dog Food",
            price: 100, 
            tags: ["explore"],
            options: {
                haveQuickView: true,
                rating: 3.0,
                numberOfReviews: 35,
            }
        },
        {
            id: 14,
            image: camera, 
            name: "CANON EOS DSLR Camera",
            price: 360, 
            tags: ["explore"],
            options: {
                haveQuickView: true,
                rating: 4.0,
                numberOfReviews: 95,
            }
        },
        {
            id: 15,
            image: notebook, 
            name: "ASUS FHD Gaming Laptop",
            price: 700, 
            tags: ["explore"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 325,
            }
        },
        {
            id: 16,
            image: curology, 
            name: "Curology Product Set ",
            price: 500, 
            tags: ["explore"],
            options: {
                haveQuickView: true,
                rating: 4.0,
                numberOfReviews: 145,
            }
        },
        {
            id: 17,
            image: car, 
            name: "Kids Electric Car",
            price: 960, 
            tags: ["explore"],
            options: {
                isNew: true,
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 65,
                availableColors: ["#FB1314", "#DB4444"],
            }
        },
        {
            id: 18,
            image: shoes, 
            name: "Jr. Zoom Soccer Cleats",
            price: 1160, 
            tags: ["explore"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 35,
                availableColors: ["#EEFF61", "#DB4444"],
            }
        },
        {
            id: 19,
            image: gamepad2, 
            name: "GP11 Shooter USB Gamepad",
            price: 660, 
            tags: ["explore"],
            options: {
                isNew: true,
                haveQuickView: true,
                rating: 4.5,
                numberOfReviews: 55,
                availableColors: ["#000", "#DB4444"],
            }
        },
        {
            id: 20,
            image: jacket, 
            name: "Quilted Satin Jacket",
            price: 660, 
            tags: ["explore"],
            options: {
                haveQuickView: true,
                rating: 4.5,
                numberOfReviews: 65,
                availableColors: ["#184A48", "#DB4444"],
            }
        },
        {
            id: 21,
            image: gamepad1, 
            name: "HAVIT HV-G92 Gamepad",
            price: 120, 
            oldPrice: 200,
            tags: ["related-item"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 88,
            }
        },
        {
            id: 22,
            image: keyboard, 
            name: "AK-900 Wired Keyboard",
            price: 960, 
            oldPrice: 1479,
            tags: ["related-item"],
            options: {
                haveQuickView: true,
                rating: 4.0,
                numberOfReviews: 75,
            }
        },
        {
            id: 23,
            image: monitor, 
            name: "IPS LCD Gaming Monitor",
            price: 370, 
            oldPrice: 530,
            tags: ["related-item"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 99,
            }
        },
        {
            id: 24,
            image: cooler, 
            name: "RGB liquid CPU Cooler",
            price: 160, 
            oldPrice: 170,
            tags: ["related-item"],
            options: {
                haveQuickView: true,
                rating: 4.5,
                numberOfReviews: 65,
            }
        },
        {
            id: 25,
            image: notebook, 
            name: "ASUS FHD Gaming Laptop",
            price: 960, 
            oldPrice: 1160,
            tags: ["recommendation"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            id: 26,
            image: monitor, 
            name: "IPS LCD Gaming Monitor",
            price: 1160, 
            tags: ["recommendation"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            id: 27,
            image: gamepad2, 
            name: "HAVIT HV-G92 Gamepad",
            price: 560, 
            tags: ["recommendation"],
            options: {
                isNew: true,
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        {
            id: 28,
            image: keyboard, 
            name: "AK-900 Wired Keyboard",
            price: 200, 
            tags: ["recommendation"],
            options: {
                haveQuickView: true,
                rating: 5.0,
                numberOfReviews: 65,
            }
        },
        
    ],
    isLoading: false,
    error: "",
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    }
})

export default productSlice.reducer;