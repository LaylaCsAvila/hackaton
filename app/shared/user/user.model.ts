export class User {
    nome: string;
    email: string;
    // matricula: number;
    telefone: number;
    uId: string;

    constructor(userDB: any) {
        this.nome = userDB.name;
        this.email = userDB.email;
        this.telefone = userDB.providers.phoneNumber;
        this.uId = userDB.uid;
    }
}
