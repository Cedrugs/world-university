import React from 'react';

const LoadingSkeleton = () => (
    <div className="animate-pulse">
        <div className="h-8 w-32 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 w-24 bg-gray-300 rounded"></div>
    </div>
);

export default LoadingSkeleton;