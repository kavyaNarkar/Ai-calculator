
```markdown
# Math Calculator API & React Frontend

This project consists of a FastAPI backend that processes images containing mathematical expressions and a React frontend to interact with the API. The backend utilizes the Gemini API to analyze and solve equations, while the frontend is built with React and Mantine.

## Technologies Used:
- Backend: FastAPI, Pydantic, Tailwind CSS, Python, Gemini API
- Frontend: React, Mantine, Tailwind CSS
- API Integration: Gemini API for image analysis
- State Management: Not used (no complex state management)
- Database: Not included

## Features:
- Backend: An API endpoint that processes mathematical images, solves equations, and returns the result.
- Frontend: React application with a UI that sends image data to the backend for processing.

## Project Structure:
```bash
- backend/
  - apps/
    - calculator/
      - route.py          # FastAPI routes for calculator API
      - utils.py          # Utility functions for processing images
  - constants.py          # Configuration constants like API keys and server details
  - main.py               # FastAPI application entry point
  - schema.py             # Pydantic models for input validation
- frontend/
  - src/
    - components/         # React components
    - screens/            # Screen components like Home
    - App.tsx             # Main App component
    - index.tsx           # React entry point
  - public/
    - index.html          # HTML template
  - package.json          # Frontend dependencies
  - tailwind.config.js    # Tailwind CSS configuration
  - vite.config.ts        # Vite configuration
- .env                    # Environment variables (e.g., GEMINI_API_KEY)
- .gitignore              # Git ignore file
```

## Backend Setup

### Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

### .env file:
Create a `.env` file in the `backend/` directory to store your environment variables:

```bash
GEMINI_API_KEY=<your_api_key>
```

### Run the FastAPI server:
```bash
uvicorn main:app --host localhost --port 8900 --reload
```

The API will be accessible at `http://localhost:8900`. The `/calculate` endpoint can process images and solve equations.

### Backend Explanation:
- API Endpoints: The backend provides an endpoint for image-based equation processing.
- Image Analysis: The backend decodes base64 images, processes them using the Gemini API, and returns the results in a structured format.
- Pydantic Models: `ImageData` model is used to validate input data, including the base64 encoded image and dictionary of variables.
- Tailwind CSS: Tailwind is used for styling and responsive design.

## Frontend Setup

### Install dependencies:
```bash
cd frontend
npm install
```

### Run the React app:
```bash
npm run dev
```

The React app will be available at `http://localhost:3000`. It allows users to upload images containing mathematical equations for processing by the backend.

### Frontend Explanation:
- React App: The frontend is built with React and uses the Mantine library for UI components.
- Routing*: React Router is used to handle navigation.
- State Management: The app directly sends base64-encoded images to the backend using a simple form and displays the result.
- Tailwind CSS: Custom styles are applied using Tailwind, with dark and light themes based on user preferences.

## Tailwind CSS Configuration
- Tailwind is used for styling both the frontend and backend UI. The `index.css` includes utility classes, and the `tailwind.config.js` is customized for both light and dark themes.
- Variables like `--background`, `--primary`, `--secondary`, and more are defined for easy theming and design consistency.

## Usage

1. Upload an image containing a mathematical expression or equation in the frontend.
2. The image is sent to the FastAPI backend for processing.
3. The backend uses the Gemini API to analyze the image and solve any equations.
4. The solution is returned to the frontend and displayed.

## Environment Variables

The backend uses the following environment variable for API access:

- `GEMINI_API_KEY`: Your key for the Gemini API to process and analyze images.

## Example Request/Response

### Request:
POST to `/calculate` with a payload:

```json
{
  "image": "<base64_image_string>",
  "dict_of_vars": {"x": 5, "y": 10}
}
```

### Response:
```json
{
  "message": "Image processed",
  "data": [
    {"expr": "x", "result": 5, "assign": true},
    {"expr": "y", "result": 10, "assign": true}
  ],
  "status": "success"
}
```

## Contributing

Feel free to fork this repo and submit issues or pull requests for improvements!

## License

This project is open-source and available under the [MIT License](LICENSE).
```

---

