import React, { useState } from "react";
import api from "../../services/api";

function ImageGenerator(){

    const [prompt, setPrompt] = useState('');
    const [images, setImages] = useState([]);
    const [qtdImage, setQtdImage] = useState(1);

    const generateImage = async () => {
        try {
            const response = await api.get(`generate-image`, {
                params: { prompt, qtdImage }
            })

             const formattedImages =  await response.data.map(
                base64 => `data:image/png;base64,${base64}`
            );
            console.log(formattedImages);
            setImages(formattedImages);
        } catch (error) {
            console.log("Error generating recipe: ", error);
        }
    }

    return (
        <div>
            <h2>Generate Image</h2>
            <input 
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt for generate an image"/>

            <button onClick={generateImage}>Generate Image</button>
            <div className="image-grid">
                {images.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`}/>
                ))}
                {[...Array(4 - images.length)].map((_, index) => (
                    <div key={index + images.length} className="empty-image-slot"> </div>
                ))}
            </div>
        </div>
    );
}
export default ImageGenerator;