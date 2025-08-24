Tech Store
Project Description
Tech Store is a modern e-commerce web application built with Next.js, designed for browsing, managing, and purchasing tech products. It features user authentication via NextAuth, a dashboard for administrators to add and manage products, product grids for display, and integration with MongoDB for data persistence. The app includes responsive components like navigation bars, footers, and product cards, making it suitable for showcasing tech items such as gadgets and electronics.
Setup & Installation Instructions

Clone the Repository
Clone the project to your local machine:
textgit clone <repository-url>
cd tech-store

Install Dependencies
Install the required Node.js packages using npm:
textnpm install

Configure Environment Variables
Create a .env.local file in the root directory and add the necessary environment variables. Example:
textMONGODB_URI=mongodb://<your-mongodb-connection-string>
NEXTAUTH_SECRET=<your-nextauth-secret>
NEXTAUTH_URL=http://localhost:3000
Replace the placeholders with your actual MongoDB connection string and a secure secret key (generate one using openssl rand -base64 32).
Run the Development Server
Start the app in development mode:
textnpm run dev
The application will be available at http://localhost:3000.
Build for Production (Optional)
To build and run in production:
textnpm run build
npm start

Note: Ensure you have Node.js (v18 or higher) and MongoDB set up. The app uses Next.js App Router, so no additional routing libraries are needed.
Route Summary
The application uses Next.js App Router for handling pages and API routes. Below is a summary of the main routes:
Page Routes (Client-Side Pages)

/: Home page displaying product grids, top products, banners, and navigation (defined in src/app/page.js).
/dashboard: Admin dashboard overview, likely showing product management options (defined in src/app/dashboard/page.jsx).
/dashboard/addProduct: Page for adding new products to the store, accessible via the dashboard (defined in src/app/dashboard/addProduct/page.jsx).

API Routes

/api/auth/[...nextauth]: Handles authentication flows using NextAuth, including login, logout, and session management (defined in src/app/api/auth/[...nextauth]/route.js).
/api/post: API endpoint for handling post-related operations (potentially blog or user posts; defined in src/app/api/Post/route.js).
/api/product: CRUD operations for products (e.g., get all products; defined in src/app/api/product/route.js).
/api/product/[id]: Dynamic route for specific product operations by ID (e.g., get, update, or delete a product; defined in src/app/api/product/[id]/route.js).
/api/top: Endpoint for fetching top or featured products (defined in src/app/api/top/route.js).
/api/users: User management API, such as registration or profile updates (defined in src/app/api/users/route.js).

Additional layouts and components (e.g., Sidebar.jsx, TopNavBar.jsx) are used within these routes for shared UI elements. Custom error handling is provided via not-found.jsx and loading.jsx. For full details, refer to the src/app directory structure.
