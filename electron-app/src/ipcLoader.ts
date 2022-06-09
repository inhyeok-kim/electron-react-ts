import fs from 'fs';

function ipc(){
    try {
        const services = fs.readdirSync(__dirname+'/services');
        services.forEach(service=>{
            require(__dirname+'/services/'+service).default();
        })
    } catch (error) {
        console.error(error);
    }
}

export default ipc;