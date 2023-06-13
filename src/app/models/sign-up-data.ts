export class SignUpData {
    name:string;
    email:string;
    password:string;
    password_confirmation:string;
    rememberMe:boolean;

    constructor(name:string, email:string, password:string, password_confirmation:string, rememberMe:boolean) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.rememberMe = rememberMe;
    }
}

