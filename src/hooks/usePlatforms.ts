import useData from "./useData";

export interface PlatformsParent{
    id:number,
    name:string,
    platforms:AllPlatform[]
}
export interface AllPlatform{
    id:number,
    name:string,
    slug:string
}

function usePlatforms() {
    return useData<PlatformsParent>("/platforms/lists/parents")
}

export default usePlatforms;