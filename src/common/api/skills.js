// ADD?
// progressive web apps

// // Platforms, IDEs
// const ANDROID = "Android";
// const IOS = "iOS";
// const REACT_JS = "React.js";
// const REACT_NATIVE = "React Native";

// // IDEs
// const ANDROID_STUDIO = "Android Studio";
// const XCODE = "Xcode";
// vscode

// // Languages
// const JAVA = "Java";
// const JAVASCRIPT = "Javascript";
// const PYTHON = "Python"
// const SQL = "SQL";
// const SWIFT = "Swift";
// const KOTLIN = "Kotlin";

// // Frameworks (right term?)
// const FIREBASE_DATABASE = "Firebase Database";
// const FIREBASE_AUTH = "Firebase Authentication";
// const FIREBASE_CLOUD_MESSAGING = "Firebase Cloud Messaging";
// const FIREBASE_STORAGE = "Firebase Storage";
// const FIREBASE_ANALYTICS = "Firebase Analytics";
// const GOOGLE_ANALYTICS = "Google Analytics";
// const ANDROID_SUPPORT_LIB = "Android Support Library";
// const PLAY_SERVICES = "Google Play Services";
// const MOCKITO = "Mockito";
// const JUNIT = "jUnit";

// // Tools (LPTODO what's the line between tools and frameworks)
// const JENKINS = "Jenkins";
// const METABASE = "Metabase";
// const FABRIC = "Fabric - Crashlytics";
// const PIVOTAL = "Pivotal";
// const TRELLO = "Trello";
// const GRADLE = "Gradle";
// const LOCALYTICS = "Localytics";
// const HOCKEYAPP = "HockeyApp";
// const BRAINTREE = "Braintree";

// // Libraries
// const RETROFIT = "Retrofit";
// const RXJAVA = "RxJava";
// const REACT_ROUTER = "React Router";
// const DAGGER2 = "Dagger 2";

// // APIs
// const GOOGLE_MAPS_API = "Google Maps API";
// const CTA_API = "Chicago Transit API";

// // Other
// const GIT = "Git";
// const MATERIAL_DESIGN = "Material Design";

// // Humor
// const SPENDING_WAY_TOO_LONG_NAMING_VARIABLES = "Spending Way Too Long Naming Variables";

export const ANDROID = { id: 1, name: "Android", starred: true};
export const IOS = { id: 2, name: IOS, starred: false};
export const ANDROID_STUDIO = { id: 3, name: "Android Studio", starred: false};
export const XCODE = { id: 4, name: "Xcode", starred: false};
export const VS_CODE = { id: 41, name: "Visual Studio Code", starred: false};
export const PYTHON = { id: 5, name: "Python", starred: false};
export const JAVA = { id: 6, name: "Java", starred: true};
export const SWIFT = { id: 7, name: "Swift", starred: false};
export const KOTLIN = { id: 8, name: "Kotlin", starred: false};
export const SQL = { id: 9, name: "SQL", starred: false};
export const JAVASCRIPT = { id: 10, name: "Javascript", starred: false};
export const FIREBASE_DATABASE = { id: 11, name: "Firebase Database", starred: false};
export const FIREBASE_AUTH = { id: 12, name: "Firebase Auth", starred: false};
export const FIREBASE_CLOUD_MESSAGING = { id: 13, name: "Firebase Cloud Messaging", starred: false};
export const FIREBASE_STORAGE = { id: 14, name: "Firebase Storage", starred: false};
export const FIREBASE_ANALYTICS = { id: 15, name: "Firebase Analytics", starred: false};
export const GOOGLE_ANALYTICS = { id: 16, name: "Google Analytics", starred: false};
export const REACT_JS = { id: 17, name: "React JS", starred: true};
export const REACT_NATIVE = { id: 18, name: "React Native", starred: true};
export const ANDROID_SUPPORT_LIB = { id: 19, name: "Android Support Library", starred: false};
export const PLAY_SERVICES = { id: 20, name: "Play Services", starred: false};
export const MOCKITO = { id: 21, name: "Mockito", starred: false};
export const JUNIT = { id: 22, name: "jUnit", starred: false};
export const JENKINS = { id: 23, name: "Jenkins", starred: false};
export const METABASE = { id: 24, name: "Metabase", starred: false};
export const FABRIC = { id: 25, name: "Fabric", starred: false};
export const PIVOTAL = { id: 26, name: "Pivotal", starred: false};
export const TRELLO = { id: 27, name: "Trello", starred: false};
export const GRADLE = { id: 28, name: "Gradle", starred: false};
export const LOCALYTICS = { id: 29, name: "Localytics", starred: false};
export const HOCKEYAPP = { id: 30, name: "HockeyApp", starred: false};
export const BRAINTREE = { id: 31, name: "Braintree", starred: false};
export const RETROFIT = { id: 32, name: "Retrofit", starred: false};
export const RXJAVA = { id: 33, name: "RxJava", starred: false};
export const REACT_ROUTER = { id: 34, name: "React Router", starred: false};
export const DAGGER2 = { id: 35, name: "Dagger 2", starred: false};
export const GOOGLE_MAPS_API = { id: 36, name: "Google Maps API", starred: false};
export const CTA_API = { id: 37, name: "CTA API", starred: false};
export const GIT = { id: 38, name: "Git", starred: false};
export const MATERIAL_DESIGN = { id: 39, name: "Material Design", starred: true};
export const SPENDING_WAY_TOO_LONG_NAMING_VARIABLES = { id: 40, name: "Spending Way Too Much Time Naming Variables", starred: true};
export const REDUX = { id: 42, name: "Redux", starred: false };

