import Platform from "../data/Platform";

interface Platform{
id:number
name:string;
slug:string
}

const usePlatform = () => ({data:Platform, isLoading:false, error:false})

export default usePlatform

