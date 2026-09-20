# 📚 Book Vibe

Book Vibe is a responsive React-based book management and discovery application. It allows users to explore books, view details, add books to their Read List or Wishlist, manage saved books, sort them, and visualize reading data.

## ✨ Features

### 🏠 Home Page
- Responsive navigation
- Hero section with call-to-action
- Responsive book collection/grid
- Navigation to book details and other pages

### 📖 Book Details
- Dynamic book details using React Router
- Book name, author, category, review, rating, total pages, publisher, year, tags, and cover
- Add a book to the Read List
- Add a book to the Wishlist
- Prevents duplicate entries
- Toast notifications for user feedback
- Handles invalid book IDs with a custom error page

### 📚 Listed Books
- Read Books and Wishlist tabs
- Reusable book cards
- View Details navigation
- Empty states for both lists
- Sorting by rating, total pages, and year of publishing
- Sorting works for the currently selected list
- Responsive book layout

### 📊 Pages to Read
- Reading data based on the Read List
- Recharts bar chart
- Displays each book's total pages
- Responsive chart
- Vertical chart on larger screens
- Horizontal chart on smaller screens
- Shortened labels where needed
- Empty state when there are no read books

### 💾 LocalStorage
- Read Books persist after refresh
- Wishlist persists after refresh
- Updated lists are saved to localStorage
- Saved lists are restored when the app starts
- React state and localStorage stay synchronized

### 🔄 Context API
Shared book state is managed with React Context API:
- Read Books
- Wishlist
- State setters
- Sorting functionality

This avoids unnecessary prop drilling.

### 🧭 React Router
- Client-side routing
- Link and NavLink navigation
- Dynamic book routes
- `useParams`
- Data Router
- Route loaders
- `useLoaderData`
- Nested routes
- `Outlet`
- Custom `errorElement`
- Invalid book IDs are handled gracefully

### 🔔 Toast Notifications
Toast feedback is shown for important user actions such as adding books to lists.

### 📱 Responsive Design
The interface adapts to mobile, tablet, and desktop screens, including navigation, book layouts, listed books, and the Pages to Read chart.

## 🛠️ Technologies Used

- React
- Vite
- React Router
- React Context API
- React Hooks
  - `useState`
  - `useEffect`
  - `useContext`
  - `useLoaderData`
  - `useParams`
- Tailwind CSS
- DaisyUI
- Recharts
- Toast notification library
- JavaScript ES6+
- LocalStorage
- JSON data

## 📂 Project Structure

```text
src/
├── Components/
├── Context/
│   ├── BookContext.js
│   └── BookProvider.jsx
├── Layouts/
├── Pages/
│   ├── Home/
│   ├── BookDetails/
│   ├── ListedBooks/
│   └── PagesToRead/
├── Routes/
├── assets/
├── main.jsx
└── index.css
```

## 🔄 Application Flow

```text
Book Data
   ↓
Home
   ↓
Book Details
   ↙        ↘
Read List   Wishlist
   ↘        ↙
  LocalStorage
       ↓
 Listed Books
       ↓
 Pages to Read
       ↓
 Recharts
```

## 📦 Installation

```bash
git clone YOUR_REPOSITORY_URL
cd book-vibe
npm install
npm run dev
```

Open the local URL provided by Vite.

## 🏗️ Production Build

```bash
npm run build
npm run preview
```

## 🎯 Learning Goals

This project was built to practice:

- React component architecture
- Reusable components
- State management
- Context API
- React Router and Data Router
- Dynamic routes
- Route loaders
- Error handling
- LocalStorage persistence
- `map`, `filter`, `find`, and `sort`
- Responsive UI development
- Tailwind CSS and DaisyUI
- Data visualization with Recharts
- Toast notifications

## 🚀 Future Improvements

- Search and filtering
- Pagination
- Authentication
- Backend/database integration
- User-specific book data
- Actual pages-read progress tracking
- Dark mode
- Book recommendations
- External book API integration

## 📄 License

This project was created for learning and portfolio purposes.
