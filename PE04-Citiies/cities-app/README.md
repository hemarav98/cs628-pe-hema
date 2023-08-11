# Input

The program allows users to input city information through a form in the "Add City" section. Users provide the city's name, country, population, and other details as inputs.

# Process

1. **Input Gathering**: Users enter city details, including name, country, population, and additional information.

2. **Data Processing**: Upon clicking the "Add City" button, the entered data is captured and processed within the `handleAddCity` function. A new city object is created with a unique ID, and the input values are assigned to corresponding attributes.

3. **Updating State**: The `setCities` function, passed as a prop from the `App` component, is used to update the `cities` state with the new city data.

4. **Navigation**: After successfully adding a city, users are redirected back to the "Cities List" page, where the updated list is displayed.

# Output

The main output of the program is the "Cities List" page, which showcases the list of cities and their names as clickable links. When a city link is clicked, users are directed to the "City Details" page, where detailed information about the selected city is displayed, including its name, country, population, and additional details.
