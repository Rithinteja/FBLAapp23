# Gator Scheduler

Gator Scheduler is a react-native expo application for Green Level High School that helps keep parents and the community up to date. The application is designed for use on phones, but can also be used on tablets and in web browsers. It can be used in multiple mobile operating systems such as Android or iOS.

Some features include: 
* Login and Registration - Users can register for an account that is stored in Firebase and login to the app with that account. Reminders created are saved within the account and are viewable upon login. 
* School Calendar - a calendar is viewable in the app to allow users to organize events by day. 
* Activities Schedule - There are cards editable for each day that allows users to place activities in them and create a schedule in order to help remind them of events.
* Upcoming events - Users can scroll through the activities schedule and calendar in order to see upcoming events that they need to be reminded of.
* Photo Sharing - Teachers and Students can share photos from the gallery on their device on multiple apps such as messaging apps, email apps, and social media apps. 
* Absence Notification - Parents can notify school when a student is going to be absent so plans can be made and the student will be able to make up work faster. 
* Social Media - There are multiple social media applications accessible through the app depending on what apps the user has installed on their device, and the user can use those social media apps through Gator Scheduler. 
* Grade Drop Notification - Teachers are able to notify parents when a student's grade drops beyond a certain point so that plans can be made to bring the student's grade up. This feature was recommended by our schools administration.
* Bug Reporting - Users are able to report any bugs discovered to our emails which are provided in the application. 

For more information, check the [documentation](https://www.fbla-pbl.org/media/2022/08/FBLA-High-School-CE-Guidelines_8.29.22.pdf). 

## Installation

Use the package manager [npm](https://docs.npmjs.com/) to install the necessary libraries in the root directory of the project. 

```bash
npm install expo-image-picker
npm install expo-clipboard
npm install react-native-calendars
npm install react-native-paper
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npx expo install firebase
```

For more information on the libraries, check the documentation: [Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/), [Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/), [Calendars](https://github.com/wix/react-native-calendars), [Firebase](https://rnfirebase.io/), [Paper](https://github.com/callstack/react-native-paper), [Navigation](https://github.com/react-navigation/react-navigation), [Screens](https://github.com/software-mansion/react-native-screens), and [Safe Area](https://github.com/th3rdwave/react-native-safe-area-context).

For information on installing expo, see the following [documentation](https://docs.expo.dev/get-started/installation/).

Code from the React Native Share [documentation](https://reactnative.dev/docs/share) was used as a template. 

A youtube [video](https://www.youtube.com/watch?v=v9J7c1uyLow) was used as a tutorial to create the image picker in the application.
A youtube [video](https://youtu.be/ql4J6SpLXZA) was used as a tutorial to create the login.
A youtube [video](https://youtu.be/RdaQIkE47Og) was used as a tutorial to create the calendar.

Images from the following websites were used in our application and are either covered under the fair use for educational purposes guidelines or non-copyrighted: [Gator](https://www.wcpss.net/greenlevelhs) and [Calendar](https://www.citypng.com/search?q=calendar+black+icon+clear+background).

## Usage

<img src="https://user-images.githubusercontent.com/97137002/226774350-73796ca0-421a-4902-ac4b-33b036a8d6e5.png" width="150" height="280">
This is the login screen of our app. Users can login with their existing account or register a new account. 

<img src="https://user-images.githubusercontent.com/97137002/226774477-8c365ac8-053e-4a3a-847e-12af481515f1.png" width="150" height="280">
This is home screen of our application, which contains a calendar with an activities schedule in it as well as an upcoming events list. The Messaging button on the very bottom of the screen allows the user to navigate to the messaging screen. 

<img src="https://user-images.githubusercontent.com/97137002/226774618-55aecab8-b01c-44c1-9e5b-55eebb623f0c.png" width="150" height="280">
There are multiple editable cards for each day that the user can add events to. The user can scroll up and down, or press the days on the bar at the top of the screen to see the entire schedule. 

<img src="https://user-images.githubusercontent.com/97137002/226774830-395189e3-2505-48a3-882e-85e629d54ca4.png" width="150" height="280">
Alternatively, the user can press the tab above the schedule to make the calendar drop down, allowing them to find specific dates on the calendar. 

<img src="https://user-images.githubusercontent.com/97137002/227054767-1ef9f890-eb5b-4566-90b3-030f0018d707.png" width="150" height="280">
This is the last screen of our application, the messaging screen. It allows the user to notify the school about student absences, report falling grades to parents, share photos to teachers and students, use multiple social media applications installed on the users device, report bugs to us should the user discover any, and navigate back to the home screen with the homescreen button. It also allows the user to see our works cited with the link at the bottom of the screen along with the school website linked as well to allow parents to access it quickly. 

<img src="https://user-images.githubusercontent.com/97137002/226776845-8ae1730c-47b2-4c05-b925-c226f4506672.png" width="150" height="280">
This shows an example of what is pulled up when the notify, report, share image, or use buttons are pressed. It shows the base text which serves as instructions for each messaging option and is editable, shows people that are often messaged as suggestions on who to message, apps installed on the device such as messaging apps, email apps, and social media applications that can be used for messaging, and other options at the bottom dependent on the device. 

<img src="https://user-images.githubusercontent.com/97137002/226777384-4f3b0c33-206e-44bf-931e-1ed4d941cc48.png" width="150" height="280">
This shows what happens when the pick image button is pressed. It pulls up a gallery of all photos on the device and allows the user to select one, and then gives the user the ability to crop the photo and move it in and out of frame. Then the user can choose the image and it is copied to their clipboard, allowing them to paste it in the share image option following the instructions. 

## Contributing

Pull requests are welcome. For major problems, please open an issue first
to discuss what needs to be changed.

Project is not open to contributions.

## Support 

For errors or if help is needed, use the support and bug reporting feature built-in to the application. 

 <img src="https://user-images.githubusercontent.com/97137002/226777700-377e2238-7236-46f1-a6d2-a0865bdae7e2.png" width="150" height="280">

## Works Cited

Here is our [Works Cited](https://docs.google.com/document/d/1pt5DowFXnV8VdsI9MtJbEBEwvj4-4bOkp14ovU6jMjM/edit?usp=sharing).

## License

[MIT](https://choosealicense.com/licenses/mit/)
