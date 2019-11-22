import './skills';
import { ANDROID, IOS, SQL, SWIFT, GIT, PYTHON, DAGGER2, GOOGLE_MAPS_API, CTA_API, REACT_NATIVE, ANDROID_STUDIO, XCODE, JAVASCRIPT, FIREBASE_CLOUD_MESSAGING, FIREBASE_ANALYTICS, ANDROID_SUPPORT_LIB, PLAY_SERVICES, MOCKITO, JUNIT, JENKINS, METABASE, FABRIC, TRELLO, PIVOTAL, GRADLE, LOCALYTICS, HOCKEYAPP, BRAINTREE, RETROFIT, RXJAVA, MATERIAL_DESIGN, SPENDING_WAY_TOO_LONG_NAMING_VARIABLES, GOOGLE_ANALYTICS, FIREBASE_DATABASE, FIREBASE_AUTH, FIREBASE_STORAGE, JAVA, VS_CODE, REACT_JS, REACT_ROUTER, REDUX } from './skills';

const NOT_APPLICABLE_RESPONSIBILITY = -1;
const NO_RESPONSIBILITY = 0;
const PARTIAL_RESPONSIBILITY = 1;
const PRIMARY_RESPONSIBILITY = 2;

const SKILL_PRIORITY_1 = 1;
const SKILL_PRIORITY_2 = 2;
const SKILL_PRIORITY_3 = 3;

var hirewireMobile = {
    id: 1,
    title: "Hirewire",
    link: "https://play.google.com/store/apps/details?id=com.hirewire.hirewire",
    shortDescription: "An on-demand hiring app for the service industry.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    primaryImageUrl: "https://lh3.googleusercontent.com/4GYQW1y9XWgq18ZStmJRstCzZ1hwrDmLVvGzYy2T9EhJnMGqhrNWeS66ZXdm9Qc_7QWh=w300-rw",
    secondaryImageUrls: [
        "https://lh3.googleusercontent.com/4GYQW1y9XWgq18ZStmJRstCzZ1hwrDmLVvGzYy2T9EhJnMGqhrNWeS66ZXdm9Qc_7QWh=w300-rw",
        "https://lh3.googleusercontent.com/4GYQW1y9XWgq18ZStmJRstCzZ1hwrDmLVvGzYy2T9EhJnMGqhrNWeS66ZXdm9Qc_7QWh=w300-rw",
        "https://lh3.googleusercontent.com/4GYQW1y9XWgq18ZStmJRstCzZ1hwrDmLVvGzYy2T9EhJnMGqhrNWeS66ZXdm9Qc_7QWh=w300-rw"
    ],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: PARTIAL_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: PRIMARY_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    skills: [
        ANDROID,
        JAVA,
        IOS,
        REACT_NATIVE,
        ANDROID_STUDIO,
        XCODE,
        JAVASCRIPT,
        SQL,
        SWIFT,
        FIREBASE_CLOUD_MESSAGING,
        FIREBASE_ANALYTICS,
        ANDROID_SUPPORT_LIB,
        PLAY_SERVICES,
        MOCKITO,
        JUNIT,
        JENKINS,
        METABASE,
        FABRIC,
        TRELLO,
        PIVOTAL,
        GRADLE,
        LOCALYTICS,
        HOCKEYAPP,
        BRAINTREE,
        RETROFIT,
        RXJAVA,
        GIT,
        MATERIAL_DESIGN,
        SPENDING_WAY_TOO_LONG_NAMING_VARIABLES
    ]
};

var depot = {
    id: 2,
    title: "Depot",
    link: "https://play.google.com/store/apps/details?id=com.barsbay.transittrackerchicago",
    shortDescription: "An easy-to-use but powerful tool for navigating Chicago with the CTA and Divvy bikes.",
    longDescription: "",
    primaryImageUrl: "",
    secondaryImageUrls: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: PRIMARY_RESPONSIBILITY,
        marketing: PRIMARY_RESPONSIBILITY,
        analytics: PRIMARY_RESPONSIBILITY,
        customerSupport: PRIMARY_RESPONSIBILITY
    },
    skills: [
        ANDROID,
        ANDROID_STUDIO,
        JAVA,
        PYTHON,
        GOOGLE_ANALYTICS,
        ANDROID_SUPPORT_LIB,
        PLAY_SERVICES,
        GOOGLE_MAPS_API,
        CTA_API,
        MATERIAL_DESIGN,
        SPENDING_WAY_TOO_LONG_NAMING_VARIABLES
    ]
};

