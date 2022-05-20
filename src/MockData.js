import React from "react";
import { fs } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import faker from "faker";

export default function MockData() {
  const genders = ["Male", "Female"];
  console.log(genders[Math.floor(Math.random() * 2)]);
  const hej = async function () {
    for (let i = 0; i < 50; i++) {
      await addDoc(collection(fs, "Applications"), {
        name: faker.name.findName(),
        age: Math.floor(Math.random() * 50),
        gender: genders[Math.floor(Math.random() * 2)],
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        date: faker.date.past(),
        location: faker.address.city(),
        motivation: faker.lorem.paragraph(),
        currentJob: faker.company.companyName(),
      });
    }
  };
  hej();

  //   const age = Math.floor(Math.random() * 50);

  //   function randomWholeNum() {
  //     return Math.random();
  //   }
  //   const randomName = faker.name.findName();
  //   const randomEmail = faker.internet.email();
  //  const randomPhoneNumber = faker.phone.phoneNumber();
  //  gender
  //  const date = faker.date.past();
  //   const location = faker.address.city();
  //   const motivation = faker.lorem.paragraph();
  //   const currentJob = faker.company.companyName();
  return <></>;
}
