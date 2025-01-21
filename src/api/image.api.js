import axios from "axios";
import { backendURL } from "../constant";

export const getAllImages = async () => {
    try {
        return await axios.get(backendURL + "/");
    } catch (error) {
        return error;
    }
}

export const uploadImageAPI = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    try {
        return await axios.post(backendURL + "/image/upload", formData);
    } catch (error) {
        return error;
    }
}

export const uploadImageURLAPI = async (url) => {
    try {
        return await axios.post(backendURL + "/image/url", { url });
    } catch (error) {
        return error;
    }
}