Firestore to MongoDB Data Transfer Application - Frontend

This is the frontend application for managing the Firestore to MongoDB Data Transfer. The project is built using Next.js and is designed to provide a seamless user experience with efficient state management and modern UI practices.
 Contributions

    UI Development & Optimization
        Designed and implemented the overall application layout
        Developed reusable components for forms and tables
        Optimized rendering for performance and responsiveness
        Styled components using Tailwind CSS

    State Management
        Integrated React Context API for global state management
        Handled state synchronization between Firebase and MongoDB views
        Implemented efficient error-handling mechanisms in the UI

    API Integration
        Connected backend APIs to frontend for dynamic data rendering
        Handled API error states and user notifications
        Created utility hooks for API calls and data fetching

    Frontend Testing & Documentation
        Set up testing workflows using Jest and React Testing Library
        Documented API usage in frontend code
        Assisted in debugging and optimizing API responses for frontend rendering


        File Structure

        src/
├── components/
│   ├── common/
│   ├── layout/
│   └── pages/
├── pages/
│   ├── api/
│   ├── index.js
│   └── dashboard.js
├── styles/
├── hooks/
├── utils/
└── public/


Key Files and Their Purpose

    pages/index.js: Home page with an overview of the application
    pages/dashboard.js: Main dashboard to view and manage data
    components/layout/Navbar.js: Reusable navbar component
    components/common/Table.js: Reusable table component for data display
    hooks/useFetch.js: Custom hook for API calls
    styles/globals.css: Global styles using Tailwind CSS
    utils/apiClient.js: Axios-based client for making API calls

Dependencies

All required dependencies are listed in package.json:

    next
    react
    react-dom
    axios
    tailwindcss
    postcss
    autoprefixer
    jest
    react-testing-library
    dotenv
    classnames
    swr

Features

    Dynamic Data Rendering
        Real-time data synchronization between Firestore and MongoDB.
    Reusable Components
        Modular and reusable UI components for better scalability.
    Optimized Performance
        Lazy loading, dynamic imports, and optimized API calls.
    Error Handling
        Comprehensive error messages and fallback UI for failed API requests.




        Getting Started

    Clone the repository:

git clone https://github.com/your-repo-name.git
cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Access the application at http://localhost:3000.


