export interface GiftIdeaInput {
    occasion: string,
    relationship: string,
    gender: 'female' | 'male',
    age: number | null,
    career: string,
    hobby: string,
    personality: string
}