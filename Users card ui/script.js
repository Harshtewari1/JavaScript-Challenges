var container = document.querySelector(".container")
var main = document.querySelector("body")


const profiles = [
    {
        image: "https://images.unsplash.com/photo-1743090597684-8929e6b86b74?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "codeMaster01",
        age: 24,
        description: "Frontend developer with a love for clean UI.",
        languagesKnown: ["JavaScript", "HTML", "CSS", "React"],
        oneHourCharge: "$20",
        skills: ["Web Design", "React", "TailwindCSS", "Responsive Layout"]
    },
    {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "techieTina",
        age: 27,
        description: "Passionate full-stack dev and coffee addict.",
        languagesKnown: ["JavaScript", "Python", "Java", "SQL"],
        oneHourCharge: "$30",
        skills: ["MERN Stack", "REST APIs", "Firebase", "Unit Testing"]
    },
    {
        image: "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "backendNinja",
        age: 30,
        description: "Loves building powerful backend systems.",
        languagesKnown: ["Java", "Go", "Kotlin"],
        oneHourCharge: "$35",
        skills: ["Spring Boot", "Microservices", "Docker", "Kafka"]
    },
    {
        image: "https://images.unsplash.com/photo-1573166584647-2c1366f9b219?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "dataDiva",
        age: 26,
        description: "Data scientist by day, painter by night.",
        languagesKnown: ["Python", "R", "SQL"],
        oneHourCharge: "$40",
        skills: ["Pandas", "Machine Learning", "Data Visualization", "PowerBI"]
    },
    {
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "ai_architect",
        age: 28,
        description: "AI/ML engineer turning ideas into models.",
        languagesKnown: ["Python", "C++"],
        oneHourCharge: "$45",
        skills: ["TensorFlow", "PyTorch", "Deep Learning", "OpenCV"]
    },
    {
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "uiQueen",
        age: 23,
        description: "Pixel-perfect UI designer & React lover.",
        languagesKnown: ["HTML", "CSS", "JavaScript"],
        oneHourCharge: "$25",
        skills: ["Figma", "React", "UX Design", "GSAP"]
    },
    {
        image: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "cloudGuru",
        age: 29,
        description: "Cloud engineer building scalable apps.",
        languagesKnown: ["Python", "Bash", "JavaScript"],
        oneHourCharge: "$50",
        skills: ["AWS", "Azure", "CI/CD", "Terraform"]
    },
    {
        image: "https://images.unsplash.com/photo-1573496547376-81418527a728?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "devopsDaisy",
        age: 32,
        description: "Bringing development and operations together.",
        languagesKnown: ["Python", "Go"],
        oneHourCharge: "$38",
        skills: ["Kubernetes", "Docker", "GitLab CI", "Monitoring"]
    },
    {
        image: "https://images.unsplash.com/photo-1573496358773-bdcdbd984982?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "js_junkie",
        age: 25,
        description: "Obsessed with JavaScript and building cool stuff.",
        languagesKnown: ["JavaScript", "TypeScript"],
        oneHourCharge: "$28",
        skills: ["Node.js", "Express", "React", "MongoDB"]
    },
    {
        image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "bugSquasher",
        age: 24,
        description: "QA engineer making sure everything works perfectly.",
        languagesKnown: ["Java", "Python"],
        oneHourCharge: "$22",
        skills: ["Selenium", "JUnit", "TestNG", "Manual Testing"]
    },
    {
        image: "https://images.unsplash.com/photo-1573495627094-cbfef909a47b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "iosInnovator",
        age: 31,
        description: "iOS developer crafting smooth user experiences.",
        languagesKnown: ["Swift", "Objective-C"],
        oneHourCharge: "$55",
        skills: ["SwiftUI", "Xcode", "CoreData", "UIKit"]
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "androidAce",
        age: 28,
        description: "Android developer with a passion for Kotlin.",
        languagesKnown: ["Kotlin", "Java"],
        oneHourCharge: "$42",
        skills: ["Jetpack Compose", "Room", "MVVM", "Retrofit"]
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "cyberShield",
        age: 33,
        description: "Cybersecurity expert keeping systems safe.",
        languagesKnown: ["Python", "C", "Shell"],
        oneHourCharge: "$60",
        skills: ["Penetration Testing", "Firewalls", "Wireshark", "Nmap"]
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "techTrainer",
        age: 35,
        description: "Tech trainer helping people grow in tech.",
        languagesKnown: ["JavaScript", "Java", "Python"],
        oneHourCharge: "$20",
        skills: ["Mentoring", "Workshops", "Online Courses", "Project Guidance"]
    },
    {
        image: "https://images.unsplash.com/photo-1556636530-6b7482d80e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "blockchainBro",
        age: 27,
        description: "Building the future with blockchain and crypto.",
        languagesKnown: ["Solidity", "JavaScript"],
        oneHourCharge: "$48",
        skills: ["Ethereum", "Smart Contracts", "Web3.js", "Metamask Integration"]
    }
];


function cardProfile() {
    profiles.forEach(function (elem, idx) {
        var card = document.createElement("div")
        card.className = "user-card"
        card.innerHTML = `<img src="${elem.image}" alt="" srcset="">
            <div class="card-body">
                <div class="username">${elem.username}</div>
                <div class="age">Age:${elem.age}</div>
                <div class="description">${elem.description}"</div>
                <div class="languages"><strong>Languages:</strong>${elem.languagesKnown.join(",")}</div>
                <div class="skills"><strong>Skills:</strong>${elem.skills.join(",")}</div>
                <div class="charge">Rate:${elem.oneHourCharge} /hr</div>
                <button id = ${idx} class = "contact">Contact Us</button> </div>`;
        container.appendChild(card);
    });
}
cardProfile();


