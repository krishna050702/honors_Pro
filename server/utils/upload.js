import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    // url: `mongodb://user:Krishna@lucifer-shard-00-00.fxyhspx.mongodb.net:27017,ac-yfjq6w0-shard-00-01.fxyhspx.mongodb.net:27017,ac-yfjq6w0-shard-00-02.fxyhspx.mongodb.net:27017/?ssl=true&replicaSet=atlas-6nqx4h-shard-0&authSource=admin&retryWrites=true&w=majority`,
    url: `mongodb://user:codeforinterview@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 