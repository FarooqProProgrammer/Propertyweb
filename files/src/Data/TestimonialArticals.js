function generateRandomId() {
    const idLength = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
  
    return id;
  }
  
const TestimonialArticleData = [
    {
        id:generateRandomId(),
        title:"Proud to become a Turkish Citizen",
        img:"https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        Date:"18/12/2023"
    }
]

export {TestimonialArticleData}