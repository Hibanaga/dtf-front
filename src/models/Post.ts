import ApiPost from 'types/api/Post';

import Comment from 'models/Comment';

export default class Post {
    id: string;
    title: string;
    likeCount: number;
    dislikeCount: number;
    comments: Comment[];

    constructor(data: ApiPost) {
        this.id = data.id;
        this.title = data.title;
        this.likeCount = data.likeCount;
        this.dislikeCount = data.dislikeCount;
        this.comments = data?.comments
            ? data?.comments?.map((element) => new Comment(element))
            : [];
    }
}
