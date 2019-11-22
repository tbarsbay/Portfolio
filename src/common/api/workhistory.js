var mailchimp = {
    id: 1,
    roleTitle: "Android Engineer",
    company: "Mailchimp",
    // logoUrl: ,
    link: "https://play.google.com/store/apps/details?id=com.mailchimp.mailchimp",
    description: "",
    startDate: new Date("07/01/2018"),
    isPresent: true,
    city: "Atlanta",
    state: "GA"
};

var hirewire = {
    id: 2,
    roleTitle: "Software Engineer",
    company: "Hirewire",
    // logoUrl: ,
    link: "https://play.google.com/store/apps/details?id=com.hirewire.hirewire",
    description: "",
    startDate: new Date("03/01/2016"),
    endDate: new Date("07/01/2018"),
    isPresent: false,
    city: "Atlanta",
    state: "GA"
};

var accenture = {
    id: 3,
    roleTitle: "Management Consulting Analyst",
    company: "Accenture",
    // logoUrl: ,
    description: "",
    startDate: new Date("09/01/2015"),
    endDate: new Date("03/01/2016"),
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