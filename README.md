
![Logo](https://github.com/JuliaG03/TechTutor/blob/main/logo.png?raw=true)


# TechTutor 
Tech Tutor is a mobile app designed to provide bite-sized tutorials for computer science topics!
It is optimized and thought for on-the-go learning. 

The app offers a diverse range of learning paths covering programming languages, algorithms, and more.

 - Bite-sized Tutorials: Access quick and effective tutorials on various computer science topics.

 - Leaderboard: Compete with other learners and climb the leaderboard by earning points.

 - Learning Paths: Choose from different learning paths tailored to your skill level and interests.

 - Chat Integration: Engage with the support team if you have any problem. We will get to you as soon as possible.

## Frameworks


- Frontend
        
    - React Native
    - NativeWind ( for styling )

- Backend

    - TypeScript
    - JavaScript

- Data Base
    - Supabase

- Debug and testing
    - Expo




## User Stories

- As a user, I want to be able to create an account so that I can track my progress and achievements.
- As a user, I want to view bite-sized tutorials on specific computer science topics within my chosen learning path for easy access.
- As a user, I want to be able to switch between dark and light themes.
- As a user, I want to interact with my friends and share the learning experience.
- As a user, I want to be able to edit my profile and avatar.
- As a user, I want to be able to see which lessons I've completed.
- As a user, I want to be able to change my password and email as needed.
- As a student, I want to see the leaderboard rankings so that I can compare my progress with other learners and track my standing in the community.
- As a friend, I want to be able to request a heart/life from another friend so that I can continue learning.

## UML Diagram
![UserFlow](https://github.com/JuliaG03/TechTutor/blob/main/User%20Flow.png?raw=true)

## Demo

Insert gif or link to demo


## Screenshots


#### Sign In Screen

![SignIn](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/signIn.jpeg?raw=true)

#### Sign Up Screen
![SignUp](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/signUp.jpeg?raw=true)
#### Main Menu Screen

![MainMenu](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/mainMenu.jpeg?raw=true)

#### Forgot Password Screen
![forgotPassword](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/forgotPassword.jpeg?raw=true)

#### Settings Screen
![Settings](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/settings.jpeg?raw=true)

#### Profile Screen
![Profile](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/profile.jpeg?raw=true)

#### Support Screen
![Support](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/support.jpeg?raw=true)

#### Learning Paths Screens 
![LearningPaths](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### Lessons from Learning Path Screen
![Lessons](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/lessons.jpeg?raw=true)

#### Lesson Screen
![Lesson](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

####  About Screen

![About](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/about.jpeg?raw=true)

#### Leaderboard

![About](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/leaderboard.jpeg?raw=true)


## Trello

![App Screenshot](https://github.com/JuliaG03/TechTutor/blob/main/screenshots/trello_mds.png?raw=true)


## Design Patterns used 



### Component Composition:
Component composition in React Native involves breaking down complex UI components into smaller, reusable components. Each component focuses on a specific task or responsibility, making it easier to understand and maintain the codebase.

 By composing these smaller components together, developers can create more flexible and scalable UIs. For example, a login screen might consist of separate components for input fields, buttons, and error messages, each encapsulating its logic and styling. 
 
Component composition promotes reusability, readability, and maintainability in React Native development.

### Provider Pattern:
The provider pattern in React Native involves passing data or functionality down through the component tree using context or props. 

Providers are components or hooks responsible for managing shared state or behavior that multiple components need access to. By encapsulating this shared logic in providers, developers can avoid prop drilling and make the codebase more modular and maintainable. 

For example, a theme provider might manage the current theme of the app, providing it to all child components that need access to styling information. 

The provider pattern promotes encapsulation, separation of concerns, and code organization in React Native applications
## Using Large Language Models (LLMs)

In the development and debugging phases of our app implementation, we leveraged Large Language Models (LLMs) to enhance our productivity and solve complex problems. Here's how we utilized LLMs in various stages of our project:

### Debugging

Throughout the implementation, we encountered issues with poorly written functions that did not perform as expected. In such cases, we turned to BlackBox.ai for assistance in identifying and fixing the problems in our code.

- [x] Tech Tutor approved

### Implementation Ideas

There were times when we had a clear vision of what we wanted to achieve but were unsure of how to get there. ChatGPT proved invaluable by providing step-by-step guidance on various topics, including:

- Choosing compatible programming languages
- Running our mobile app on different devices for testing
- Suggesting additional app pages beyond our initial plan
- Recommending color palettes for the app design
- (I'll ask ChatGPT later for more ideas to include here 😉)

- [x]   Tech Tutor approved
## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Before you begin, make sure you have Node.js and npm installed on your system. You can download and install them from the [official Node.js website](https://nodejs.org/).

### Installation

1. Install Expo CLI globally:

    ```bash
    npm install -g expo-cli
    ```

2. Clone this repository:

    ```bash
    git clone https://github.com/your_username/your_project.git
    ```

3. Navigate to the project directory:

    ```bash
    cd your_project
    ```

4. Install dependencies:

    ```bash
    npm install
    ```

5. Install Supabase client:

    ```bash
    npm install @supabase/supabase-js
    ```

### Running the App

1. Start the development server:

    ```bash
    npx expo start --tunnel
    ```
-- disclaimer: there may be issues if you don't run it with --tunnel


2. Use the Expo Developer Tools to run the app on an iOS or Android simulator, or scan the QR code using the Expo Go app on your mobile device to run the app on your device.

## Built With

- [Expo](https://expo.dev/) - Framework and platform for universal React applications
- [React Native](https://reactnative.dev/) - A framework for building native apps using React
- [Supabase](https://supabase.io/) - An open-source Firebase alternative

## Project Points


#### A. Implementation
- [ ] Live demo for the app



#### B. Process of Software Development
- [x] User stories (1)
- [x] backlog creation (1) 
- [x] UML diagram (2)
- [x] Source control cu git: (2)
  - [x] Branch creation
  - [x] Merge/rebase
  - [x] Pull requests
  - [x] Minim 10 commits 
- [ ] Automated tests (2)
- [ ] Raportare bug și rezolvare cu pull request (1)
- [x] Refactoring, code standards (1)
- [x] Comentarii cod (1)
- [x] Design patterns (1)
- [x] AI Tool  (1)

## Developers

We are a team of students in the second year of University @FMI

- [@JuliaG03](https://github.com/JuliaG03)
- [@flaviaf7](https://github.com/flaviaf7)
- [@adelp13](https://github.com/adelp13)

