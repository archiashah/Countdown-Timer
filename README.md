# Countdown Timer

## Overview

This project is a simple yet interactive countdown timer that allows users to set a custom date, upload a video or image background, and apply basic styling to the countdown text (font size and colour).
## Features Implemented (Tier 1)

- **Date Selection**: Users must input a target date and time for the countdown.
- **Video/Image Upload**: Users can upload a **.mp4 video** or **.png image** as the background. The default background is blue.
- **Basic Styling Controls**:
  - Font size selection for the countdown text.
  - Single font color selection for all countdown text elements.

## Approach & Prioritization

1. **Core Structure (HTML & CSS)**
    - I started by defining the basic HTML structure and organizing it into three key components: one for the input form, another for the countdown display, and a final component for the completion screen that appears when the countdown reaches zero.
    - I styled the page to position the elements with Flexbox and absolute positioning to create a clean and structured layout. I also applied basic styling for the background, text and form and text by adjusting the colour, spacing, and padding.
2. **Countdown Logic (JavaScript)**
    - I implemented the countdown logic by first retrieving the target time and the current time, then calculating the difference between them. From this, I determined the remaining days, hours, minutes, and seconds and dynamically updated the display. I also ensured proper handling for when the countdown reaches zero, stopping the timer and displaying a completion message. At this stage, I thoroughly tested the countdown timer to verify its functionality
3. **User Interactions**
   - After finalizing the core countdown functionality, I added input fields to allow users to specify a countdown title, target date, and background file. I then integrated these inputs into the JavaScript logic, ensuring real-time updates to the countdown display. To maintain a consistent and adaptable UI, I refined the CSS to accommodate dynamic content changes. I implemented default behaviors, if no title or background file was selected. I tested the timer at this stage to verify its working correclty.

4. **Styling Controls**
   - Next, I implemented customization options for font color and size, allowing users to personalize the countdown display. I added input fields to the form and integrated them into the JavaScript logic, ensuring the selected styles were dynamically applied to the countdown elements. To maintain a consistent user experience, I validated inputs and set default values to white for font color and 24px for font size. Additionally, I refined the CSS to refine the UI of the form and Countdown Timer. Finally, I conducted thorough testing to confirm that all customizations functioned as expected.

**Comments**

I tried to prioritize Tier 1 requirments. For Tier 2, Implementing individual styling controls would require restructuring how countdown elements are managed. Implementing draggable text was challenging due to handling positioning, and the responsiveness for the live preview. It would also require a change in the UI since the current selection for the preferences of the text is done with the form.

On average, each part took about 1-2 hours to implement. Factoring in testing and debugging, the entire project took approximately 8-10 hours to complete.

Scaling this for a real production website would require an optimized performance and smoother updates. It would also require a storing user settings in a database or local storage to enable saving and reloading countdowns, as well as common. Additonally mobile responsiveness and cross-browser compatibility would need be prioritized, along with backend integration for multi-user support. Additionally, some other features to implement would benotifications/alarms, including browser notifications, sound alerts with custom ringtones, and push notifications for mobile users, to alert users when the countdown ends. Additionally developing a desktop widget would allow users to keep the countdown visible on their desktop without needing to keep a browser tab open.

## Setup Instructions
You can clone this repository or you can view and use the countdown timer here: [Countdown Timer](https://archiashah.github.io/Countdown-Timer/)
