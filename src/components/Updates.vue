<template>
  <table >
    
     <div>
    <button @click="refreshPage" class="styled-button">Refresh ( ကြေးတစ်ရက်ကြိုမပြပါက နှိပ်ပေးပါ )</button>
    </div>
    
    <!--  Title ခေါင်းစဥ်ပိုင်း -->

    <caption class="caption">
      01-11-2024 ( သောကြာနေ့ ) အတွက် ပေါက်ကြေး
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
          စပိန်လာလီဂါ ပွဲစဥ်များ
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
          ဂျာမန်ဘွန်ဒက်လီဂါ ပွဲစဥ်များ
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
          ပြင်သစ်လီဂူး ပွဲစဥ်များ
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
        ချန်ပီယံရှစ် ပွဲစဥ်များ
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
          ဂျာမန်ဘွန်ဒက်လီဂါ ၂ ပွဲစဥ်များ
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
          ပြင်သစ်လီဂူး ၂ ပွဲစဥ်များ
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
    Refresh  တစ်ချက်နှိပ်ပြီး ကြည့်ရှု့နိုင်ပါတယ် ။ <br>
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

        { home: "အလာဗက် =-35", odds: "( 2+15 )", away: "မာယော့ကာ " },
     
        
        
        
      ],


      // ဒုတိယလိဂ် လာမည် စီးရီးအေ

        series: [

        { home: " လေဗာကူဆင် 1-20", odds: "( 3-90 )", away: "စတုဂတ် " },
       
        
      ],

      // တတီယ လိဂ် လည်မည် စပိန်လာလီဂါ 


      spains: [

        { home: "မိုနာကို 2+35", odds: "( 3-20 )", away: "အန်ဂါး " },
        { home: "လိုင်လီ =-65 ", odds: "( 3+30 )", away: "လိုင်ယွန် " },
      
      ],


      // စတုတ္ထလိဂ်လာမည် ဂျာမန် ဘွန်ဒက်လီဂါ 


      bundes: [

        { home: "လူတန်  ", odds: "( 2-75 )", away: "ဝက်ဘရွန်း =-20 " },
        
        
        
      ],


      // ပဥ္မမ လိဂ် လာမည် ပြင်သစ်လီဂူး 

      leagues: [

        { home: " မန်းစတား", odds: "( 3+20 )", away: "ဒက်ဆဲဒေါ့ =-85" },
        { home: "SSV 1864", odds: "( 3+60 )", away: "ရှော့ကေး " },
        
        
        
        

      ],


      // ဆတ္ထမ လိဂ် လာမည် ချန်ပီယံရှစ် 

      championships: [

        { home: "အန်နန်စီ =-40", odds: "( 2-80 )", away: "Pau Fc" },
        { home: "ကလာမောင့် =-30", odds: "( 2-90 )", away: "လိုရီယန့် " },
        { home: "မာတီဂူး ", odds: "( 2-50 )", away: "ရက်စတားစိန့် =-50" },
        { home: "ပဲရစ် ", odds: "( 3+90 )", away: "ရိုဒက် " },
        { home: "ထရိုယက် =-25", odds: "( 2-40 )", away: "လာဗယ်လွိုက် " },
        { home: "ဒန်ကာကွီ =-35", odds: "( 2-40 )", away: "အန့်မိန်း " },
        
        

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
  background: #989c9b;
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
  font-size: 11pt;
  text-align: center;
  justify-content: center;
  display: flex;
  border: 1.5pt solid rgb(235, 205, 13);
  border-radius: 8px;
  background: rgb(14, 78, 76);
  padding: 5px 17px;
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
  color: rgb(248, 239, 239);
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