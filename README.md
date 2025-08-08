# React Native Learning Repository

- This repository is designed to help you learn React Native by applying more practices. It includes various components and features that you can explore and modify.
- The code is structured to provide a clear understanding of how React Native works, with examples of components, navigation, and styling.
- Feel free to clone the repository and start experimenting with the code to enhance your learning experience.
- Happy coding!
- install using this command

````bash
npx create-expo-app -e with-tailwindcss
- then run the app using
```bash
cd my-app
npm start
````

- This will start the development server and open the Expo Go app on your device or emulator.

---

## What is React Native?

React Native is an open-source framework developed by Facebook for building mobile applications using JavaScript and React. It allows developers to create cross-platform apps for iOS and Android using a single codebase, leveraging the power of React's component-based architecture.

## Why use React Native?

- **Cross-Platform Development**: Write once, run on both iOS and Android, reducing development time and effort.
- **Performance**: React Native uses native components, providing better performance compared to hybrid frameworks.
- **Hot Reloading**: Allows developers to see changes in real-time without recompiling the entire app, speeding up the development process.
- **Large Community**: A vast ecosystem of libraries and tools, making it easier to find solutions and resources.

## There are Two Ways to Use React Native

1. **Expo**: A framework and platform for universal React applications. It provides a set of tools and services to build, deploy, and iterate on React Native apps quickly. Expo simplifies the development process by providing a managed workflow with built-in components and APIs.
2. **React Native CLI**: A command-line interface for creating and managing React Native projects. It gives you more control over the native code and allows for deeper customization, but requires more setup and configuration compared to Expo.

## Components in React Native

React Native provides a set of core components that are essential for building mobile applications. Here are some of the most commonly used components:

- **View**: The most fundamental component for building a UI in React Native. It acts as a container for other components and can be styled with CSS-like properties.
- **Text**: Used to display text in the app. It supports various styles.
- **ScrollView**: A component that allows for scrolling through a list of items or content that exceeds the screen size. It can be nested with other components.
  props
  - `horizontal`: If set to true, the ScrollView will scroll horizontally instead of vertically.
  - `showsVerticalScrollIndicator`: Controls the visibility of the vertical scroll indicator, value is a boolean.
  - `showsHorizontalScrollIndicator`: Controls the visibility of the horizontal scroll indicator.
- **Button**: A basic button component that can be used to trigger actions. It can be customized with styles and text.
  props
  - `title`: The text displayed on the button.
  - `onPress`: A function that is called when the button is pressed.
- **Image**: Used to display images in the app. It supports various image formats.
- **FlatList**: A performant way to render large lists of data. It only renders items that are currently visible on the screen, improving performance for long lists.
  props
  - `data`: An array of data to be rendered in the list.
  - `renderItem`: A function that takes an item from the data array and returns a React component to render.
  - `keyExtractor`: A function that takes an item and returns a unique key for that item.
  - `ListEmptyComponent`: A component to render when the list is empty.
  - `ItemSeparatorComponent`: A component to render between each item in the list.
  - `onEndReached`: A function that is called when the end of the list is reached, useful for loading more data.
  - `onEndReachedThreshold`: A number that defines how far from the end of the list the `onEndReached` function should be triggered.
  - `refreshControl`: A component that provides pull-to-refresh functionality.
    props
    - `refreshing`: A boolean that controls the refreshing state.
    - `onRefresh`: A function that is called when the user pulls to refresh.
- **VirtualizedList**: A component that provides a high-performance way to render large lists of data by only rendering items that are currently visible on the screen.
  - Note: when user scrolls the list, it will only render the more items it hidden not fetching the data again.
  props
  - `data`: An array of data to be rendered in the list.
  - `getItem`: A function that takes an item from the data array and returns a React component to render.
  - `getItemCount`: A function that returns the total number of items in the data
  - `keyExtractor`: A function that takes an item and returns a unique key for that item.
  - `renderItem`: A function that takes an item from the data array and returns a React component to render.
  - and many more props to customize the behavior of the list.
- **SectionList**: A component that renders a list of sections, each with its own header. It is useful for displaying grouped data.
  props
  - `sections`: An array of objects, each representing a section with a title and data.
  - `renderItem`: A function that takes an item from the section and returns a React component to render.
  - `renderSectionHeader`: A function that takes a section and returns a React component to render as the section header.
  - `renderSectionFooter`: A function that takes a section and returns a React component to render as the section footer.
  - `keyExtractor`: A function that takes an item and returns a unique key for that item.
  - `stickySectionHeadersEnabled`: A boolean that controls whether section headers should stick to the top of the list when scrolling.
  - and many more props to customize the behavior of the list.
---

## Expo Components

Expo provides a rich set of components that enhance the functionality of React Native applications. Here are some commonly used Expo components:

- **SafeAreaProvider**: A component that ensures that the content is rendered within the safe area boundaries of a device, avoiding notches and other screen obstructions.
- **SafeAreaView**: A wrapper component that applies padding to the content to ensure it is displayed within the safe area of the device.
  - SafeAreaProvider and SafeAreaView use from `react-native-safe-area-context` to manage safe area insets across different devices and orientations , this feature from expo
- **Link**: A component that allows you to create links to external URLs or internal screens within your app. It can be used to navigate to web pages or other parts of your application.
  props
  - `href`: The URL to navigate to when the link is pressed.

---

## Styling in React Native

React Native uses a styling system similar to CSS, but with some differences. Styles are defined using JavaScript objects, and you can use various properties to style components. Here are some key points about styling in React Native:

- **Flexbox**: React Native uses Flexbox for layout, allowing you to create responsive designs that adapt to different screen sizes. You can use properties like `flexDirection`, `justifyContent`, and `alignItems` to control the layout of components.
  if flexDirection is set to `column` then the `justifyContent` will work vertically and `alignItems` will work horizontally. and if flexDirection is set to `row` then the `justifyContent` will work horizontally and `alignItems` will work vertically.
- Note:
  - `flexDirection` is set to `column` by default.
  - if flexWrap is set to `wrap` then use `alignContent` to control the alignment of wrapped items, instead of `alignItems`.
