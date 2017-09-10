const NOT_APPLICABLE_RESPONSIBILITY = -1;
const NO_RESPONSIBILITY = 0;
const PARTIAL_RESPONSIBILITY = 1;
const PRIMARY_RESPONSIBILITY = 2;

const SKILL_PRIORITY_1 = 1;
const SKILL_PRIORITY_2 = 2;
const SKILL_PRIORITY_3 = 3;

var hirewireMobile = {
    title: "Hirewire",
    subtitle: "",
    link: "",
    shortDescription: "",
    longDescription: "",
    thumbnailPhotoUrl: "",
    primaryPhotoUrl: "",
    secondaryPhotos: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: PARTIAL_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: PRIMARY_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    tools: {
        
    }
};

var depot = {
    title: "Depot",
    subtitle: "",
    link: "",
    shortDescription: "",
    longDescription: "",
    thumbnailPhotoUrl: "",
    primaryPhotoUrl: "",
    secondaryPhotos: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: PRIMARY_RESPONSIBILITY,
        marketing: PRIMARY_RESPONSIBILITY,
        analytics: PRIMARY_RESPONSIBILITY,
        customerSupport: PRIMARY_RESPONSIBILITY
    },
    tools: [
        "Android",
        "Google Maps API",
        "Chicago CTA API",
    ]
};

var dropboxMaterial = {
    title: "Dropbox Material Concept",
    subtitle: "",
    link: "",
    shortDescription: "",
    longDescription: "",
    thumbnailPhotoUrl: "",
    primaryPhotoUrl: "",
    secondaryPhotos: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: NOT_APPLICABLE_RESPONSIBILITY,
        marketing: NOT_APPLICABLE_RESPONSIBILITY,
        analytics: NOT_APPLICABLE_RESPONSIBILITY,
        customerSupport: NOT_APPLICABLE_RESPONSIBILITY
    },
    tools: []
};

var hopup = {
    title: "HopUp",
    subtitle: "",
    link: "",
    shortDescription: "",
    longDescription: "",
    thumbnailPhotoUrl: "",
    primaryPhotoUrl: "",
    secondaryPhotos: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PARTIAL_RESPONSIBILITY,
        productStrategy: NO_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: PARTIAL_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    tools: [
        "Firebase Real-Time Database",
        "Firebase Authentication",
        "Firebase Storage",
    ]
};

var luxuper = {
    title: "LuXuper",
    subtitle: "",
    link: "",
    shortDescription: "",
    longDescription: "",
    thumbnailPhotoUrl: "",
    primaryPhotoUrl: "",
    secondaryPhotos: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PARTIAL_RESPONSIBILITY,
        productStrategy: NO_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: NO_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    tools: []
};

var hirewireWeb = {
    title: "Hirewire - Web",
    subtitle: "",
    link: "",
    shortDescription: "",
    longDescription: "",
    thumbnailPhotoUrl: "",
    primaryPhotoUrl: "",
    secondaryPhotos: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: PARTIAL_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: PRIMARY_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    tools: []
};

export function getProjects() {
    return [
        hirewireMobile,
        depot,
        hopup,
        luxuper,
        hirewireWeb,
        dropboxMaterial,
    ]
}
