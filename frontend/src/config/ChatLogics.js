export const getSender = (loggedUser, users) => {
    return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
  };
<<<<<<< HEAD
  
  export const getSenderFull = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1] : users[0];
  };
=======
  s
>>>>>>> f16f737ec33ce512d04f4389533394b3591ab2a4
