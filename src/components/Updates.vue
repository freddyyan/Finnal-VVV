<template>
  <table >
    
     <div>
    <button @click="refreshPage" class="styled-button">Refresh ( ကြေးတစ်ရက်ကြိုမပြပါက နှိပ်ပေးပါ )</button>
    </div>
    
    <!--  Title ခေါင်းစဥ်ပိုင်း -->

    <caption class="caption">
      31-10-2024 ( ကြာသပတေး နေ့ ) အတွက် ပေါက်ကြေး
    </caption>
    <tr class="cards" >
      <th>Home <br>( အိမ်ရှင် )</th>
      <th id="helo"> Over/Under <br>( ဂိုးပေါင်း )</th>
      <th>Away <br>( အဝေးကွင်း )</th>
    </tr>

    <!--  အောက်ပိုင်း အသင်း နာမည် နှင့် ကြေးများသာ သက်ဆိုင်သည် ။ -->

    <!--   ပထမ လိဂ် စလာမည်  -->

    <div>
      <div>
        <caption>
          အီတလီစီးရီးအေ ပွဲစဥ်များ
        </caption>
        <div v-for="football in premiers" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

      <!-- ဒုတိယ လိဂ် လာမည်  -->

      <div>
        <caption>
          ဆွစ်ဇာလန် စူပါလိဂ် ပွဲစဥ်များ
        </caption>
        <div v-for="football in series" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

      <!-- တတိယ လိဂ် လာမည်  -->

      <div>
        <caption>
          ဆော်ဒီအာရေးဗျ ပရိုလိဂ် ပွဲစဥ်များ
        </caption>
        <div v-for="football in spains" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

      <!-- စတုတ္ထ လိဂ် လာမည် -->

      <div>
        <caption>
        ကာတာလိဂ် ပွဲစဥ်များ
        </caption>
        <div v-for="football in bundes" :key="football">
          <tr class="cards"> 
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

       <!-- ပဥ္စမ လိဂ် လာမည်  -->

      <div>
        <caption>
          အီဂျစ် ပွဲစဥ်များ
        </caption>
        <div v-for="football in leagues" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>


        <!-- ဆတ္ထမ လိဂ်လာမည် -->



        <div>
        <caption>
          ပေါ်တူဂီ ကပ် ပွဲစဥ်များ
        </caption>
        <div v-for="football in championships" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

      <!--  လိဂ် ၆ လိဂ် အဆုံး  -->

    </div>
      
    <!--  စာပိုဒ်လာမည်  -->


  <h6 class="styled-update">
    ညစဥ် ( 10-00 ) အချိန် ပေါက်ကြေး တစ်ရက် ကြိုတင်ပါတယ် ။ <br>
    Refresh Update တစ်ချက်နှိပ်ပြီး ကြည့်ရှု့နိုင်ပါတယ် ။ <br>
    Livechat စာတက်ရန် အချိန်ခန စောင့်ပေးပါနော် ။
  </h6>

  <h6>
    မိတ်ဆွေရဲ့ ရဲရင့် စိတ်ချစွာ ရွေးချယ်ခြင်းအတွက် <br>
    5000 ကျပ်မှ စပြီး စမ်းသပ်လေ့လာနိုင်ပါတယ် ။ <br>
    ၃ မိနစ်အတွင်း အမြန်ဆုံး အကောင်းဆုံး ဝန်ဆောင်မှုအတွက် <br>
    Viber & Telegram & Hotline တို့မှ ဆက်သွယ်နိုင်ပါကြောင်း ။ 
  </h6>

  

  <footer >
    <a href="viber://chat/?number=959956113143" class="styled-footer">Viber</a>
    <a href="http://t.me/tripleVagent" class="styled-footer">Telegram</a>
    <a href="tel:09956113143" class="styled-footer">Hotline</a>
  </footer>


  </table>
</template>

