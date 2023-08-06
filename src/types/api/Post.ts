import ApiComment from 'types/api/Comment';

export default interface Post {
    id: string;
    title: string;
    likeCount: number;
    dislikeCount: number;
    comments: ApiComment[];
}
