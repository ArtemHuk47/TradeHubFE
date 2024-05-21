import React, { useState } from 'react';
import "./AddImage.css";

function AddImage() {
    const [images, setImages] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = event.target.files;
            const updatedImages: string[] = [];

            Array.from(files).forEach(file => {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const result = e.target?.result;
                    if (typeof result === 'string') {
                        updatedImages.push(result);
                        if (updatedImages.length === files.length) {
                            setImages(prev => [...prev, ...updatedImages]);
                        }
                    }
                };

                reader.readAsDataURL(file);
            });
        }
    };

    const handleRemoveImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="add-image">
            <label htmlFor="file-upload" className="custom-file-upload">
                +
            </label>
            <input id="file-upload" type="file" multiple onChange={handleFileChange} />
            <div className="image-preview-container">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image} alt={`Uploaded ${index}`} />
                        <button onClick={() => handleRemoveImage(index)} className="remove-image-button">Видалити</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddImage;
