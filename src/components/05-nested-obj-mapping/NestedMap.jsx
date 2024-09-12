import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../00-card/Card.css";
import "./NestedMap.css"
// custom codes
const users = [
    {
      id: uuidv4(),
      fullName: "Al Amin Khan",
      age: 38,
      phones: [
        { home: "01777-163042" },
        { office: "01717-401155" },
        { travel: "01917-594105" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Ruhul Amin Khan",
      age: 34,
      phones: [
        { home: "01716-524564" },
        { office: "01629-451546" },
        { travel: "01910-594845" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Sabbir Rahman",
      age: 29,
      phones: [
        { home: "01721-512345" },
        { office: "01731-521245" },
        { travel: "01911-512345" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Mahmudul Hasan",
      age: 42,
      phones: [
        { home: "01714-543210" },
        { office: "01724-543245" },
        { travel: "01914-543210" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Fatima Begum",
      age: 36,
      phones: [
        { home: "01712-987654" },
        { office: "01722-987456" },
        { travel: "01912-987654" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Sakib Al Hasan",
      age: 28,
      phones: [
        { home: "01713-654321" },
        { office: "01723-654125" },
        { travel: "01913-654321" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Afroza Rahman",
      age: 40,
      phones: [
        { home: "01715-741852" },
        { office: "01725-741852" },
        { travel: "01915-741852" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Mohammed Zia",
      age: 33,
      phones: [
        { home: "01719-963852" },
        { office: "01729-963752" },
        { travel: "01919-963852" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Tariqul Islam",
      age: 45,
      phones: [
        { home: "01711-951753" },
        { office: "01721-951853" },
        { travel: "01911-951753" },
      ],
    },
    {
      id: uuidv4(),
      fullName: "Shakila Banu",
      age: 39,
      phones: [
        { home: "01718-753159" },
        { office: "01728-753459" },
        { travel: "01918-753159" },
      ],
    }
  ];

function NestedMap() {
  return (
    <div>
      {users && users.map((user) => {
        const {id, fullName, age, phones} = user;
        return <div className="card text-left" key={id}>
            <h2>Name: {fullName}</h2>
            <p>Age: {age}</p>
            <p><strong>Contact Numbers:</strong> </p>
            {phones && phones.map((phone, index) => {
                const {home, office, travel} = phone;
                return <div className="person-phones" key={index}>
                    {home && <p>Home: {home}</p>}
                    {office && <p>Office: {office}</p>}
                    {travel && <p>Travel: {travel}</p>}
                </div>
            })}
        </div>
      })}
    </div>
  );
}

export default NestedMap;

// className="person-phones"
// className="card text-left"

