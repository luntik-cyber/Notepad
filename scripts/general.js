// initializing required variables
const font_picker = document.getElementById("font-picker");
const size_picker = document.getElementById("size-picker");
const color_picker = document.getElementById("color-picker");
const weight_picker = document.getElementById("weight-picker");

const text_area = document.getElementById("text");

const elements = document.getElementsByClassName("elements");

function con(to_print)
{
    console.log(to_print)
}

// this function will popup menu with range inputs
function pickers_with_range(index) // if index 1 then it will point to font size button. if index 2 then it will point to font weight
{
    // checking if menu visible
    if (elements[index].style.opacity == "1")
    {
        // making menu unvisible and shorter
        elements[index].style.opacity = "0";
        elements[index].style.height = "0";
        // making his child unvisible
        elements[index].children[0].style.opacity = "0";
    }
    else // this will run when menu unvisible and picker clicked
    {
        // making menu visible and higher
        elements[index].style.opacity = "1";
        elements[index].style.heigth = "auto";
        // making his child visible
        elements[index].children[0].style.opacity = "1";
    }
}
// this event will popup menu where user can choose font family (style) to use
font_picker.addEventListener("click",
    () =>
    {
        // checing if menu is popup
        if (elements[0].style.opacity == 1)
        {
            // making menu invisible
            elements[0].style.opacity = "0";
            // making more shorter
            elements[0].style.height = "0";
            // parsing all childrens (buttons)
            for (let index = 0; index < elements[0].children.length; index++)
            {
                // changing buttons height and font size to make them invisible to
                elements[0].children[index].style.height = "0";
                elements[0].children[index].style.fontSize = "0";
            }
        }
        else // this will happen when button is not visible and picker is clicked
        {
            // making menu visible
            elements[0].style.opacity = "1";
            // changing height to auto because it will automatically make size that will fit all his childrens
            elements[0].style.height = "auto";
            // parcing children
            for (let index = 0; index < elements[0].children.length; index++)
            {
                // changing buttons height and font to make them visible
                elements[0].children[index].style.height = "30px";
                elements[0].children[index].style.fontSize = "18px";
            }
        }
    }
);

// this event listener will popup menu onclick that has input range that will change font size
size_picker.addEventListener("click", () => pickers_with_range(1))
// this event listener will popup menu onclick that has input range that will change font weight
weight_picker.addEventListener("click", () => pickers_with_range(3))

// this event will popup menu with color input to change font color
color_picker.addEventListener("click",
    () =>
    {
        // checking if menu visible
        if (elements[2].style.opacity == "1")
            {
                elements[2].style.opacity = "0";
            elements[2].style.height = "0";
            elements[2].children[0].style.opacity = "0";
        }
        else // this will work when menu unvisible and picker clicked
        {
            // making menu visible and changing his hight to show it
            elements[2].style.opacity = "1";
            elements[2].style.height = "auto";
            // making his child visible
            elements[2].children[0].style.opacity = "1";
        }
    }
)

// this event happen when use already popup that menu and choosed one of font family and there we changing it
for (let index = 0; index < elements[0].children.length; index++)
{
    // getting all childs and giving new event "click"
    elements[0].children[index].addEventListener("click",
        () => // this arrow function will change font family of text area to the class that button have (buttons have font family class name)
        {
            text_area.style.fontFamily = elements[0].children[index].className;
        }
    )
};
elements[1].children[0].addEventListener("input",
    (event) =>
    {
        text_area.style.fontSize = `${event.target.value}px`
    }
)
elements[2].children[0].addEventListener("input",
    (event) =>
    {
        text_area.style.color = event.target.value
    }
)
elements[3].children[0].addEventListener("input",
    (event) =>
    {
        text_area.style.fontWeight = event.target.value
    }
)