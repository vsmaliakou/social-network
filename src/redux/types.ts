// Profile
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}

// Dialogs
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

// Users
type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    name: string
    status: string
    location: LocationType
    followed: boolean
    photos: PhotosType
}