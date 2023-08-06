import ApiComment from 'types/api/Comment';

export default class Comment {
    id: string;
    message: string;
    likeCount: number;
    dislikeCount: number;

    constructor (data: ApiComment) {
        this.id = data.id;
        this.message = data.message;
        this.likeCount = data.likeCount;
        this.dislikeCount = data.dislikeCount;
    }
}
