/* A widget that allows user to create a mini notepad on any website they wish to take notes on.
   To use: copy code, go to designated website and open website terminal with F12, paste code and press enter
 */
   (function() {
    // Create the notepad container
    const widget = document.createElement("div");
    widget.style.position = "fixed";
    widget.style.bottom = "20px";
    widget.style.right = "20px";
    widget.style.width = "250px";
    widget.style.height = "200px";
    widget.style.background = "#fff";
    widget.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    widget.style.borderRadius = "8px";
    widget.style.padding = "10px";
    widget.style.zIndex = "10000";
    widget.style.display = "flex";
    widget.style.flexDirection = "column";

    // Create a header for dragging
    const header = document.createElement("div");
    header.style.background = "#0078D7";
    header.style.color = "white";
    header.style.padding = "5px";
    header.style.cursor = "move";
    header.style.borderTopLeftRadius = "8px";
    header.style.borderTopRightRadius = "8px";
    header.textContent = "Notes";
    widget.appendChild(header);

    // Create the textarea for taking notes
    const textarea = document.createElement("textarea");
    textarea.style.width = "100%";
    textarea.style.height = "100%";
    textarea.style.border = "none";
    textarea.style.outline = "none";
    textarea.style.resize = "none";
    textarea.style.flex = "1";
    textarea.value = localStorage.getItem("widgetNotes") || "";
    textarea.addEventListener("input", () => {
        localStorage.setItem("widgetNotes", textarea.value);
    });
    widget.appendChild(textarea);

    // Make the notepad draggable
    let offsetX, offsetY, isDragging = false;
    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - widget.offsetLeft;
        offsetY = e.clientY - widget.offsetTop;
    });
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            widget.style.left = e.clientX - offsetX + "px";
            widget.style.top = e.clientY - offsetY + "px";
        }
    });
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // Append notepad to the body
    document.body.appendChild(widget);
})();
