import React, { useState } from "react";

interface JSONEditorProps {
    jsonValue: string;
    onChange: (value: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ jsonValue, onChange }) => {
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        onChange(newValue);
        
        // Check if the JSON is valid
        try {
            JSON.parse(newValue);
            setIsValid(true);  // Valid JSON
        } catch (error) {
            setIsValid(false);  // Invalid JSON
        }
    };

    return (
        <div className="relative">
            <textarea cols={50} rows={25}
                value={jsonValue}
                onChange={handleChange}
                className={`w-full h-full p-4 border rounded-lg ${isValid ? 'bg-gray-100' : 'bg-red-100'} dark:bg-gray-800 dark:text-white`}
                placeholder="Enter JSON Schema..."
            />
            {!isValid && (
                <p className="text-red-500 text-sm absolute bottom-0 left-0 mb-2">
                    Invalid JSON. Please correct it.
                </p>
            )}
        </div>
    );
};

export default JSONEditor;
