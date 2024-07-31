import { UserType } from "../lib/types";

export const users: UserType[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Stone",
    age: 30,
    email: "john.stone@email.com",
    attributes: ["Honestly", "Loyalty"],
    soulmateAttributes: ["Honestly", "Loyalty"],
    phoneNumber: "0743491829",
    gender: "male",
    description: "This is John Stone description",
    birthdayDate: new Date(),
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboK1wZUZPH3YbcQ-CKGZ5CNawKdSXs4c7jQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02ArPIOrwQDvzDoXHcho4hRHt5KGT8G1rEw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGgKnt4k7cn5fjg0hrhdPqSg8hC_UiWnC1w&s",
    ],
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02ArPIOrwQDvzDoXHcho4hRHt5KGT8G1rEw&s",
  },
];
