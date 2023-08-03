type tutuTuning = Object;


export const useTutuTuning = () => {
    return useState<tutuTuning>('selectedItems', () => { return { naked: "", tops: "", bottoms: "", hats: "", tools: "" } })
}