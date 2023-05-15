import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-yfjq6w0-shard-00-00.fxyhspx.mongodb.net:27017,ac-yfjq6w0-shard-00-01.fxyhspx.mongodb.net:27017,ac-yfjq6w0-shard-00-02.fxyhspx.mongodb.net:27017/?ssl=true&replicaSet=atlas-6nqx4h-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;