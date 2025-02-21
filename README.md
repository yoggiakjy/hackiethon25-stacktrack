# 🏆 HackMelbourne Widget Challenge  

## 📌 Overview  
The **HackMelbourne Widget Challenge** is a coding competition aimed at enhancing students' enthusiasm for programming, strengthening their understanding of fundamental web development concepts, and fostering creativity and imagination.  

Participants will create **JavaScript widgets**, which are **customizable, reusable, and interactive components** that can be integrated into the provided **HackMelbourne sample website** or **any other specified website**.  

## 🎯 Objectives  
- **Encourage students to engage in hands-on web development** through a competitive yet educational challenge.  
- **Strengthen understanding of JavaScript components** and web-based application development.  
- **Promote creativity** by allowing participants to develop unique and useful widgets.  
- **Provide practical experience** that can help students build real-world web applications.  

## 📦 Project Scope  
1. **JavaScript Widget Development**  
   - Participants will build **custom JavaScript components** (widgets).  
   - These components must be **self-contained and reusable** while maintaining a clean structure.  
   - Widgets must return **a `<div>` element** that can include attributes, event listeners, and interactivity.  
   - Refer to the example widgets in the repo for the expected structure

2. **Widget Compatibility & Integration**  
   - Widgets should be adaptable to work with **our sample website** or any existing site.    
   - You are allowed to use external libraries
   - A library or detailed instructions should be provided on **how to inject widgets into websites** and enable **drag-and-drop interactions** (e.g., see Adam’s notepad widget).  

3. **Evaluation Criteria**  ((Assumption))
   - **Functionality**: Does the widget work as expected?  
   - **Creativity**: How unique and innovative is the widget?  
   - **Usability**: Is the widget easy to use and integrate?  
   - **Code Quality**: Is the code well-structured and maintainable?  

---

## 📖 Getting Started  
To participate in the HackMelbourne Widget Challenge, follow these steps:  
1. **Clone the repository**  
   ```sh
   git clone https://github.com/HackMelbourne/widget-challenge.git
   cd widget-challenge
   ```
2. **Install dependencies (if applicable)**  
   ```sh
   npm install
   ```
3. **Run the development server**  
   ```sh
   npm start
   ```
4. **Develop your widget**  
   - Follow the [[Widget Development Guide](Widget-Development.md)](Widget-Development.md) for best practices.  
   - Ensure your widget meets the competition criteria.  
5. **Submit your widget**  
   - Submit your widget as a jsx (and any additional css or jsx files) to the devpost: 
   - Follow the [[Submission Guidelines](Submission-Guidelines.md)](Submission-Guidelines.md).  

---

## 📂 Repository Structure  
```plaintext
/widget-challenge
│── /widgets              # Directory for submitted widgets
│── /docs                 # Documentation and guidelines
│── /src                  # Main source code of the project
│── /public               # Static assets
│── package.json          # Project dependencies
│── README.md             # Project overview
```

---

## 📜 Contribution Guidelines  
- Read the **[[Widget Development Guide]()](Widget-Development.md)** before starting.  
- Make sure your widget is **modular, functional, and follows best practices**.  
- Submit your code via a **Pull Request** with a clear description.  
- Follow the **[[Code of Conduct]()](Code-of-Conduct.md)** and be respectful to other participants.  

---

## 🚀 Additional Resources  
- **[[Widget Development Guide]()](Widget-Development.md)** – Learn how to structure and build your widget.  
- **[[Submission Guidelines]()](Submission-Guidelines.md)** – Instructions on how to submit your widget.  
- **[[Embedding Widgets]()** – Guide on how to integrate your widget into a website.  

---

## Widget embedding instruction:
1. Upload your widget as a .jsx file to the showcase website's repository under "showcase-site -> src -> widgets"  
  
2. Add an export line to the end of your widget file with the following format:
    ```jsx
    export default NotepadWidget;
    ```

3. Under "showcase-site -> src", Open the "Dropdown.jsx" file and add an import line to the top of the file with the following format:

    ```jsx
    import NotepadWidget from './notepad-Component';
    ```

    Where './notepad-Component' should be the address of your widget file.  
    Note that the name of the import must match the name of the export.  

4. Scroll to line 50 of "Dropdown.jsx" to see the draggable wrappers implemented there. Add your widget to the list of wrappers using the same format:  
    ```jsx
    <DraggableWrapper type="ITEM">
            <NotepadWidget /> 
    </DraggableWrapper>
    ```

    where "CounterWidget" should be replaced by the name of your widget previously used on import/export.  
  
5. All done! Run the website and your widget should be good to go!


This **GitHub Wiki Home Page** provides an organized structure for your **HackMelbourne Widget Challenge**. Let me know if you need modifications or additional sections! 🚀
