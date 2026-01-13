import React from "react";

const Card = ({ title, description, link, image, techIcons }) => {

    

    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">

            {/* Screenshot */}
            <div className="h-48 bg-gray-800">
                <img src={image} alt={`${title} screenshot`} className="object-cover w-full h-full" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p> 
                
            {/* Tech Icons */}
            <div className="flex gap-3 mb-4">
                {techIcons?.map((icon, index) => (<img key={index} src={icon} alt="tech icon" className="h-6 w-6" />))}
            </div>
            
            {/* Link */}
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded" > View Source </a>
            </div>

        </div>
    );
};

export default Card;