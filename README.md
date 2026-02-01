# Rootenator
A lightweight CSS root variable generator for colors and sizing

## Features
- Generates either a .css or .scss file to any directory
- Updates style when config detects an update
- Provide a sizing list
- Provide a color list (with dark mode and forced light/dark mode)
- Mix colors from your color sheets and save them as variables for color scheme consistency

## Color Mixing Usage
- In the config file, you can create a mixColors array to mix your provided colors 

Mode 1: (takes from root colors [not dark mode])

"1>color1:color2:weight>name" 

Mode 2: (aware of light and dark mode)

"2>lightColor1:lightColor2:weight>darkColor1:darkColor2:weight>name" 
