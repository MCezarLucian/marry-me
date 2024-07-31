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
  },
];
