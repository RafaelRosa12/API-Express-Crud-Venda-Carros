import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
    {
        available: String,
        price: String,
        color: String,
        year: String,
        mark: String,
        id: String,
        model: String,
    },
    { collection: "Cars" }
);

export default mongoose.model("Car", CarSchema);