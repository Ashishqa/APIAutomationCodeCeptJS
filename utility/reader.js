class reader{

    getDataFromArray(response,Key, value){
        const map = new Map();
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
           // console.log(element)
            if(element[Key]=value[0])
            {
                for (let i = 1; i < value.length; i++) {
                    //console.log(value[i]);
                    //console.log(element[value[i]]);

                    map.set(value[i],element[value[i]]);
                }
            }
            
        }

        return map;
    }

}

module.exports= reader;