// ADD?
// progressive web apps

export const ANDROID = { id: 1, name: "Android", starred: true, visible: true};
export const IOS = { id: 2, name: "iOS", starred: false, visible: true};
export const ANDROID_STUDIO = { id: 3, name: "Android Studio", starred: false, visible: false};
export const XCODE = { id: 4, name: "Xcode", starred: false, visible: false};
export const VS_CODE = { id: 41, name: "VS Code", starred: false, visible: false};
export const PYTHON = { id: 5, name: "Python", starred: false, visible: true};
export const JAVA = { id: 6, name: "Java", starred: true, visible: true};
export const SWIFT = { id: 7, name: "Swift", starred: false, visible: true};
export const KOTLIN = { id: 8, name: "Kotlin", starred: false, visible: true};
export const SQL = { id: 9, name: "SQL", starred: false, visible: true};
export const JAVASCRIPT = { id: 10, name: "Javascript", starred: false, visible: true};
export const FIREBASE_DATABASE = { id: 11, name: "Firebase Database", starred: false};
export const FIREBASE_AUTH = { id: 12, name: "Firebase Auth", starred: false};
export const FIREBASE_CLOUD_MESSAGING = { id: 13, name: "Firebase Cloud Messaging", starred: false};
export const FIREBASE_STORAGE = { id: 14, name: "Firebase Storage", starred: false};
export const FIREBASE_ANALYTICS = { id: 15, name: "Firebase Analytics", starred: false};
export const GOOGLE_ANALYTICS = { id: 16, name: "Google Analytics", starred: false};
export const REACT_JS = { id: 17, name: "React", starred: true, visible: true};
export const REACT_NATIVE = { id: 18, name: "React Native", starred: true, visible: true};
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
export const RETROFIT = { id: 32, name: "Retrofit", starred: false, visible: false};
export const RXJAVA = { id: 33, name: "RxJava", starred: false, visible: true};
export const REACT_ROUTER = { id: 34, name: "React Router", starred: false};
export const DAGGER2 = { id: 35, name: "Dagger 2", starred: false};
export const GOOGLE_MAPS_API = { id: 36, name: "Google Maps API", starred: false};
export const CTA_API = { id: 37, name: "CTA API", starred: false};
export const GIT = { id: 38, name: "Git", starred: false};
export const MATERIAL_DESIGN = { id: 39, name: "Material Design", starred: true, visible: true};
export const SPENDING_WAY_TOO_LONG_NAMING_VARIABLES = { id: 40, name: "Spending Too Much Time Naming Variables", starred: false, visible: true};
export const REDUX = { id: 42, name: "Redux", starred: false, visible: true};

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
