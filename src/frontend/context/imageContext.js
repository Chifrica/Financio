// context/imageContext.js
import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState(''); // Default name
    const [password, setPassword] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <ImageContext.Provider value={{ 
            selectedImage, setSelectedImage, 
            name, setName, 
            password, setPassword, 
            regNumber, setRegNumber,  
            email, setEmail,
            phoneNumber, setPhoneNumber
        }}>
            {children}
        </ImageContext.Provider>
    );
};
