import ApiUser, { Gender } from 'types/api/User';

import Comment from 'models/Comment';
import FileUpload from 'models/FileUpload';
import Post from 'models/Post';

export default class User {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    imageKey?: string;
    gender: Gender;
    fileUploads: FileUpload[];
    comments: Comment[] | null;
    posts: Post[] | null;

    constructor (data: ApiUser) {
        this.id = data.id;
        this.createdAt = data?.createdAt;
        this.updatedAt = data?.updatedAt;
        this.email = data.email;
        this.userName = data.userName;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.imageKey = data?.imageKey;
        this.gender = data.gender;
        this.fileUploads = data?.fileUploads
            ? data?.fileUploads?.map((element) => new FileUpload(element))
            : [];
        this.comments = data?.comments
            ? data.comments.map((element) => new Comment(element))
            : null;
        this.posts = data?.posts
            ? data.posts.map((element) => new Post(element))
            : null;
    }
}
