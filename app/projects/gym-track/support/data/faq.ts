const faq = [
  {
    question: '1. How does GymTrack work?',
    answer:
      'GymTrack automatically logs your gym visits using location data. Once you add your gym and grant location access, GymTrack detects when you enter and leave the gym area via geofencing and records your session duration and visit count for each added gym.',
  },
  {
    question: '2. Do I need to start or stop workouts manually?',
    answer: `No, GymTrack automatically detects when you start and stop your workouts based on your location and activity. You don't need to manually start or stop tracking. 
    
However, please note the following **for Android users only**: 
* Background location tracking **stops** if you terminate (force close or swipe away) the app.
* Tracking resumes automatically when you reopen the app.
* A **terminated app will not restart** on its own when a geofence or location event occurs — this is a platform limitation (Android).

To ensure automatic tracking continues, simply keep GymTrack running in the background rather than fully closing it.
      `,
  },
  {
    question: "3. What if my gym visit doesn't get recorded?",
    answer: `If your gym visit doesn't get recorded, please check the following:
* Ensure that you have granted **location permissions** to GymTrack.
* Make sure that your gym address is correct.
* Check your device's **battery optimization settings**, as battery saving modes can interfere with background location tracking.

If the issue persists, please contact our support team (me) for further assistance.`,
  },
  {
    question: '4. Is my location data shared with third parties?',
    answer: `No, your location data is **never shared** with any third parties. All data collected by GymTrack is stored **locally on your device** and is only used to track your gym visits.

Your data never leaves your device.`,
  },
  {
    question: '5. How can I delete my data from GymTrack?',
    answer:
      'To delete your data from GymTrack, please go to the app settings and select the option to clear your data. This will remove all your gym visit records from the app.',
  },
];
export default faq;
