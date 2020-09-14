import { theme } from './theme';

const statusTitleText = [
    "Delivered",
    "Ordered",
    "Reported",
    "Arrived",
]

const statusSecondaryText = [
    "15 New Packages",
    "72 New Orders",
    "72 Support Cases",
    "34 Upgraded Boxes",
]

const statusData = [
    {
        title: "Delivered",
        bubbleColor: `${theme.red1}`,
        description:  "15 New Packages",
        progress: 20,
        lineColor:`${theme.red2}`,
    },
    {
        title: "Ordered",
        bubbleColor: `${theme.blue1}`,
        description:  "72 New Orders",
        progress: 62,
        lineColor:`${theme.blue2}`,
    },
    {
        title: "Reported",
        bubbleColor: `${theme.orange1}`,
        description:  "72 Support Cases",
        progress: 40,
        lineColor:`${theme.orange2}`,
    },
    {
        title: "Arrived",
        bubbleColor: `${theme.green1}`,
        description:  "34 Upgraded Boxes",
        progress: 15,
        lineColor:`${theme.green2}`,
    },
]

const revenueText = [
    "Daily Revenue",
    "Hourly Revenue",
]

const lineColors = [
    `${theme.supportContainer}`,
    `${theme.orange}`,
]

const revenueFigures = [
    "827,000",
    "37,000"
]

const profilePic = "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg"

const teamData = [
    {
        name: "Elizabeth McCoy",
        type: "Admin",
        profile: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg',
    },
    {
        name: "Dan Reyes",
        type: "Admin",
        profile: 'https://generated.photos/vue-static/home/feed/latino-male.png',

    },
    {
        name: "Mary Ann Watkins",
        type: "Admin",
        profile: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg',

    },
    {
        name: "Benjamin Wallace",
        type: "Admin",
        profile: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg',

    },
    {
        name: "Vincent Gibson",
        type: "Admin",
        profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',

    },
    {
        name: "Tyler Garrett",
        type: "Admin",
        profile: 'https://generated.photos/vue-static/home/feed/asian.png',

    },
]

const appointmentData = [
    {
        name: "Charles Bradley",
        type: "Dentist",
        date: "27 Feb 2020",
        time: "11:00 AM",
        status: 'pending',
        profile: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg',
    },
    {
        name: "Jose Freeman",
        type: "Therapist",
        date: "15 Jan 2020",
        time: "8:00 PM",
        status: 'complete',
        profile: 'https://generated.photos/vue-static/home/feed/latino-male.png',

    },
    {
        name: "Emma Carol",
        type: "Cardiologist",
        date: "30 Mar 2020",
        time: "12:00 AM",
        status: 'complete',
        profile: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg',

    },
    {
        name: "Terry Hughes ",
        type: "Psychologist",
        date: "11 Nov 2020",
        time: "10:00 PM",
        status: 'complete',
        profile: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg',

    },
]



const menuContent = [
    {
        title: "Menu",
    },
    {
        title: "Tasks",
    },
    {
        title: "Projects",
    },
    {
        title: "Customers",
    },
    {
        title: "Dashboard",
    },
    {
        title: "Schedule",
    },
    {
        title: "Planner",
    },

]

const supportText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariat."

export {
    statusTitleText,
    statusSecondaryText,
    supportText,
    revenueText,
    lineColors,
    revenueFigures,
    teamData,
    appointmentData,
    menuContent,
    profilePic,
    statusData,
}
