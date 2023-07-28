export interface Gif {
    url:string;
    images: {
        fixed_height: {
            height:string;
            url:string;
        }
    }
    liked:boolean
}