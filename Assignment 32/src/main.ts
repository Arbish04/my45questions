let current_users: string[] = ['Aliya', 'JoHn', 'Ashina', 'ayeSha'];
let new_users: string[] =['Hamza', 'JoHn', 'Sana', 'Ashina', 'Tom'];
new_users.forEach(newUsername => {  let lowerCase: string = newUsername.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase().includes(lowerCase))){
        console.log(`The username ${newUsername} is not available. Please write a diferent username`);
    }
       else {
            console.log(`The username ${newUsername} is available.`);
        }
    }
);
