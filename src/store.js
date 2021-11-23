import { configureStore } from "@reduxjs/toolkit";
import ServingSizeSlicereducer from "./Components/ServingSize/ServingSizeSlice";

export default configureStore({
    reducer: {
        ServingSize: ServingSizeSlicereducer,

    },
})