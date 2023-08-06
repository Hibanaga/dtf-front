import ApiFileUpload from 'types/api/FileUpload';

export default class FileUpload {
    id: string;
    createdAt?: string;
    fileName?: string;
    imageUrl?: string;
    mimeType?: string;
    originalName?: string;

    constructor(data: ApiFileUpload) {
        this.id = data.id;
        this.createdAt = data?.createdAt;
        this.fileName = data?.fileName;
        this.imageUrl = data?.imageUrl;
        this.mimeType = data?.mimeType;
        this.originalName = data?.originalName;
    }
}
