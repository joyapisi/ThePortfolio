# Portfolio
Portfolio setup, Mobile First and DOM Manipulation
<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
- [🚀 Live Demo](#live-demo)    
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
-- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

# 📖 [Portfolio] <a name="Portfolio"></a>


**[Portfolio]** is a simple HTML, CSS and JavaScript project that teaches how to parse a Figma design to create a UI in both mobile and desktop version, use JavaScript events and use JavaScript to manipulate DOM elements. 

## 🛠 Built With  <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <summary>Figma Template</summary>
  <ul>
    <li><a href="https://https://www.figma.com/">Figma</a></li>
  </ul>
  

  <summary>Javascript runtime environment</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">Node JS</a></li>
  </ul>

  <summary>Version control</summary>
  <ul>
    <li><a href="github.com">Git Hub</a></li>
  </ul>
</details>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>
Click here to see a live demo of this project online: <li><a href="https://joyapisi.github.io/ThePortfolio/">Live Demo</a></li>


<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

Creating your first "Portfolio" project

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

-A Git hub account
-Git bash
-Node JS
-Visual Studio Code as your code editor
-Figma account

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone[ (https://github.com/joyapisi/ThePortfolio.git)]
```
### Set Up Linters
## Define Linters
A linter is a tool to help you improve your code. You can learn more about Linters here: (source: (<https://www.testim.io/blog/what-is-a-linter-heres-a-definition-and-quick-start-guide/>)).

Advantages of Linting:

1. Fewer errors in production- The use of linters helps to diagnose and fix technical issues such as code smells. As a result, fewer defects make their way to production.
2. Achieving a more readable and consistent style, through the enforcement of its rules.
3. Having more secure and performant code.
4. Having an objective and measurable assessment of code quality.
5. Having fewer discussions about code style and aesthetic choices during code reviews.

## Install Linters 
You can find linters for most of the programming languages, e.g. Rubocop for Ruby or ESLint for JavaScript.

Also, there are many ways you can integrate a linter in your workflow:

-text editor plugin
-GitHub Actions
-GitHub apps
## Set up Linters
**Note:** The npm package manager is going to create a node_modules directory to install all of your dependencies. You shouldn't commit that directory. To avoid that, you can create a .gitignore file and add node_modules to it:

# .gitignore
node_modules/

## ESLint 
Run 
```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

## Web Hint 
This is a customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

**NOTE:** If you are using Windows, make sure you initialize npm to create `package.json` file. 
   ```
   npm init -y
   ```

1. Run
   ```
   npm install --save-dev hint@7.x
   ```
   *how to use npm: (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*
2. Copy [.hintrc](.hintrc) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx hint .
   ```
   [Copy contents of .eslintrc.json to the root directory of your project](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.eslintrc.json)
5. Fix validation errors.

### [Stylelint](https://stylelint.io/)

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

1. Run

npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
not sure how to use npm? Read this.

2. Copy .stylelintrc.json to the root directory of your project.

3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**

If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.
4. Run npx stylelint "**/*.{css,scss}" on the root of your directory of your project.

5. Fix linter errors.

6. **IMPORTANT NOTE:** feel free to research auto-correct options for Stylelint if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

### Making Your HTML and CSS Code From Figma
-Pick a figma template to work on and use css and html to build a replica the first 2 sections of the mobile website using the template you have chosen.

-Make sure to replace the contents of helloworld.html with new contents of your own html code which replicates the chosen figma template. 

-In your figma template, you will create the toolbar (or header) and the headline section (right after the header)

**note**
-Make sure to pick the mobile template on figma and not the desktop template.
-In order to lay out the elements on the page you should use Flexbox in all 2 sections.
-You don't need to implement any functionality that requires JavaScript, like opening the menu or creating dropdowns.
-You must stick to the design as much as possible (e.g. font, colors, images, text, margins) using the templates in Figma.
-Implement the button interactions (enable, hover, etc.).



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Joy Phoebe**

- GitHub: (https://github.com/joyapisi)
- Twitter: (https://twitter.com/joyapisi)
- LinkedIn: (https://http://www.linkedin.com/in/joy-phoebe-00b80a13a)


## 🤝 Contributing <a name="contributing"></a>
 Dave: (https://github.com/dave-prog)
  Nelofar: (https://github.com/Nelofarzabi)
  Ismail Mayito: (https://github.com/ismayito)


<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[Feature_1]**
Adding drop down for my tech stack in the about me section.
- [ ] **[Feature_2]**
Adding proper project titles
- [ ] **[Feature_3]**
Adding proper project details from former employment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/joyapisi/ThePortfolio/issues).

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly leave a comment below and share it with someone who enjoys coding! Coding is all about continuous learning and allowing yourself to be a beginner. Keep going! 


<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="Microverse Inc."></a>

I'm thankful to Microverse for providing a study platform which guided me through this project and to my coding partners at Microverse for the collaborative effort. 


<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **[Question_1]**
How can I download figma images?

  - [Answer_1]
You can watch this video to understand hpw you can download figma images and use CSS provided in figma:
<ul>
  <li><a href="https://www.loom.com/embed/167236d17f104fc18298c5c9888354c9">Git Hub</a></li>
</ul>

- **[Question_2]**
Where can I download node JS for installation?

  - [Answer_2]
Node Js can be downloaded here- <ul>
    <li><a href="https://nodejs.org/en/download/"> Node JS </a></li>
  </ul>

- **[Question_3]**
How can I style with flexbox?
  - [Answer_3]
  Learn everything you need to know about flex boxes here:
<ul>
    <li><a href="https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid">Flex Boxes</a></li>
  </ul>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>