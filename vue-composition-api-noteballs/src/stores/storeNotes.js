// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
     notes: [
      {
        id: 'id1',
        content: 'l Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque tenetur, porro soluta tempora excepturi odio. Placeat, ipsa fuga. Et voluptates inventore nostrum ratione porro molestiae quas maxime suscipit numquam.'
      },
      {
        id: 'id2',
        content: 'l am short note.'
      },
     ]
    }
  },

})