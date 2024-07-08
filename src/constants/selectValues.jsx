import { IconGitHub , IconFMentor} from "../icons";
import { IconFaceBook, IconLinkedin, IconTwitter, IconYoutube } from "../icons/IconsSites";

export const selectValues = [
    {
        value: "GITHUB",
        icon : <IconGitHub/>,
        text: "GitHub",
    },
    {
        value: "FRONTEND_MENTOR",
        icon : <IconFMentor/>,
        text: "Frontend Mentor",
    },
    {
        value: "TWITTER",
        icon : <IconTwitter/>,
        text: "Twitter",
    },
    {
        value: "LINKEDIN",
        icon : <IconLinkedin/>,
        text: "LinkedIn",
    },
    {
        value: "YOUTUBE",
        icon : <IconYoutube/>,
        text: "YouTube",
    },
    {
        value: "FACEBOOK",
        icon : <IconFaceBook/>,
        text: "Facebook",
    },
];

export const linksObj = {
    "GITHUB": {
        icon : <IconGitHub/>,
        text: "GitHub",
        className: "github",
    },
    "FRONTEND_MENTOR": {
        icon : <IconFMentor/>,
        text: "Frontend Mentor",
        className: "frontend-mentor",
    },
    "TWITTER": {
        icon : <IconTwitter/>,
        text: "Twitter",
        className: "twitter",
    },
    "LINKEDIN": {
        icon : <IconLinkedin/>,
        text: "LinkedIn",
        className: "linkedIn",
    },
    "YOUTUBE": {
        icon : <IconYoutube/>,
        text: "YouTube",
        className: "youTube",
    },
    "FACEBOOK": {
        icon : <IconFaceBook/>,
        text: "Facebook",
        className: "facebook",
    },
    "EMPTY": {
        icon : null,
        text: "Select platform",
        className: "empty",
    }
}