
class Hero{
    constructor(nome,idade,tipo){
        this.nome= nome;
        this.idade= idade;
        this.tipo= tipo;

        
    }
Attack(){
    let attack;
    switch (this.tipo.toLowerCase()) {
        case 'mago':
            attack = 'atacou usando magia!'
            break;
        case 'guerreiro':
            attack = 'atacou usando espada!'
            break;
        case 'monge':
            attack = 'atacou usando artes marciais!'
            break;
        case 'ninja':
            attack = 'atacou usando shuriken!'
            break;
    
        default:
            attack = 'usou um ataque desconhecido!'
            break;
    }

    console.log(`O ${this.nome}:${this.tipo} com idade de ${this.idade} anos  ${attack}`);
   

}


}


const Hero1= new Hero("Merlin", "120", "MAGO"); 
const Hero2= new Hero("Liu Keng", "88", "GUERREIRO"); 
const Hero3= new Hero("Raiden", "540", "MONGE"); 
const Hero4= new Hero("Jackie Chan", "90", "NINJA"); 

Hero4.Attack();