import { ipcMain } from 'electron';

function testService(){
    ipcMain.on("test/hi", (e,arg)=>{
        console.log('test/hi', arg);
    });
}

export default testService;