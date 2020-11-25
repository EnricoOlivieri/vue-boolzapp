
const ricevuto = 'received';
const inviato = 'sent';

const boolzapp = new Vue ({
  el: '#root',
  data: {
  user: {
    avatar: "img/avatar_io.jpg",
    nameUser: 'Enrico'
  },

  contactList: [
  {
    name:"Michele",
    imgSrc:"img/avatar_1.jpg",
    lastAccess:"",
    messages:[

      {
        state:"sent",
        textContent:"ciao come stai?",
        date: "Lun 23 Nov 10:30",

      },

      {
        state:"received",
        textContent:"bene e tu?",
        date:"Lun 23 Nov 10:31",

      },
      {
        state:"sent",
        textContent:"bene, usciamo?",
        date:"Lun 23 Nov 10:32",

      },
      {
        state:"received",
        textContent:"va bene",
        date:"Lun 23 Nov 10:33",

      },],
  },

  {
    name:"Fabio",
    imgSrc:"img/avatar_2.jpg",
    lastAccess:"",
    messages:[

      {
      state:"sent",
      textContent:"ciao",
      date:"Lun 23 Nov 10:35",

    },

    {
      state:"received",
      textContent:"hei come va?",
      date:"Lun 23 Nov 10:36",

    },
    {
      state:"sent",
      textContent:"non molto bene",
      date:"Lun 23 Nov 10:37",

    },
    {
      state:"received",
      textContent:"perchè?",
      date:"Lun 23 Nov 10:38",

    },],
  },

  {
    name:"Samuele",
    imgSrc:"img/avatar_3.jpg",
    lastAccess:"",
    messages:[

      {
      state:"sent",
      textContent:"come ti vesti oggi?",
      date:"Lun 23 Nov 11:00",

    },

    {
      state:"received",
      textContent:"jeans e camicia e tu?",
      date:"Lun 23 Nov 11:01",

    },
    {
      state:"sent",
      textContent:"anche io ma fa freddo",
      date:"Lun 23 Nov 11:02",

    },
    {
      state:"received",
      textContent:"metti il giubotto",
      date:"Lun 23 Nov 11:03",

    },],
  },

  {
    name:"Luisa",
    imgSrc:"img/avatar_4.jpg",
    lastAccess:"",
    messages:[

   {
      state:"sent",
      textContent:"ciao sei uscita?",
      date:"Lun 23 Nov 11:30",

    },

    {
      state:"received",
      textContent:"no, mi sto facendo la barba",
      date:"Lun 23 Nov 11:31",

    },
    {
      state:"sent",
      textContent:"era ora finalmente",
      date:"Lun 23 Nov 11:32",

    },
    {
      state:"received",
      textContent:"eh già",
      date:"Lun 23 Nov 11:33",

    },],
  }
],

userChatIndex: 0,
    messaggioInput:'',
    messaggioCPU: 'Ciao',
},

  methods: {
    openChat: function(index) {
      this.userChatIndex= index;
    },
    submit: function() {
      this.messaggioInput += '';
      console.log(this.messaggioInput);
      this.contactList[this.userChatIndex].messages.push({"textContent": this.messaggioInput, "state": "sent", "date": "24/11/2020 12:00"});
      console.log(this.contactList[this.userChatIndex].messages.testo);

      setTimeout(()=>{
      this.contactList[this.userChatIndex].messages.push({"textContent": this.messaggioCPU, "state": "ricevuto", "date": "24/11/2020 12:00"})
      },3000);



      this.messaggioInput ='';
      console.log(this.messaggioInput);

    }
  }
})
