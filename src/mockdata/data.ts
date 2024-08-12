import { MessageType, UserType } from "../lib/types";

export const users: UserType[] = [
  {
    id: "1",
    fullName: "John Stone",
    age: 30,
    email: "john.stone@email.com",
    personalAttributes: [
      { attributeId: "1", attributeName: "Honestly", value: "0" },
      { attributeId: "2", attributeName: "Loyalty", value: "0" },
    ],
    searchedAttributes: [
      { attributeId: "1", attributeName: "Honestly", value: "0" },
      { attributeId: "2", attributeName: "Loyalty", value: "0" },
    ],
    phoneNumber: "0743491829",
    gender: "male",
    description: "This is John Stone description",
    dateOfBirth: new Date(),
    coverPictures: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboK1wZUZPH3YbcQ-CKGZ5CNawKdSXs4c7jQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02ArPIOrwQDvzDoXHcho4hRHt5KGT8G1rEw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGgKnt4k7cn5fjg0hrhdPqSg8hC_UiWnC1w&s",
    ],
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02ArPIOrwQDvzDoXHcho4hRHt5KGT8G1rEw&s",
    rating: 4,
    roleId: "2",
    roleType: "Contestant",
  },
];

export const messages: MessageType[] = [
  {
    id: 1,
    senderId: 1,
    receiverId: 2,
    content: "Salutare, Boss!",
    timestamp: new Date(),
  },
  {
    id: 2,
    senderId: 5,
    receiverId: 1,
    content: "Un mesaj!",
    timestamp: new Date(),
  },
  {
    id: 2,
    senderId: 3,
    receiverId: 2,
    content: "Un mesaj!",
    timestamp: new Date(),
  },
];
