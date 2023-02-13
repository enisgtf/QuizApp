<template>
  <div class="big-container">

    <h1>QuizApp</h1>

    <!-- START -->
    <div class="container">
      <div class="start-game" v-if="startGame">
        <h2>Hi! Do you want to play my Quiz Game?</h2>
        <button @click="gameStarter" class="active">Let's Start</button>
      </div>

      <!-- GAME -->
      <div class="game" v-if="onGame">
        <div class="question-info">
          <p>{{currentQuestion+1 + "/"+ questions.length}}</p>
          <h2>{{questions[currentQuestion].question}}</h2>
        </div>
        <div class="options">
          <label 
          :for="index" 
          v-for="(option, index) in getCurrentQuestion.options" 
          :key="index"
          :class="`${ getCurrentQuestion.selected === index ? index === getCurrentQuestion.answer ? 'correct' : 'wrong' : getCurrentQuestion.selected === null ? '' : 'disabled'}`"
          >
            <input 
            :id="index" 
            type="radio" 
            :disabled = "getCurrentQuestion.selected !== null"
            @click="getAnswer(index)"
            >{{ option }}
          </label>
        
        </div>
        <button :class="getCurrentQuestion.selected === null ? 'disabled' : 'active'" 
        @click="nextQuestion" :disabled="getCurrentQuestion.selected === null"
        > {{ getCurrentQuestion.selected === null ? 'Select An Option' : currentQuestion === questions.length-1 ? 'Finish' : 'Next Question' }}</button>
      </div>
      
      <!-- FINAL -->
      <div class="container" v-if="endGame">
        <div class="final-game">
          <h2>You finished the game!</h2>
          <h2>Your score is : {{ gameScore }}/{{ questions.length }}</h2>
          <button class="active" @click="playAgain">Play Again</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from "./stores/store.js"
import { storeToRefs } from "pinia";
import { ref, computed } from 'vue';

const store = useQuizStore()
const { questions } = storeToRefs(store)


/* VARIABLES */
const startGame = ref(true)
const onGame = ref(false)
const endGame = ref(false)
const currentQuestion = ref(0)
const gameScore = ref(0)

/* COMPUTED */
const getCurrentQuestion = computed(()=>{
  let question = questions.value[currentQuestion.value]
  return question
})


/* FUNCTIONS */
const gameStarter = () => {
  startGame.value = false
  onGame.value = true
}
const nextQuestion= ()=> {
  if(currentQuestion.value+1 < questions.value.length) {
    currentQuestion.value++
  }else{
    gameEnder()
  }
}
const gameEnder = () => {
  onGame.value = false
  endGame.value = true
}

function getAnswer(answer_id){ 
  getCurrentQuestion.value.selected = answer_id
  if(getCurrentQuestion.value.selected === getCurrentQuestion.value.answer){
    gameScore.value++
  }
}

function playAgain(){
  questions.value.forEach(question => {
    question.selected = null
  })
  currentQuestion.value = 0
  gameScore.value = 0

  onGame.value = true
  endGame.value = false
}



</script>


<style scoped>

</style>
