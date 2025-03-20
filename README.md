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

3. **Evaluation Criteria** ((Assumption))
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
   cd showcase-site
   ```
2. **Install dependencies (if applicable)**
   ```sh
   npm install
   ```
3. **Run the development server**

   ```sh
   npm run dev
   ```

   if it crashes or fails to start dev server, try:
   restarting VSCode
   running the commands in admin cmd
   delete node_modules, run npm install and npm run dev again

4. **Develop your widget**
   - Follow the [[Example Widget Development Guide](Widget-Development.md)](Widget-Development.md) for best practices.
   - Ensure your widget meets the competition criteria.
5. **Submit your widget**
   - Submit your widget as a jsx (and any additional css, jsx or image files) to the devpost:
   - Follow the [[Submission Guidelines](Submission-Guidelines.md)](Submission-Guidelines.md).

---

## 📂 Repository Structure

```plaintext
/src                      # Main source code of project
│── /widgets              # Directory for sample widgets
│── /submission-widgets   # Place your widget and extra files here
│── /docs                 # Documentation and guidelines
│── /src                  # Main source code of the project
│── /assets               # Some assets
│── package.json          # Project dependencies
│── Widget-Development.md # Sample widget development
```

---

## 📜 Contribution Guidelines

- Read the **[[Widget Development Guide]()](Widget-Development.md)** before starting.
- Make sure your widget is **modular, functional, and follows best practices**.
- Submit your code via the DevPost page.
- Follow the **[[Code of Conduct]()](Code-of-Conduct.md)** and be respectful to other participants.

---

## 🚀 Additional Resources

- **[[Widget Development Guide]()](Widget-Development.md)** – Learn how to structure and build your widget.
- **[[Submission Guidelines]()](Submission-Guidelines.md)** – Instructions on how to submit your widget.
- **[[Embedding Widgets]()** – Guide on how to integrate your widget into a website.

---

## Widget embedding instruction:

1. Just upload into the submissions-widgets directory. It should automatically render if no issues show up.

This **GitHub Wiki Home Page** provides an organized structure for your **HackMelbourne Widget Challenge**. Let me know if you need modifications or additional sections! 🚀