var dropboxMaterial = {
    id: 3,
    title: "Dropbox Material Design Concept",
    link: "",
    shortDescription: "An unofficial redesign of Dropbox's Android app using Google's new (at the time) Material Design standards.",
    longDescription: "",
    primaryImageUrl: "",
    secondaryImageUrls: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: NOT_APPLICABLE_RESPONSIBILITY,
        marketing: NOT_APPLICABLE_RESPONSIBILITY,
        analytics: NOT_APPLICABLE_RESPONSIBILITY,
        customerSupport: NOT_APPLICABLE_RESPONSIBILITY
    },
    skills: [
        ANDROID_STUDIO,
        MATERIAL_DESIGN
    ]
};

var hopup = {
    id: 4,
    title: "HopUp",
    link: "https://play.google.com/store/apps/details?id=com.hopupapp.android",
    shortDescription: "A marketplace for the airsoft community to buy, sell, and trade goods.",
    longDescription: "",
    primaryImageUrl: "",
    secondaryImageUrls: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PARTIAL_RESPONSIBILITY,
        productStrategy: NO_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: PARTIAL_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    skills: [
        FIREBASE_DATABASE,
        FIREBASE_AUTH,
        FIREBASE_STORAGE,
        ANDROID,
        ANDROID_STUDIO,
        JAVA,
        FIREBASE_ANALYTICS,
        ANDROID_SUPPORT_LIB,
        PLAY_SERVICES,
        RETROFIT,
        RXJAVA,
        SPENDING_WAY_TOO_LONG_NAMING_VARIABLES,
        TRELLO
    ]
};

var luxuper = {
    id: 5,
    title: "LuXuper",
    link: "",
    shortDescription: "A community for car enthusiasts to explore the latest in the world of luxury and performance cars.",
    longDescription: "",
    primaryImageUrl: "",
    secondaryImageUrls: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PARTIAL_RESPONSIBILITY,
        productStrategy: NO_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: NO_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    skills: [
        ANDROID,
        ANDROID_STUDIO,
        JAVA,
        ANDROID_SUPPORT_LIB,
        TRELLO,
        RETROFIT,
        RXJAVA,
        DAGGER2,
        SPENDING_WAY_TOO_LONG_NAMING_VARIABLES
    ]
};

var hirewireWeb = {
    id: 6,
    title: "Hirewire - Web",
    link: "",
    shortDescription: "",
    longDescription: "",
    primaryImageUrl: "",
    secondaryImageUrls: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: PARTIAL_RESPONSIBILITY,
        marketing: NO_RESPONSIBILITY,
        analytics: PRIMARY_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    skills: [
        VS_CODE,
        JAVASCRIPT,
        FIREBASE_CLOUD_MESSAGING,
        REACT_JS,
        TRELLO,
        REACT_ROUTER,
        MATERIAL_DESIGN,
        SPENDING_WAY_TOO_LONG_NAMING_VARIABLES,
        REDUX
    ]
};

var portfolio = {
    id: 7,
    title: "This Portfolio",
    link: "http://www.tamerbarsbay.me/", //TODO do something funny
    shortDescription: "The portfolio you're currently looking at.",
    longDescription: "",
    primaryImageUrl: "",
    secondaryImageUrls: [],
    roles: {
        development: PRIMARY_RESPONSIBILITY,
        design: PRIMARY_RESPONSIBILITY,
        productStrategy: PRIMARY_RESPONSIBILITY,
        marketing: PRIMARY_RESPONSIBILITY,
        analytics: PRIMARY_RESPONSIBILITY,
        customerSupport: NO_RESPONSIBILITY
    },
    skills: [
        VS_CODE,
        JAVASCRIPT,
        REACT_JS,
        REDUX,
        TRELLO,
        REACT_ROUTER,
        MATERIAL_DESIGN,
        SPENDING_WAY_TOO_LONG_NAMING_VARIABLES
    ]
}

export function getProjects() {
    return [
        hirewireMobile,
        depot,
        hopup,
        luxuper,
        hirewireWeb,
        dropboxMaterial,
        portfolio
    ]
}
