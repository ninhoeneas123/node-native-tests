
export class UsersController {

    users = [
        {
            "id": "0",
            "name": "jose",
            "email": "jose.eneas@gmail.com"
        }
    ]


    create(data) {
        if (!this.users) {
            this.users = []
        }
    
        if (!data) {
            return "Data is empty";
        }
    
        this.users.push(data);
        return "User created successfully";
    }
    

    find(id) {
        const user = this.users.find(user => user.id === id)
        return user

    }

    remove(id) {
        users.filter(user => user.id !== idRemover);
        return user
    }

}