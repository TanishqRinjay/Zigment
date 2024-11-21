import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";
import { FormSchema } from "./types/formSchema";
import { IoMoon, IoSunny } from "react-icons/io5";



const initialJSON = `
{
  "formTitle": "This is a JSON form",
  "formDescription": "Fill in the JSON on the left hand side",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your name"
    }
  ]
}
`;

function App() {
    const [jsonValue, setJsonValue] = useState(initialJSON);
    const [formSchema, setFormSchema] = useState<FormSchema>(
        JSON.parse(initialJSON)
    );
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleJSONChange = (value: string) => {
        setJsonValue(value);
        try {
            const parsed = JSON.parse(value);
            setFormSchema(parsed);
        } catch {
            // Ignore invalid JSON
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(jsonValue);
        alert("JSON copied to clipboard!");
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
            <div className="p-4 flex justify-between">
                <button
                    onClick={copyToClipboard}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Copy Form JSON
                </button>
                <button
                    onClick={toggleDarkMode}
                    className="bg-gray-800 text-white px-2 py-2 rounded-full text-2xl"
                >
                    {isDarkMode ? <IoMoon/> : <IoSunny />}
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="w-full md:w-1/2">
                    <JSONEditor
                        jsonValue={jsonValue}
                        onChange={handleJSONChange}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <FormPreview schema={formSchema} />
                </div>
            </div>
        </div>
    );
}

export default App;
