import RootStore from "./RootStore.store";
export const storeProvider=RootStore.create({
    contents: [
        {
            id: '1',
            title: "Card 1",
            comment: "comment",
            notes: '',
            seen: false,
        },
        {
            id: '2',
            title: "Card 2",
            comment: "comment",
            notes: '',
            seen: false,
        },
        {
            id: '3',
            title: "Card 3",
            comment: "comment",
            notes: '',
            seen: true,
        },
    ]
})
export default storeProvider
