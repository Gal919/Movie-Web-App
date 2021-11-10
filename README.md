# Movie App
Movies info app. 
Alows to search for a movie, see his info and add him to favorites list.

## About the application
 React SPA using external api and localStorage.
 The app is developed with React hooks, coustom hooks, React Router and using context.
 The app has three main components:

- **Home component:**
```
The user fill a form with the movie name. Once the player stops typeing for half second, an get 
request sent to the external api using axios library.
The corresponding movies will be displayed.
The user can click a movie to see his info and save it to his favorites list.
```
![img1](https://user-images.githubusercontent.com/66163118/140812358-50a2fdb2-05da-4fa6-93c1-8b57d3350104.png)

- **MovieInfo component:**
```
Once the user click on a movie card, the movieInfo page will open with the current movie id.This id will be sent by get request in order to recive all movie's info.
```
![img2](https://user-images.githubusercontent.com/66163118/140931239-7e5527c2-1069-447d-a887-2cfbd5e1c100.png)

- **Favorites component:**
```
Display the favorites list that is stored at localStorage. 
```
![img3](https://user-images.githubusercontent.com/66163118/140982924-e8892f19-96c1-4c75-8151-3a3ed1616e0b.png)


```
The app is fully responsive.
```
![img4](https://user-images.githubusercontent.com/66163118/141091547-38757318-6a18-44df-a72d-62ea43718099.png)

```





