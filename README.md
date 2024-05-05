# SafeEats
License: MIT

SafeEats is an open-source web application that helps users find allergy-friendly dishes at restaurants, based on their specific dietary needs and preferences. Users can find restaurants in a specific location, filter by food allergies or dietary restrictions, and save their preferences to their profile.

This repository contains the source code for the SafeEats web application, including its front-end, back-end, and API integration. Some content has been inherited by the previous SafeEats team: https://github.com/rebeccarozansky/SafeEats.

### Features
- User account creation, authentication, and login
- Customizable user profiles with food allergies and dietary restrictions
- Restaurant retrieval by location and dietary requirements
- Restaurant pages, including the menu items
- Integration with external APIs for restaurant data (location)

### Installation
Required Installations prior to running app:
- GitHub Desktop
  - Navigate to https://desktop.github.com/ and download the right installer for your operating system.
- VS Code or other IDE
  - Navigate to https://code.visualstudio.com/download and click on one of the download links depending on the operating system.
- NPM and NodeJS
  - Navigate to https://nodejs.org/en/download and download the right installer for your operating system.
- React Native 
  - Navigate to https://reactnative.dev/docs/environment-setup.
    - For Expo Go Quickstart, download the Expo Go app on your phone.
    - For React Native CLI Quickstart, it requires iOS simulator or Android Studio to run the app through a simulator on your computer. Select the correct Development OS and Target OS, then follow the instructions.

### Set-Up
- Clone the GitHub repository into your local development platform (for us, VSCode):
  1. After installation, navigate to the GitHub repository, then click on the green Code button and open with GitHub Desktop. (Or, clone the project whichever way you are most comfortable with.)
- Ask the client for the project secrets and add them to an .env file
- Setting up the environment:
  1. Launch VS Code.
  2. In the top bar, go to Terminal > New Terminal. A terminal should appear at the bottom part of the screen.
  3. In the terminal, type on the command line: **npm install**. Wait for all the packages to be installed. This may take a while.
- Running the application
  1. After the installation is complete, write the following command in the terminal: **npm start**. This will generate the QR code to open the project on Expo.
  2. Open the Expo app on your phone and click on “Scan QR Code” or open your camera, scan the QR Code and this will automatically open the project on your phone.
  3. You can also press a (for android) or i (for iOS simulator) on the keyboard to run the app on your current device.
- Other ways to run the application
  1. iOS Simulator:
    - You will need a MacOS device in order to run it for iOS.
    - Go to the Apple Store and download Xcode.
    - Launch Xcode, then on the top bar of your Mac click on Xcode and then click on the Settings option in the drop down menu.
    - Navigate to the Platforms tab of the Settings menu
    - Download the iOS simulator. This will take a while and some space on your disk.
    - When you launch the app in your terminal using “npm expo start” press i when prompted and your simulator will launch!
  2. Android Studio Emulator:
    - Download through Android Studio Website.
    - Follow instructions on https://reactnative.dev/docs/environment-setup.
    - After setting up the environment, in order to run the app each time:
      - On the upper right panel, click on the "Device Manager" then the plus sign to add a new virtual machine. Choose a phone version, then "UpsideDownCake," then name, and then create.
      - On the upper right panel, click "Running Devices" then the plus sign to add a device. Choose a phone. Click the power button to turn it on.
      - On the bottom left panel, click on the "Terminal," then the plus sign to add another new terminal.
      - In the first, type: **npm start**. In the second, type: **npm run android** then **y** when prompted. The app may take a while to show on the virtual phone.

### Dependency issues
- It is possible you may run into issues when setting up the environment or running the application. One we ran into was updating the dependencies, since React Native and Expo may be hard to maintain since they update frequently. We had to create a new Expo project, copy over the files, and then update all the dependencies. For updating, here is a [link](https://reactnative.dev/docs/upgrading) to the React Native page.
