import React from 'react';

interface PopUpImageProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    onPrevious: () => void;
    onNext: () => void;
}

const PopUpImage: React.FC<PopUpImageProps> = ({ isOpen, onClose, imageSrc, onNext, onPrevious }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative p-4 rounded-lg max-w-[80vw]" onClick={(e) => e.stopPropagation()}>

                <img src={imageSrc} alt="Project" className="w-full h-auto rounded-lg" />

                <button onClick={onPrevious} className="absolute top-1/2 left-7 transform -translate-y-1/2 w-10 h-10 flex items-center 
                justify-center rounded-full bg-black text-white border-2 border-white shadow-md hover:bg-gray-800">
                    <i className="fas fa-chevron-left"></i>
                </button>

                <button onClick={onNext} className="absolute top-1/2 right-7 transform -translate-y-1/2 w-10 h-10 flex items-center 
                justify-center rounded-full bg-black text-white border-2 border-white shadow-md hover:bg-gray-800">
                    <i className="fas fa-chevron-right"></i>
                </button>

                <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white 
                bg-red-600 rounded-full p-2 hover:bg-red-800">
                    <i className="fas fa-times"></i>
                </button>

            </div>
        </div>
    );
};

export default PopUpImage;