# Theme Generator - Project 2 Planning

Team: ALELLA Ltd.

Team members:
- Alex Stepanov
- Ellen Park
- Lauren Mendoza

Roles: 
- Frontend: Ellen 
- Backend: Lauren 
- Git Wrangler: Lauren 
- Design Lead: Ellen 
- Research / Documentation Lead: Alex

## Project Choice - Theme Generator

Theme Generator project provides users with a streamlined and accessible way to generate and visualize theme styles for their client applications based on theme name and its description only!

## Sprint board

Trello sprint board [link](https://trello.com/b/1AhAgCnS/theme-generator)

## Wireframes

### Home Page

![Home Page](../assets/Theme_Index.jpg)

### Add Theme Page

![Add Theme Page](../assets/Theme_Add.jpg)

### Theme Details Page

![Theme Details Page](../assets/Theme_Show.jpg)

## Models/Schemas

### Primary Schema: Theme

| Property | Type | Validations | Default Value |
|----------|----------|----------|----------|
| _id | Objectid | n/a | n/a |
| theme | String | Required. Allow no more than 40 characters| n/a |
| description | String | Required. Allow no more than 300 characters | n/a |
| defaultStyle | String | n/a | defaultTheme |
| currentStyle | ObjectId, ref: "Styleset" | n/a | n/a |
| user | ObjectId, ref: "User" | Required | n/a |

### Seconadary Schema: Styleset

| Property | Type | Validations | Default Value |
|----------|----------|----------|----------|
| _id | Objectid | n/a | n/a |
| theme | Objectid, ref: 'Theme' | n/a | n/a |
| fontColor | String | n/a | n/a |
| googleFontHref | String | n/a | n/a |
| googleFontFamily | String | n/a | n/a |
| mainBackgroundColor | String | n/a | n/a |
| menuBackgroundColor | String | n/a | n/a |
| tableHeaderColor | String | n/a | n/a |
| buttonColor | String | n/a | n/a |
| buttonHoverColor | String | n/a | n/a |
| user | Objectid, ref: "User" | Required | n/a |

### Seconadary Schema: User

| Property | Type | Validations | Default Value |
|----------|----------|----------|----------|
| _id | Objectid | n/a | n/a |
| name | String | n/a | n/a |
| googleId | String | Required | n/a |
| email | String | n/a | n/a |
| avatar | String | n/a | n/a |

## Entity Relationship Diagram

- Each Theme have zero or many Stylesets. Each Styleset belongs to one and only one Theme
- Each currentStyle property have zero or one Styleset applied. Each Styleset belongs to zero or one currentStyle
- Each User have zero or many Themes created. Each Theme belongs to one and only one User.
- Each User have zero or many Stylesets created. Each Styleset belongs to one and only one User.

![Theme Generator ERD](../assets/Theme%20Generator%20ERD.png)

## MVP CRUD / RESTful Routes
 Route name | CRUD operation | URL endpoint | Module name | Controller Action | Notes |
|----------|----------|----------|----------|----------|----------|
 GET | View a form to add a new theme | /themes/new | themesCtrl | new | |
 POST |Create a theme | /themes | themesCtrl | create | Res.redirect to /themes |
 GET | Read all themes | /themes | themesCtrl | index | |
 DELETE | Delete specified theme | /themes/:id | themesCtrl | delete | Res.redirect to /themes |
 GET | Read a specific theme | /themes/:id | themesCtrl | show | |
 PUT | Update current style for a specific theme | /themes/:id | themesCtrl | update| Res.redirect to /themes/${req.params.id} |
 POST | Create a styleset for a theme (1:M) | /themes/:id/stylesets | stylesetsCtrl | create | Res.redirect to /themes/${req.params.id} |
 PUT | Update a specific styleset | /themes/:tid/stylesets/:ssid | stylesetsCtrl | update | Res.redirect to /themes/${req.params.tid} |
 DELETE | Delete a specific styleset | /themes/:tid/stylesets/:ssid | stylesetsCtrl | delete | Res.redirect to /themes/${req.params.tid} |

## User Stories

| US_ID__# | Short Name | Description | SP | Priority | Risk | Sprint | Dependant on US ID# |
|-------|------------|-------------|----|----------|------|--------|---------------------|
| ✅TG-1  | View list of themes | AAU, I want to view a list of all themes (index functionality) that displays Theme Name, Description. |  | 1 | Low | 1 |  |
| ✅TG-2       | Create themes | AAU, I want to create themes by entering the information on a page (new functionality) that has a form and submitting it |  | 1 | Low | 1 |  |
| ✅TG-3       | Navigation bar menu | AAU, I want to be able to access each view via a navigation bar at the top of the page with links to HOME, ALL THEMES, and ADD THEME |  | 1 | Low | 1 | TG-1, TG-2 |
| ✅TG-4       | View theme details | AAU, when viewing the list of themes, I want to click on a "DETAIL" link or button displayed next to each theme to view all of the properties for that theme (show view) |  | 1 | Low | 1 | TG-1 |
| ✅TG-5       | Generate style | AAU, when viewing the details page (show view) for a theme, I want to be able to generate a style by clicking on “Generate” button |  | 1 | High | 1 | TG-4 |
| ✅TG-6       | View list of styles | AAU, when viewing the details page (show view) for a theme, I want to see a list of that theme's styles (properties as per Styleset model) |  | 1 | Low | 1 | TG-4, TG-5 |
| ✅TG-7       | Sort themes by theme name | AAU, I want to view a list of all themes sorted by the theme name in ascending order. |  | 2 | Low | 1 | TG-1 |
| ✅TG-8       | Delete a theme | AAU, when viewing the list of themes, I want to delete a theme by clicking on delete icon next to this theme |  | 1 | Low | 1 | TG-1 |
| ✅TG-9       | Select default style | AAU, when viewing the details page (show view) for a theme, I want to select a current style for a theme to preview the style by applying its properties to the page |  | 1 | Moderate | 1 | TG-5 |
| ❌TG-10      | Display chosen default style details | AAU, when viewing the details page (show view) for a theme, I want to see the chosen default style details of this theme. ❌DECLINED: Duplicate of TG-27 and TG-30 |  | 1 | Low | 1 | TG-9 |
| ✅TG-11      | Update style | AAU, when viewing the details page (show view) for a theme, I want to update a style by clicking on update icon next to each row of the style list. |  | 1 | Moderate | 1 | TG-6 |
| ✅TG-12      | Delete style | AAU, when viewing the details page (show view) for a theme, I want to delete a style by clicking on delete icon next to each row of the style list. |  | 1 | Low | 1 | TG-6 |
| TG-13      | Preview styles in rows of style list | AAU, when viewing the details page (show view) for a theme, I want to preview styles by applying corresponding styles to each row in the list of styles. |  | 3 | Moderate | 2 | TG-6 |
| TG-14      | Apply default theme style to application | AAU, I want to apply a default theme style to the whole web application (wireframe is required) |  | 3 | High | 3 | TG-9 |
| TG-15      | Truncate theme description | AAU, when viewing the list of themes, I want to see theme description text truncated. |  | 3 | Low | 2 | TG-1 |
| TG-16      | Export default theme style in CSS format | AAU, when viewing the list of themes, I want to export a default theme style in CSS format |  | 3 | High | 3 | TG-9 |
| TG-17      | Get customed style properties | AAU, I want to get customed style properties, not only those that were hardcoded initially |  | 3 | High | 3 | Tg-6 |
| ✅TG-18      | Sign up using Google account | AAU, I want to be able to sign up using Google account |  | 2 | Moderate | 1 |  |
| ✅TG-19      | Log in using Google account | AAAH, I want to be able to log in using Google account. |  | 2 | Moderate | 1 | TG-18 |
| ✅TG-20      | Add Theme only if logged in | AAAH, I want to access Add Theme link and be able to add a new theme only if I am logged in user |  | 2 | Low | 1 | TG-19 |
| ✅TG-21      | Generate styleset only if logged in | AAAH, I want to be able to generate a new styleset only if I am logged in user |  | 2 | Low | 1 | TG-19 |
| ✅TG-22      | Delete theme only if created it | AAAH, I want to be able to delete a theme only if I am logged in user and created this theme |  | 2 | Low | 1 | TG-19 |
| ✅TG-23      | Update styleset only if created it | AAAH, I want to be able to update a styleset only if I am logged in user and created this styleset |  | 2 | Low | 1 | TG-19 |
| ✅TG-24      | Delete styleset only if created it | AAAH, I want to be able to delete a styleset only if I am logged in user and created this styleset |  | 2 | Low | 1 | TG-19 |
| ✅TG-25      | Copy the font href to the clipboard | AAU, when viewing the details page (show view) for a theme, I want to copy the font href to the clipboard by clicking on copy icon next to the styleset Google Font Family |  | 2 | Moderate | 1 | TG-6 |
| ✅TG-26      | Expand the number of styleset properties | AAU, when viewing the details page (show view) for a theme, I want to see 8 properties in the table of stylesets as per Styleset schema |  | 2 | Moderate | 1 | TG-6 |
| ✅TG-27      | Autoselect applied styleset in the dropdown list | AAU, when viewing the details page (show view) for a theme, I want applied styleset to be selected in the dropdown list  |  | 2 | Low | 1 | TG-6 |
| ✅TG-28      | Select default styleset in the dropdown list | AAU, when viewing the details page (show view) for a theme, I want be able to select default styleset in the dropdown list |  | 2 | Low | 1 | TG-6 |
| ✅TG-29      | View the purpose of the app on Home page | AAU, when viewing the Home page, I want to see the purpose of the app and how to use it |  | 2 | Low | 1 |  |
| ✅TG-30      | Bring the applied styleset to the top of the styleset table | AAU, when viewing the details page (show view) for a theme, I want to see applied styleset at the top of the styleset table |  | 2 | Moderate | 1 |  |
| TG-31      | Limit the number of openAI requests | As an app owner, I want to limit the number of openAI requests done by one user |  | 2 | Moderate | 2 |  |
| ✅TG-32      | Align description text to the top on Add Theme page | AAAH, when viewing the Add Theme page, I want the text of Theme description to be aligned to the top of the input form |  | 2 | Low | 1 |  |
| ✅TG-33      | Align profile pictures to the left on Theme details page | AAU, when viewing the details page (show view) for a theme, I want profile pictures to be aligned to the left |  | 2 | Low | 1 |  |
| ✅TG-34      | Bug. Refine the style of the login in / log out buttons | AAU, I want to see login in / log out buttons consistantly styled. |  | 2 | Low | 1 |  |
| ✅TG-35      | Imrovement. Set default styleset across all the pages | AAU, I want to see default styleset to be applied across the all pages escept theme detals page |  | 2 | Moderate | 1 |  |
| ✅TG-36      | Improvement. Merge Applied Style and Style ID columns | AAU, when viewing the details page (show view) for a theme, I want to see Applied Style and Style ID columns merged |  | 2 | Low | 1 |  |
| ✅TG-37      | Improvement. Make the font size smaller for styleset table | AAU, when viewing the details page (show view) for a theme, I want to see font size smaller in the styleset table |  | 2 | Low | 1 |  |
| TG-38      | Bug. Spinner does not appear when clicking on update icon | AAAH, when clicking on update icon on the details page (show view), I want to see a spinner while openAI response is pending |  | 2 | Low | 2 |  |