<script>
export default {
  data() {
    return {


      // ပထမ လိဂ် လာမည် ပရီးမီးယားလိဂ် 


      premiers: [

        { home: "ဂျီနိုအာ ", odds: "( 2-90 )", away: " ဖီအိုရင်တီးနား 1+80" },
        { home: "ကိုမို ", odds: "( 2-100 )", away: "လာဇီယို =-30 " },
        { home: "ရိုးမား 1+60", odds: "( 2-95 )", away: " တိုရီနို" },
     
        
        
        
      ],


      // ဒုတိယလိဂ် လာမည် စီးရီးအေ

        series: [

        { home: " ဂရပ်ဟော့ပါး", odds: "( 3+60 )", away: "လူဂါနို =-65 " },
        { home: "ဆာဗက်တီ =-100 ", odds: "( 3= )", away: "လူဇန် " },
       
        
      ],

      // တတီယ လိဂ် လည်မည် စပိန်လာလီဂါ 


      spains: [

        { home: "Al ရီယက် 1-10 ", odds: "( 3+60 )", away: "Al ဝက်ဒါ" },
        { home: "Al ခိုလု =-50", odds: "( 2-85 )", away: "Al အိုရိုဘတ်  " },
        { home: "Al အီတီဟတ် =-40 ", odds: "( 3-50 )", away: "Al အက်လီ " },
      
      ],


      // စတုတ္ထလိဂ်လာမည် ဂျာမန် ဘွန်ဒက်လီဂါ 


      bundes: [

        { home: "Al ဒိုဟာ =-100 ", odds: "( 3-70 )", away: "ရေယံ " },
        { home: "ဂါရာဖာ SC 1+85", odds: "( 3-100 )", away: "အာရာဘီ ဒိုဟာ " },
        { home: "ကေဟာ ", odds: "( 3+30 )", away: "ကာတာ SC " },
        
        
        
      ],


      // ပဥ္မမ လိဂ် လာမည် ပြင်သစ်လီဂူး 

      leagues: [

        { home: "ဂူနာ ", odds: "( 2-40 )", away: "ZED FC =-90" },
        { home: "M စပေါ့လ် =-70 ", odds: "( 2+15 )", away: " ENPPI" },
        { home: "ဂူနာ ", odds: "( 2-40 )", away: "ZED FC =-90" },
        
        
        
        

      ],


      // ဆတ္ထမ လိဂ် လာမည် ချန်ပီယံရှစ် 

      championships: [

        { home: "ဘရာဂါ =-55 ", odds: "( 2-75 )", away: "ဂူမာရေး " },
        { home: "ပေါ်တို 2+90 ", odds: "( 3+45 )", away: "မိုရီရန်စီ " },
        
        

      ],
      

      // အပိတ် နောက်ဆုံးအပိုင်း 
      footballupdates: [

        { home: " ", odds: "(  )", away: " " },
        { home: " ", odds: "(  )", away: " " },
        
        
        ],
        

    };
  },
  methods: {
    refreshPage() {
      // Refresh the website
      window.location.reload();
    }
  }

  
};


</script>

<style scoped>
table {
  background: #c4bbbb;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 2px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 87vh;
  overflow: scroll;
}
caption {
  border: 1px solid rgb(0, 0, 0);
  margin-top: 15px;
  margin-bottom: 4px;
  font-weight: 900;
  color: white;
  font-size: 14.5px;
  text-align: center;
  justify-content: center;
  display: flex;
  border: 1.5pt solid rgb(235, 205, 13);
  border-radius: 8px;
  background: rgb(14, 78, 76);
  padding: 5px 25px;
}

tr {
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  background-color: black;
  border: 1px solid rgb(190, 180, 180);
}

th {
  font-size: 8.5pt;
  border-radius: 5px;
  color: rgb(253, 253, 253);
  font-weight: bold;
  padding: 3px 1px;
}


.home{
  padding-left: 5px;
}
.odd{
  padding: 5px;
}

.cards {
  max-width: 1200px;
  margin: 2px auto;
  display: grid;
  gap: 1rem;
  background-color:rgb(5, 4, 4);
  border-radius: 10px;
  text-align: center;
  padding: 5px 1px;
  border: 1px solid rgb(252, 253, 253);
}

#helo{
  padding: 5px 23px;
}

@media (min-width: 300px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.matches {
  max-width: 1200px;
  display: grid;
  background-color:rgb(14, 6, 6);
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgb(252, 253, 253);
  font-size: 1rem;
  padding: 4px 5px;
  gap: 0.3rem;
}
@media (min-width: 300px) {
  .matches {
    grid-template-columns: repeat(1, 1fr);
  }
}
h6{
  color: rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgb(191, 243, 243);
  text-align: center;
  justify-content: center;
  padding: 5px 30px;
  margin: 10px auto;
  font-size: 11px;
}
footer {
  display: flex;
  justify-content: space-between;
  background-color: transparent;
}
a {
  text-decoration: none;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-weight: 800;
}

.styled-button {
  background: linear-gradient(135deg, #4771fa, #9b4cfc);
  border: none;
  color: rgb(255, 253, 253);
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  font-weight: bold;
  margin-top: 7.5px;
}

.styled-button:hover {
  background: linear-gradient(135deg, #c299f5, #6e8efb);
  transform: translateY(-2px);
}

.styled-button:active {
  transform: translateY(1px);
}


.styled-update {
  background: linear-gradient(135deg, #4771fa, #9b4cfc);
  border: none;
  color: rgb(255, 255, 255);
  font-size: 11px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 20px;
}


.styled-footer {
  background: linear-gradient(135deg, #4771fa, #9b4cfc);
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  font-weight: bold;
  margin:5px 10px;
}

.styled-footer:hover {
  background: linear-gradient(135deg, #a777e3, #6e8efb);
  transform: translateY(-3px);
}

.styled-footer:active {
  transform: translateY(2px);
}
</style>