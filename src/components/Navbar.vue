<template>
  <div class="contener">
    <div class="group">
      <p class="text">
        ဟိတ် ! ဟိတ် !... သိပြီးပြီလား ? နိုင်ရင် နှစ်ခု ရပြီး ရှုံးရင် အပြည့်မရှုံး တော့ဘူးဆိုတာ..!
        ဟုတ်ပါတယ်. ဘာလို့လဲဆိုတော့ Triple-V မှာ ( 555MIX - SPORTS899 ) အကောင့်ဖွင့်ပြီး မောင်းကစားသူများအတွက် 
        မောင်း ကော်မရှင်ဘောနက် 8 ရာခိုင်နှုန်းထိ ပြန်လည်ပေးနေတာကြောင့်ပါ ။ 
        မောင်းကဒ် - 10000 ကဒ်ဆို 800  ၊ 5000 ကဒ်ဆို 400 ၊ အကောင့်ထဲ ပြန်လည်ထည့်ပေးပါတယ် ။ နိုင်ရင် အနိုင်ငွေ ဘောနက် နှစ်ခု ရပြီး ရှုံးရင် အပြည့်မရှုံး တော့ဘူးနော် ။
        မောင်းအဆကို 100 ထိပဲ ကစားလို့ရမယ့် စည်းကမ်းချက်လေးရှိနေပါတယ်နော် ။ 
        မိတ်ဆွေက မောင်း အဆ မကန့်ပဲ 11 သင်းထိ အဆ အများကြီးကစားချင်တယ်ဆိုလည်း ကော်မရှင် ဘောနက် နည်းပြီး အဆင်ပြေအာင် ဆောင်ရွက်ပေးနေပါတယ်နော် ။ 
        ကစားသူများ အဆင်ပြေပြီး စိတ်ချမ်းသာနေဖို့သာ အဓိကပါ ။ 
        မိတ်ဆွေက မောင်း အသင်းနည်းနည်း ကစားတက်သူဆို ရွေးချယ်သင့်ပါတယ် ။ 
        စိတ်ဝင်စားလို့ ဆက်သွယ်လိုပါက Viber and Telegram - ( 09 956 113 143 ) ကိုဆက်သွယ်နိုင်ပါတယ်ခင်ဗျ ။ 
        ငွေသွင်း ငွေထုတ်အတွက်ကိုလည်း နိုင်ငံခြားမှ မိတ်ဆွေများအတွက်ပါ အဆင်ပြေအောင် ဆောင်ရွက်ပေးနေပါတယ် ။ 
        5000 ကျပ်မှစပြီး လေ့လာ စမ်းသပ်ကြည့်ပါမိတ်ဆွေ အကောင်းဆုံးသော ရွေးချယ်မှုဖြစ်ကြောင်း ကိုယ်တိုင် တွေ့ရပါမယ်နော် ။ အွန်လိုင်းမှာ
        အလိမ်အညာတွေများနေတာမို့ ကစားတက်သူ မိတ်ဆွေများ အကောင်းဆုံးသော အေးဂျင့်များမှာ အဆင်ပြေစွာ ဆော့ကစားနိုင်ကြပါနော်။     
      </p>
    </div>
  </div>
  <header>
    <router-link to="/livechat" class="styled-button">LiveChat</router-link>
    <router-link to="/" class="styled-button" > Updates </router-link>
    <router-link to="/footballs" class="styled-button">Footballs</router-link>
  </header>
</template>

<script>
export default {
 
};
</script>

<style >
header {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  padding: 5px 2px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 5px;
  margin: 5px auto;
}

header a {
  color: #eeeef5;
  text-decoration: none;
  margin: auto;
  font-weight: bold;
  font-size: 15px;
}
header a.router-link-active {
  color: #0004ff;
  font-weight: bold;
}
.group {
  background: linear-gradient(135deg, #202430, #000000);
  position: relative;
  height: 30px;
  margin: 8px auto;
  overflow: hidden;
  background-color: rgb(12, 12, 18);
  border-bottom: 2px solid rgb(5, 9, 245);
  border-top: 2px solid rgb(4, 8, 221);
  font-weight: bold;
}
.group .text {
  position: absolute;
  margin: 4px;
  width: max-content;
  color: #fbe80e;
  font-weight:bold;
  animation: RightToleft 90s infinite linear;
  font-size: 13px;
}

@keyframes RightToleft {
  from {
    transform: translate(10%);
  }
  to {
    transform: translate(-100%);
  }
}


.styled-button {
  background: linear-gradient(135deg, #4771fa, #9b4cfc);
  border: none;
  color: rgb(255, 253, 253);
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  font-weight: bold;
}

.styled-button:hover {
  background: linear-gradient(135deg, #c299f5, #6e8efb);
  transform: translateY(-2px);
}

.styled-button:active {
  transform: translateY(1px);
}

</style>