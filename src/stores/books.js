import { ref, computed } from 'vue'
import { defineStore } from 'pinia'




export const useBooksStore = defineStore('books',  {
   state: () => {
      const books = {
         0:{
      image:"/book-1.jpg",
      name: "Off-Campus:The Legacy",
      price: 2500,
      description: "A story about a girl navigating her college life and relationship",
      author: "Elle Kennedy",
      long_description:"The Legacy by Elle Kennedy is a collection of novellas that follows the lives of four beloved couples from the Off-Campus series after college. The story explores their relationships as they navigate careers, marriage, family, and new challenges. Each couple reflects on how far they have come while facing important life milestones. Themes of love, friendship, commitment, and personal growth run throughout the book. Overall, it serves as a heartfelt conclusion to the Off-Campus series, giving fans a glimpse into the characters' futures",
      genre:"romance",
      rating:"5 stars",

  },

  1:{

    image:"/book-2.jpg",
    name: "Off-Campus:The Goal",
    price: 2500,
    description: "A story about a girl navigating her college life and relationship",
    author: "Elle Kennedy",
    long_description:"The Goal by Elle Kennedy follows Sabrina James, an ambitious college student determined to attend law school and build a successful future. After a one-night encounter with hockey player John Tucker, her carefully planned life takes an unexpected turn when she faces an unplanned pregnancy. As they navigate challenges, responsibilities, and personal struggles, Sabrina and Tucker grow closer and learn to support one another. The novel explores themes of love, ambition, family, and personal growth. Ultimately, it shows how life’s unexpected changes can lead to meaningful relationships and new opportunities.",
    genre:"romance",
    rating:"5 stars",

  },

  2:{
    image:"/book-3.jpg",
    name: "Love song",
    price: 2500,
    description: "A story about a girl navigating her college life and relationship",
    author: "Elle Kennedy",
    long_description:"Love Song by Elle Kennedy follows Blake Logan, a college student who retreats to her family's lake house in Tahoe after a painful breakup. There, she unexpectedly reunites with Wyatt Graham, her childhood crush and the son of a famous hockey player. As they spend the summer together, old feelings resurface and a strong romance develops between them. However, personal struggles and a tragic event threaten to pull them apart. The novel explores love, healing, second chances, and finding your own path despite family expectations .",
    genre:"romance",
    rating:"5 stars",

  },

  3:{
    image:"/book-4.jpg",
    name: "Off-Campus:The Score",
    price: 2500,
    description: "A story about a girl navigating her college life and relationship",
    author: "Elle Kennedy",
    long_description:"Off-Campus: The Score by Elle Kennedy follows the lives of the characters from the Off-Campus series as they navigate their college years, relationships, and personal growth. The novel explores themes of love, friendship, and the challenges of young adulthood.",
    genre:"romance",
    rating:"5 stars",

  },

  4:{
    image:"/book-5.jpg",
    name: "It ends with us",
    price: 2500,
    description: "Story about a girl who falls in love with a boy who is not good for her",
    author: "Colleen Hoover",
    long_description:"It Ends with Us by Colleen Hoover follows Lily Bloom, a young woman who moves to Boston to pursue her dreams and start her own business. She falls in love with Ryle Kincaid, a successful neurosurgeon, but their relationship becomes complicated as troubling patterns emerge. When Atlas Corrigan, her first love, reappears in her life, Lily is forced to confront difficult choices about love, family, and her future. The novel explores themes of resilience, breaking cycles of abuse, and self-worth. Ultimately, it is a powerful story about finding the courage to make difficult decisions for a better future.",
    genre:"Romance",
    rating:"5 stars",

},

  5:{
    image:"/book-6.jpg",
    name: "Harry Potter and the Chamber of Secrets",
    price: 2500,
    description: "Story about a young wizard's adventures in a magical school",
    author: "J.K. Rowling",
    long_description:"Harry Potter and the Chamber of Secrets by J.K. Rowling follows Harry Potter's second year at Hogwarts School of Witchcraft and Wizardry. Harry discovers a hidden chamber within the school, faces new challenges, and uncovers dark secrets that threaten the safety of the students. The novel explores themes of bravery, friendship, and the battle between good and evil.",
    genre:"Fantasy",
    rating:"5 stars",

},
  6:{
    image:"/book-7.jpg",
    name: "Harry Potter and the Philosopher's Stone",
    price: 2500,
    description: "Story about a young wizard's first year at a magical school",
    author: "J.K. Rowling",
    long_description:"Harry Potter and the Philosopher's Stone by J.K. Rowling follows Harry Potter's first year at Hogwarts School of Witchcraft and Wizardry. Harry discovers his magical heritage, makes new friends, and faces challenges that test his courage and character. The novel explores themes of friendship, bravery, and the battle between good and evil.",
    genre:"Fantasy",
    rating:"5 stars",

},
  7:{
    image:"/book-8.jpg",
    name: "Harry Potter and the Prisoner of Azkaban",
    price: 2500,
    description: "Story about a young wizard's third year at a magical school",
    author: "J.K. Rowling",
    long_description:"Harry Potter and the Prisoner of Azkaban by J.K. Rowling follows Harry Potter's third year at Hogwarts School of Witchcraft and Wizardry. Harry faces new challenges, uncovers dark secrets, and confronts dangerous threats. The novel explores themes of friendship, bravery, and the battle between good and evil.",
    genre:"Fantasy",
    rating:"5 stars",

},
  8:{
    image:"/book-9.jpg",
    name: "Percy Jackson and the Lightning Thief", 
    price: 2500,
    description: "Story about a young demigod's adventures",
    author: "Rick Riordan",
    long_description:"Percy Jackson and the Lightning Thief by Rick Riordan follows the adventures of Percy Jackson, a young demigod who discovers his divine heritage and embarks on a quest to prevent a war among the gods. The novel explores themes of friendship, bravery, and the challenges of growing up.",
    genre:"Fantasy",
    rating:"5 stars",

},
  9:{
    image:"/book-10.jpg",
    name: "Boundless",
    price: 2500,
    description: "Story about a young woman's journey to self-discovery",
    author: "Cynthia Hand",
    long_description:"Boundless by Cynthia Hand follows the journey of a young woman as she navigates the challenges of self-discovery and personal growth. The novel explores themes of identity, resilience, and the pursuit of one's dreams.",
    genre:"Romance",
    rating:"5 stars",

},
  10:{
    image:"/book-11.jpg",
    name: "Daughter of Chaos",
    price: 2500,
    description: "Story about a young woman's journey through chaos and self-discovery",
    author: "A.S. Webb",
    long_description:"Daughter of Chaos by A.S. Webb follows the journey of a young woman as she navigates the challenges of chaos and self-discovery. The novel explores themes of identity, resilience, and personal growth.",
    genre:"Romance",
    rating:"3.5 stars",

},
  11:{
    image:"/book-12.jpg",
    name: "Diary of a Wimpy Kid: Rodrick Rules",
    price: 2500,
    description: "Story about a young boy navigating the challenges of middle school",
    author: "Jeff Kinney",
    long_description:"Diary of a Wimpy Kid: Rodrick Rules by Jeff Kinney follows the adventures of a young boy navigating the challenges of middle school. The novel explores themes of friendship, family, and the trials of growing up.",
    genre:"Comedy",
    rating:"4 stars",

},
  12:{
    image:"/book-13.jpg",
    name: "Diary of a Wimpy Kid: No Brainer",
    price: 2500,
    description: "Story about a young boy navigating the challenges of middle school",
    author: "Jeff Kinney",
    long_description:"Diary of a Wimpy Kid: No Brainer by Jeff Kinney follows the adventures of a young boy navigating the challenges of middle school. The novel explores themes of friendship, family, and the trials of growing up.",
    genre:"Comedy",
    rating:"",

},
  13:{
    image:"/book-14.jpg",
    name: "Off-Campus: The Temptation",
    price: 2500,
    description: "Story about a young woman's journey through romance and personal growth",
    author: "Elle Kennedy",
    long_description:"Off-Campus: The Temptation by Elle Kennedy follows the journey of a young woman as she navigates the challenges of romance and personal growth. The novel explores themes of love, friendship, and the pursuit of one's dreams.",
    genre:"Romance",
    rating:"",

}
}
      
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})