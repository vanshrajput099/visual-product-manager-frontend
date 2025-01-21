import React, { useRef, useState } from "react";
import { uploadImageAPI, uploadImageURLAPI } from "../api/image.api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CiImageOn } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";
import { sec_color_bg } from "../colors";

const Upload = ({ setRelatedProducts, setShowProducts }) => {

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [uploading, setUploading] = useState(false);
    const [imageSelected, setImageSelected] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const inputRef = useRef(null);
    const urlRef = useRef(null);

    const uploadImage = async () => {
        if (!image && !imageUrl) return;
        setUploading(true);
        let res = null;
        if (image) {
            res = await uploadImageAPI(image);
        } else {
            res = await uploadImageURLAPI(imageUrl);
        }

        if (res.status >= 400) {
            alert("Error Occurred While Uploading");
        } else {
            setRelatedProducts(res.data.data);
            setShowProducts(false);
        }
        if (inputRef.current) {
            inputRef.current.value = null;
        }
        if (urlRef.current) {
            urlRef.current.value = "";
        }
        setImageSelected(false);
        setUploading(false);
        setImage(null);
        setImageUrl("");
        setPreviewUrl(null);
    };


    const handleFileChange = (e) => {
        if (uploading) return;
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImageSelected(true);
            setPreviewUrl(URL.createObjectURL(file));
            setImageUrl("");
        }
    };

    const handleUrlChange = (e) => {
        if (uploading) return;
        const url = e.target.value;
        setImageUrl(url);
        setImage(null);
        setImageSelected(!!url);
        setPreviewUrl(url || null);
    };

    return (
        <div className="w-full flex justify-center">
            <div
                className="w-1/2 flex flex-col justify-center p-10 gap-5 items-center
                xs-max:w-3/4 xs-max:py-6 px-2
                xs:w-3/4 
                sm:w-3/4"
            >
                <div onClick={() => { if (imageSelected) return; inputRef.current.click(); }}
                    style={{
                        border: "1px solid #292929",
                        backgroundColor: sec_color_bg,
                        pointerEvents: imageSelected ? "none" : "auto",
                    }}
                    className={`w-full px-10 py-3 rounded-xl transition-all  
                    ${imageSelected ? "select-none" : "hover:cursor-pointer"}`}
                >
                    <h1 className="text-white flex items-center gap-5 font-medium
                                    xs-max:text-sm xs:text-sm"
                    >
                        <CiImageOn className="text-3xl" />
                        <p className="w-full overflow-hidden">
                            {imageSelected
                                ? image?.name || imageUrl
                                : "Choose Your Image File (JPEG, JPG , PNG)"}
                        </p>
                    </h1>
                </div>
                <Input style={{ display: "none" }} ref={inputRef} type="file" accept="image/jpeg, image/jpg, image/png" className="w-1/2 text-white" onChange={handleFileChange} />
                <Input ref={urlRef} type="text" placeholder="Or Enter Image URL" onChange={handleUrlChange} className="w-full text-white px-4 py-2 rounded-md" />
                {previewUrl && (
                    <div className="w-full flex justify-center mt-4">
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-1/2 rounded-md shadow-lg"
                        />
                    </div>
                )}

                {!uploading ? (
                    <Button
                        className="bg-white text-black text-xl px-7 py-5
                            hover:text-white
                            hover:bg-black
                            xs-max:text-sm xs-max:px-4
                            xs:text-sm xs:px-4
                            sm:text-sm sm:px-4
                            md:text-sm md:px-3"
                        onClick={uploadImage}
                    >
                        Submit
                    </Button>
                ) : (
                    <div className="flex flex-col items-center gap-5 p-5">
                        <h1 className="text-white font-bold text-xl">Uploading...</h1>
                        <TailSpin
                            visible={true}
                            height="80"
                            width="80"
                            color="white"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Upload;
