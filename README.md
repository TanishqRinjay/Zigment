# JSON Form Builder

This is a React-based web application that allows you to build forms dynamically using a JSON schema. It provides an interface to input a JSON schema, preview the form in real-time, and download the submitted data as a JSON file. The app also supports dark mode and allows you to copy the form JSON schema to the clipboard.

## Features

- **JSON Schema Input:** Enter or edit a JSON schema for your form on the left-hand side.
- **Real-Time Form Preview:** View a live preview of the form based on the JSON schema on the right-hand side.
- **Form Submission:** Submit the form and download the submitted data as a JSON file.
- **Dark Mode:** Toggle between light and dark modes for a better user experience.
- **Copy JSON Schema:** Copy the JSON schema to your clipboard for easy sharing or reuse.
- **JSON Validation:** Validate the JSON schema in real-time, and get notified when the schema is invalid.

## Setup Instructions

Follow the steps below to set up this project locally.

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **Node.js:** [Install Node.js](https://nodejs.org/)
- **npm or yarn:** npm comes pre-installed with Node.js, but you can also install Yarn globally if you prefer.

### Steps to Run Locally

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/TanishqRinjay/Zigment.git

   npm install

  ### src:
  
    /components
    
      - JSONEditor.tsx
      - FormPreview.tsx
      
    /types
    
      - formSchema.ts
      
    - App.tsx
    - index.tsx
  - package.json
  - README.md

## Technologies Used
React.js for building the user interface
React Hook Form for handling form validation and submission
Tailwind CSS for styling
React Icons for icons used in the UI
