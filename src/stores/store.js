import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz',{
    state: ()=> ({   
        questions: [
                {
                    question: "What's the first thing a caterpillar usually eats after it's born?",
                    answer: 1,
                    options: [
                        "Cheerios",
                        "It's own eggshell",
                        'Other bugs'
                    ],
                    selected: null
                },
                {
                    question: "The trumpeter swan—North America's largest waterfowl—weighs about how many pounds?",
                    answer: 2,
                    options: [
                        '10',
                        '5000',
                        '30'
                    ],
                    selected: null
                },
                {
                    question: "Which of the following animals is not nocturnal?",
                    answer: 1,
                    options: [
                        'Skunks',
                        'Sheep',
                        'Tigers',
                        'Leopards'
                    ],
                    selected: null
                },
                {
                    question: "Walruses can eat about how many clams in one day?",
                    answer: 1,
                    options: [
                        '10,000',
                        '5,000',
                        '16,000',
                        '12,000'
                    ],
                    selected: null
                },
                {
                    question: "What is a baby rabbit called?",
                    answer: 1,
                    options: [
                        'Doe',
                        'Kit',
                        'Buck',
                        'Hare'
                    ],
                    selected: null
                }
            ]
        })
})
