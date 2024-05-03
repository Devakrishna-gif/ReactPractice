# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Reload
- File Watching Alogrithm -> written in C++
- Faster Builds because it's Caching
- Image Optimization
- Minification
- Bundle all the files
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling -> We can run our app in older browsers.
- Diagnostics
- Good Error suggestions
- Tree Shaking -> remove unused code
- Different dev and prod bundle

# Food Ordering App
- Header
    - Logo
    - Nav Items
- Body
    - Search
    - Resturant Container
        - ResturantCard
            - Img
            - Name of Resturant, Rating, Cuisine, delivery time
- Footer
    - Copyright
    - Links
    - Address
    - Contact

# Never ever keep the hard coded data, image URL in the component file.
- Reason -> The data or image url can be reused again in our application.

# Good Habit to specify all the constant URLS in a capital letters and snake case.