<template>

<table>
  <router-link to="/twoam"  class="styled-button">
    <p> 2D ( 12-01 ) 
    </p>
  </router-link>


  <router-link to="/twopm"  class="styled-button">
    <p> 2D ( 4-30 ) 
    </p>
  </router-link>

  <router-link to="/twocalender" class="styled-button">
    <p> 2D ( 12-01 & 4-30 )
    </p>
  </router-link>

  <router-link to="/threecalender"  class="styled-button">
    <p> 3D ( 2014 - 2024 ) 
    </p>
  </router-link>

</table>


  <!-- တိုက်ရိုက် လွှင့်မည့် အပိုင်းလာမည် ။ -->

    <div class="styled-button">
        <a href="https://yalla-lives.io/"> ဘောလုံးပွဲလိဂ် အစုံ တိုက်ရိုက်ကြည့်ရန် နှိပ်ပါ ။ </a>
    </div>


  <!-- ကြော်ငြာပိုင်းလာမည် 1 -->

  <h5>
    555MIX - ( 1 Unit - 1 Ks ) <br> 
    SPORTS899 - ( 1 Unit - 1 Ks ) <br>
    IBET789 - ( 1 Unit - 1000 Ks ) <br>
    2D - 85Z <br>
    3D - 600Z
  </h5>


  <!-- ကြော်ငြာပိုင်းလာမည် 2 -->
  
  <h6>
    အကောင့်ဖွင့် မောင်းကစား ဘောနက် 8 ရာခိုင်နှုန်း ပြန်လည်ပေးပါတယ် ။ <br>
    မောင်းကဒ် 10000 ကဒ်ဆို 800 ၊ 5000 ကဒ်ဆို 400 ပြန်လည်ရရှိမှာဖြစ်ပါတယ် ။<br>
    မောင်းအဆ 100 ထိသာ ကန့်သတ်ထားပါတယ် ။ <br> နိုင်ရင် နှစ်ခုရ သလို ရှုံးမယ်ဆိုရင်တောင် အပြည့်မရှုံးတော့ပါနော် ။ <br>
    ဆ အကန့်မရှိပဲ ကစားလိုပါက မောင်းဘောနက် 3 ရာခိုင်နှုန်း ။
    <br>
    2D ( 85ဆ ) နှင့် 3D ( 600ဆ ) Viber မှ တင်ရပါမယ် ။<br>
    ၃ မိနစ်အတွင်း အမြန်ဆုံး အကောင်းဆုံး ဝန်ဆောင်မှုအတွက် <br> <br>

     Viber & Telegram & Hotline <br> <br>

    တို့ကို တစ်ချက်နှိပ်ပြီး ဆက်သွယ်နိုင်ပါကြောင်း ။ <br>
  </h6>
  


  <!-- အပိတ်ပိုင်း -->
  <footer >
    <a href="viber://chat/?number=959956113143" class="styled-footer">Viber</a>
    <a href="http://t.me/tripleVagent" class="styled-footer">Telegram</a>
    <a href="tel:09956113143" class="styled-footer">Hotline</a>
  </footer>
  
</template>

<script>
export default {
 
};



</script>

<style scoped>


table {
  display: grid;
  justify-content: space-around;
  background-color: transparent;
  gap: 0.7rem;
  margin: 15px auto;
}

@media (min-width: 300px) {
  table {
    grid-template-columns: repeat(2, 1fr);
  }
}


h5{
  max-width: 1200px;
  color: rgb(0, 0, 0);
  border-radius: 10px;
  background: linear-gradient(135deg, #a3a3b8, #ffffff);
  font-size: 0.9rem;
  text-align: left;
  justify-content: center;
  line-height: 23px;
  padding: 3px;
  padding-left: 20px;
  margin: 10px auto;
}

h6{
  max-width: 1200px;
  font-size: 10.5px;
  font-weight: bold;
  color: rgb(3, 3, 3);
  background: linear-gradient(135deg, #a7a7b8, #ffffff);
  text-align: left;
  padding: 5px;
  padding-left: 15px;
  border-radius: 10px;
  line-height: 17px;
  margin: 10px auto;
}
footer {
  display: flex;
  justify-content: space-around;
  background-color: transparent;
}
a {
  text-decoration: none;
  border-radius: 5px;
  color: rgb(255, 255, 255);
}

.styled-button {
  background: linear-gradient(135deg, #4771fa, #9b4cfc);
  border: none;
  text-align: center;
  text-decoration: none;
  border-radius: 35px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  font-weight: bold;
  color: rgb(244, 248, 0);
  font-weight: bold;
  padding: 7px 15px;
  font-size: 0.9rem;

}

.styled-button:hover {
  background: linear-gradient(135deg, #c299f5, #6e8efb);
  transform: translateY(-3px);
}

.styled-button:active {
  transform: translateY(2px);
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
}

.styled-footer:hover {
  background: linear-gradient(135deg, #a777e3, #6e8efb);
  transform: translateY(-3px);
}

.styled-footer:active {
  transform: translateY(2px);
}
</style>