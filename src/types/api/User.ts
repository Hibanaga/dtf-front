import ApiComment from 'types/api/Comment';
import ApiFileUpload from 'types/api/FileUpload';
import ApiPost from 'types/api/Post';

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

export default interface User {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    imageKey?: string;
    gender: Gender;
    fileUploads: ApiFileUpload[];
    comments: ApiComment[];
    posts: ApiPost[];
}
