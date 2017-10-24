export class User {
    nome: string;
    email: string;
    matricula: number;
    telefone: number;

    constructor(nome: string, email: string, matricula: number, telefone: number) {
        this.nome = nome;
        this.email = email;
        this.matricula = matricula;
        this.telefone = telefone
    }
}
