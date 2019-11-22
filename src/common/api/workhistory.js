var mailchimp = {
    id: 1,
    roleTitle: "Android Engineer",
    company: "Mailchimp",
    logoUrl: "/images/logo_mailchimp.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.mailchimp.mailchimp",
    description: "",
    startDate: "July 2018",
    isPresent: true,
    city: "Atlanta",
    state: "GA"
};

var hirewire = {
    id: 2,
    roleTitle: "Software Engineer",
    company: "Hirewire",
    logoUrl: "/images/logo_hirewire.png",
    link: "https://play.google.com/store/apps/details?id=com.hirewire.hirewire",
    description: "",
    startDate: "March 2016",
    endDate: "July 2018",
    isPresent: false,
    city: "Atlanta",
    state: "GA"
};

var accenture = {
    id: 3,
    roleTitle: "Management Consulting Analyst",
    company: "Accenture",
    logoUrl: "/images/logo_accenture.jpeg",
    description: "",
    startDate: "September 2015",
    endDate: "March 2016",
    isPresent: false,
    city: "San Francisco",
    state: "CA"
};

export function getWorkHistory() {
    return [
        mailchimp,
        hirewire,
        accenture
    ];
}