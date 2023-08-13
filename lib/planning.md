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

### Add Theme Page

### Theme Details Page

## Models/Schemas

### Primary Schema: Theme

| Property | Type | Validations | Default Value |
|----------|----------|----------|----------|
| _id | Objectid | n/a | n/a |
| theme | String | Required. Allow no more than 40 characters| n/a |
| description | String | Required. Allow no more than 300 characters | n/a |

### Seconadary Schema: Styleset

| Property | Type | Validations | Default Value |
|----------|----------|----------|----------|
| _id | Objectid | n/a | n/a |
| theme | Objectid, ref: 'Theme' | n/a | n/a |
| a_Color | String | ex. rgba(0, 128, 255, 1)| rgba(0, 0, 255, 1)|
| a_TextDecoration | String | ex. none | underline |
| fontColor | String | ex. rgba(66, 71, 72, 1)| rgba(0, 0, 0, 1)|
| googleFontFamily | String | ex. 'Josefin Sans' | Helvetica, sans-serif |
| nav_BackgroundColor | String | ex. rgba(255, 152, 84, 0.9)| rgba(232, 236, 235, 1) |
| main_BackgroundColor | String | ex. rgba(232, 236, 235, 1) | rgba(255, 255, 255, 1) |
| button_Color | String | ex. rgba(255, 255, 255, 1)| rgba(255, 255, 255, 1) |
| button_BackgroundColor | String | ex. rgba(0, 123, 255, 1) | rgba(128, 128, 128, 1) |
| button_BackgroundColor_Hover | String | ex. rgba(0, 86, 179, 1) | rgba(85, 85, 85, 1) |

## Entity Relationship Diagram

Lucid EDR link

## MVP CRUD / RESTful Routes
 Route name | CRUD operation | URL endpoint | Module name | Controller Action | Notes |
|----------|----------|----------|----------|----------|----------|
 GET | View a form to add a new theme | /themes/new | Theme | newTheme | |
 POST |Create a theme | /themes | Theme | createTheme | Res.redirect to /themes/${createdTheme._id} |
 GET | Read all themes | /themes | Theme | index | |
 DELETE | Delete specified theme | /themes/:id | Theme | deleteTheme | Res.redirect to /themes/ |
 GET | Read a specific theme | /themes/:id | Theme | show | |
 POST | Create a styleset for a theme (1:M) | /themes/:id/stylesets | Styleset | createStyleset | Res.redirect to /themes/${stylesetData.theme} |
 PUT | Update a specific styleset | /stylesets/:id | Styleset | updateStyleset | Res.redirect to /themes/${stylesetData.theme} |
 DELETE | Delete a specific styleset | /stylesets/:id | Styleset | deleteStyleset | |

## User Stories