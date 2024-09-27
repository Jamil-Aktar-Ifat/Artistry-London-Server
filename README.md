# Artistry London

## Live Site URL
[Artistry London](https://artistry-london.web.app)

## Description
Artistry London is a vibrant web application showcasing various art and craft items. Users can explore and add their creations while enjoying a seamless user experience with responsive design for all devices.

## Features
- **User Authentication**: Secure login and registration using email and password, along with social login options (Google, GitHub, etc.).
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop.
- **Craft Item Management**: Users can add, view, update, and delete their art & craft items.
- **Art Categories**: Different categories for various types of art including Painting and Drawing, with subcategories like Landscape Painting, Portrait Drawing, and more.
- **Dynamic Routing**: Private routes for adding and managing crafts, ensuring only authenticated users can access specific features.

## Key Rules
- The application has a minimum of **15 notable GitHub commits** on the client side.
- The application has a minimum of **8 notable GitHub commits** on the server side.
- Environment variables are used to hide Firebase config keys and MongoDB credentials.
- No placeholder text is used; all content is meaningful and relevant.

## Navbar
- Website name/logo
- Home
- All Art & Craft Items
- Add Craft Item (Private Route)
- My Art & Craft List (Private Route)
- Conditional Login/Register buttons based on user authentication status

## Pages
- **Home Page**: Includes Navbar, Banner/Slider, Craft Items Section, Categories Section, and Footer.
- **Craft Items Section**: Displays at least 6 craft item cards with a "View Details" button.
- **Add Craft Item Page**: A form for adding new items to the database.
- **All Art & Craft Items Page**: Displays all items in a table format.
- **View Details Page**: Shows detailed information for each craft item.
- **My Art & Craft List**: Displays only the user's added crafts with update and delete options.
- **Update Page**: A form for updating existing craft items.
- **404 Page**: A user-friendly Not Found page.

## Additional Features
- Dark/Light theme toggle.
- Loading spinner during data fetching.
- User-friendly notifications for actions such as add, update, and delete.
- Implemented libraries: `react-awesome-reveal` for animations, and others as required.

## Technologies Used
- React.js
- Tailwind CSS
- Firebase Authentication
- MongoDB

## Getting Started
To run the project locally:
1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Set up your environment variables for Firebase and MongoDB.
4. Run the application using `npm start`.
