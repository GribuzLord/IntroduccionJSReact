//Fetch API con promises

const ulr='https://jsonplaceholder.typicode.com/comments';

fetch(ulr)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Hubo un error');
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log(error.message);
    })