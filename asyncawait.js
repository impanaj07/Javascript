function walkDog(){

}
function cleanKitchen(){

}
function takeOutTrash(){

}
async function doChores(){
    try{
        const walkDogResult=await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult=await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult=await takeOutTrash();
        console.log(takeOutTrashResult);
    }
    catch(error){
        console.error(error);
    }
    }
    doChores()
    