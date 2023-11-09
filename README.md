# Chili Food - A website for selling best Foods and management resturant

![Chili Food Logo](https://i.postimg.cc/7ZVLrwjp/logo-11.png)

**Chili Food** is a web application for selling Foods . 

**Live Website**: [Explore Chili Food](https://chili-food.web.app/)

## Technologies Used

- **Client-side**: React, React Router, Tailwind CSS, Daisy.
- **Authentication**: Firebase (Email and Password login, Google signup and signin) and JWT token 
- **Alerts**: SweetAlert or SweetAlert2 for displaying success and error messages
- **Server-side**: Node.js, Express, CORS
- **Database**: MongoDB

## Functionality Overview

### Authentication

- Users can sign up and log in using their email and password.
- Users can also sign up and sign in using their Google account via a popup.
- SweetAlert2 is used to display success and error messages related to authentication.

### Navigation

- The website includes a navigation bar with the website's logo and name.
- There is a "Sign In" button in the navigation bar.
- If a user signs in , their name and profile will be displayed in the navigation bar along with the "Sign Out" button.
- The "Sign In" button becomes a "Sign Out" button when the user is signed in.
- Users can sign out by clicking the "Sign Out" button.
- The website utilizes the `onAuthStateChanged` function to manage user authentication state.

### Home Page
- First there are a navber in banner.
- The home page includes a banner section.
- Following the after banner firstly, there are a Top food section where top selling food are displaying via count of order.
- A see all btn if anyone click there it will redirect the all food page 

### All Food  Page

- If a user click in brand name it will go in brand details page  and this page is in private routes.
- In the brand details page it will show clicked brand products also there are a slider showing advertigment of offers .
- Each Product card there are product information and two buttons they are : Details and Update
- Users must be logged in to access these pages.

### Food details page

- If a user click in the  details btn he will go in this page and there are details information about the Food 
- There are a Buy now btn in the product detials page if a user click on this button it will redirect him checkOut page. 

### My orderd Page

- After a user click in Confirm purchase page This product will show  in this page by cards 
- There are a remove button with every product  if a user click on this btn the product delete from the cart 

### Extra Two Section 

- There are a Our Populer offers section which show the populer products picture
- And another section is Table booking

### Add Product Page

- Users can add Product by providing the necessary information.

### Update Product Page

- Users can update or modify existing Product cards.

### Sign Up

- Users can sign up with their name, photo url , email and password .
- Google sign-up is also available for users.

This README provides an overview of Chili Food Website, outlining the technologies used and the various functionalities and features of the website. Feel free to explore the website and enjoy managing your Chili Food Web Application!