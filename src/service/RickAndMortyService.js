import { API_RM } from "../constans/Api.constans";

class RickAndMortyService {

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        let result = response.json();
        return result;
    }
    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        let result = response.json(); 
        return result;
    }
}

export default new RickAndMortyService();