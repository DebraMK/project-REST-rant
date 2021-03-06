# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Routes Table
| Method | Path                     | Purpose                                           |
|--------|--------------------------|---------------------------------------------------|
| GET    |             /            | Home page                                         |
| GET    |          /places         | Places index page                                 |
| POST   |          /places         | Create new place                                  |
| GET    |        /places/new       | From page for creating a new place                |
| GET    |        /places/:id       | Details about a particular place                  |
| PUT    |        /places/:id       | Update a particular place                         |
| GET    |     /places/:id/edit     | Form page for editing an existing place           |
| DELETE |        /place/:id        | Delete a particular place                         |
| POST   |    /place/:id/:rantId    | Create a rant (comment) about a particular place  |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place  |
| GET    |             *            | 404 page (matches any route not defined above)    |

Places Data table
| FIELD   | TYPE   |
|---------|--------|
| name    | string |
| city    | string |
| state   | string |
| cuisine | string |
| pic     | string |