export function getSkills() {
    return [
        ANDROID,
        IOS,
        ANDROID_STUDIO,
        XCODE,
        VS_CODE,
        PYTHON,
        JAVA,
        SWIFT,
        KOTLIN,
        SQL,
        JAVASCRIPT,
        FIREBASE_DATABASE,
        FIREBASE_AUTH,
        FIREBASE_CLOUD_MESSAGING,
        FIREBASE_STORAGE,
        FIREBASE_ANALYTICS,
        GOOGLE_ANALYTICS,
        REACT_JS,
        REACT_NATIVE,
        REDUX,
        ANDROID_SUPPORT_LIB,
        PLAY_SERVICES,
        MOCKITO,
        JUNIT,
        JENKINS,
        METABASE,
        FABRIC,
        PIVOTAL,
        TRELLO,
        GRADLE,
        LOCALYTICS,
        HOCKEYAPP,
        BRAINTREE,
        RETROFIT,
        RXJAVA,
        REACT_ROUTER,
        DAGGER2,
        GOOGLE_MAPS_API,
        CTA_API,
        GIT,
        MATERIAL_DESIGN, 
        SPENDING_WAY_TOO_LONG_NAMING_VARIABLES
    ];
};

export function getSkillGroups() {
    return [
        {
            id: 1,
            name: "Primary",
            skills: [
                ANDROID,
                IOS,
                REACT_NATIVE,
                REACT_JS,
                MATERIAL_DESIGN,
            ]
        },
        {
            id: 2,
            name: "Languages",
            skills: [
                JAVA,
                JAVASCRIPT,
                PYTHON,
                SQL,
                SWIFT,
                KOTLIN
            ]
        },
        {
            id: 3,
            name: "Tools",
            skills: [
                JENKINS,
                METABASE,
                GIT,
                GRADLE,
                HOCKEYAPP,
                PIVOTAL
            ]
        },
        {
            id: 4,
            name: "Libraries + Frameworks",
            skills: [
                RXJAVA,
                RETROFIT,
                REDUX,
                DAGGER2,
                FIREBASE_ANALYTICS,
                FIREBASE_CLOUD_MESSAGING,
                FIREBASE_DATABASE,
                FIREBASE_AUTH,
                FIREBASE_STORAGE,
                GOOGLE_ANALYTICS,
                MOCKITO,
                FABRIC,
                BRAINTREE,
                JUNIT
            ]
        },
        {
            id: 5,
            name: "Other",
            skills: [
                ANDROID_STUDIO,
                XCODE,
                VS_CODE,
                GOOGLE_MAPS_API,
                CTA_API,
                SPENDING_WAY_TOO_LONG_NAMING_VARIABLES,
                ANDROID_SUPPORT_LIB,
                PLAY_SERVICES
            ]
        }
    ]
}
