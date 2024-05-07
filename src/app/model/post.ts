import { Comment } from "./comment";

export class Post{

    data?:string;
    img?: File | null|string = null;
    imageData?:string;
    content?:string;
    likes?:number;
    name?: string;
    dislikes?:number;
    comments?:Comment[];
}