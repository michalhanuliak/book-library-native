# Book Database Manager

## Objective

The goal of this project is to create a simple mobile application for managing a book database using React Native. It showcases the use of React Native and TypeScript to build a mobile application that interacts with an API for CRUD operations.

## Features

- **Splash Screen:** A splash screen is displayed upon launching the application.
  ![screenshot](./assets/screenshots/SplashScreen.png)
- **CrudHash Configuration:** Users are prompted to input a CrudCrud endpoint URL at the first launch. The app remembers this endpoint and allows its modification.
  ![screenshot](./assets/screenshots/CrudHashSettingsScreen.png)
- **Main Screen:** Displays a list of all books in the database.
  ![screenshot](./assets/screenshots/BookListScreen.png)
- **Book Details:** Users can view details of a book
  ![screenshot](./assets/screenshots/BookDetailScreen.png)
- **Book Edit:** Users can edit or delete the book.
  ![screenshot](./assets/screenshots/BookEditScreen.png)
- **Settings screen:** Users can generate new books and change hash
  ![screenshot](./assets/screenshots/BookSettingsScreen.png)
- **Data Loading Optimization:** Implements efficient data loading and caching strategies to minimize API request counts via React Query.

## API

This application uses the [CrudCrud](https://crudcrud.com/) service for data management. The data structure includes various book attributes, and the app handles the 100 request limit by informing the user and requesting a new endpoint URL.

## Design and Technology

- The UI is designed to be modern and intuitive, inspired by modern design principles.
- Developed using React Native and TypeScript, incorporating reusable components and responsive design to adapt to various device sizes.

## Setup and Running

1. Clone the repository:

```bash
git clone https://github.com/michalhanuliak/book-library-native
```

```
cd book-library-native
```

Install dependencies:

```
npm install
```

Run the app on a simulator or physical device:

```
npx expo start
```
