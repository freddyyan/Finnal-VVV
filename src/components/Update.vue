<template>
  <table>

      
    <!-- Refresh Webpage -->

    <div>
    <button @click="refreshPage" class="styled-button">... ကြေးတစ်ရက်ကြိုမပြပါက နှိပ်ပေးပါ ...</button>
    </div>
    

    <!--  Title ခေါင်းစဥ်ပိုင်း -->

    <caption class="caption">
      29-10-2024 ( အင်္ဂါ နေ့ ) အတွက် ပေါက်ကြေး
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
          အင်္ဂလန်လိဂ်ကပ် ပွဲစဥ်များ
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
          အီတလီစီးရီးအေ ပွဲစဥ်များ
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
          ဂျာမန်ကပ် ပွဲစဥ်များ
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
          အီတလီစီးရီးဘီ ပွဲစဥ်များ
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

      <!-- <div>
        <caption>
          ပြင်သစ်လီဂူး ပွဲစဥ်များ
        </caption>
        <div v-for="football in leagues" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div> -->


        <!-- ဆတ္ထမ လိဂ်လာမည် -->



        <!-- <div>
        <caption>
          ချန်ပီယံရှစ် ပွဲစဥ်များ
        </caption>
        <div v-for="football in championships" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div> -->

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

        { home: "ဆောက်သမ်တန် 1-40 ", odds: "( 3+30 )", away: "စတုတ်စီးတီး " },
        { home: "ဘရန့်ဖို့ 1-70", odds: "( 3+10 )", away: "ရှက်ဖီး ဝက်စ်နဒေး" },
        
        
        
      ],


      // ဒုတိယလိဂ် လာမည် စီးရီးအေ

        series: [

        { home: "ကယ်ဂလီယာရီ", odds: "( 2-50 )", away: "ဘိုလော့နာ =-25" },
        { home: "လက်ချီ =-70", odds: "( 2-65 )", away: "ဗီရိုနာ" },
        { home: "အေစီမီလန် =-40", odds: "( 3+85 )", away: "နာပိုလီ" },
        
      ],

      // တတီယ လိဂ် လည်မည် စပိန်လာလီဂါ 


      spains: [

        { home: "အော့ဘတ် 1-50", odds: "( 3-10 )", away: "ရှော့ကေး " },
        { home: "ကစ်ကာ  ", odds: "( 3+40 )", away: "ကာရှုဟာ 1+20 " },
        { home: "လိုက်ဇစ် 2+90 ", odds: "( 3= )", away: "စိန့်ပေါ်လီ " },
        { home: "စတုဂတ် 2+50", odds: "( 3-60 )", away: "ကိုင်ဇာစလော့" },
        { home: "ကိုလုံး 1+90 ", odds: "( 3-15 )", away: "ဟိုစတိန်း ကီး" },
        { home: "ရီဂျင်ဘတ် ", odds: "( 3+40 )", away: "ဂရုသာဖတ် =-60" },
        { home: "ဝုဘတ် ", odds: "( 3+15 )", away: "ဒေါ့မွန် =-90" },
        
        
        
        
      
      ],


      // စတုတ္ထလိဂ်လာမည် ဂျာမန် ဘွန်ဒက်လီဂါ 


      bundes: [

        { home: "ရက်ဂျီးနား =-30", odds: "( 2-40 )", away: "ကိုဆန်ဇာ" },
        { home: "ဘာရီ 1+90 ", odds: "( 2-50 )", away: "ကာရာရတ်စီ" },
        { home: "ဘရက်ရှား == ", odds: "( 2-45 )", away: "စပီဇာ" },
        { home: "ဂျူဗီ စတာဘီး ", odds: "( 2-40 )", away: "ဆက်စူအိုလို =-50" },
        { home: "မိုဒီနာ ==", odds: "( 2-65 )", away: "ခရီမိုနန့်" },
        { home: "ဆလာနီတာ == ", odds: "( 2-40 )", away: "စီဆီနာ " },
        
        
        
      ],


      // ပဥ္မမ လိဂ် လာမည် ပြင်သစ်လီဂူး 

      leagues: [

        { home: "လိုင်ယွန် 1-20", odds: "( 3-50 )", away: "အော်ဇေး " },
        { home: "မောင့်ပယ်လီယာ", odds: "( 3+60 )", away: "တူးလော့ =-40" },
        { home: "နိုက် စ် ", odds: "( 3+60 )", away: "မိုနာကို =-60" },
         { home: "စထရာဘော့စ် 1+90", odds: "( 3+90 )", away: "နန့်တက်" },
        { home: "မာဆေး", odds: "( 3-10 )", away: "ပီအက်ဂျီ =-100" },
        

      ],


      // စတုတ္ထလိဂ် လာမည် ချန်ပီယံရှစ် 

      championships: [

        { home: "ဘရစ္စတိုး စီးတီး ", odds: "( 3+100 )", away: "လိဒ် 1+90" },
        { home: "ကိုဗန်ထရီ -50 ", odds: "( 3+80 )", away: "လူတန်တောင်း" },
        { home: "ဝက်ဖို့ -30 ", odds: "( 3+65 )", away: "ဘလက်ဘန်း" },
        { home: "ဘန်လေ 1+40 ", odds: "( 2-50 )", away: "ကျူပီအာ" },
        { home: "ဒါဘီ -40 ", odds: "( 2-100 )", away: "ဟူး စီးတီး" },
        { home: "ပလိုင်းမောက် ", odds: "( 3+90 )", away: "ပရက်စတန် -15" },
        { home: "ရှက်ဖီးယူနိက်တက် 1+50 ", odds: "( 2-90 )", away: "စတုတ်စီးတီး" },
        { home: "ဆန်းဒါးလန်း 1+5 ", odds: "( 3+70 )", away: "အောက်ဖို့ ယူနိုက်တက်" },
        { home: "ဆွမ်ဆီး -30 ", odds: "( 2-30 )", away: "မီဝေါ " },
        { home: "ဝက်ဘရွန်း 1+50 ", odds: "( 2-70 )", away: "ကာဒစ် " },
        
        

      ],
      

      // အပိတ် နောက်ဆုံးအပိုင်း 
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
  font-size: 15px;
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
  font-size: 9pt;
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
  font-size: 14px;
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