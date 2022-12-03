<template>
    <div class="relative bg-bg flex flex-col gap-5">
        <div class="p-10 h-96 w-screen relative cbg">
            <div class="font-bold text-center text-white text-2xl uppercase">TALK TO US</div>
            <div class="flex flex-col gap-2">
                <div class="text-white text-center font-light">
                    Want to enquire about our listing? Put up your property for sale? 
                </div>
                <div class="text-white text-center font-light">
                    Kindly fill in the form below.
                </div>
            </div>
        </div>
        <div class="login-box p-5 bg-white w-11/12 max-w-screen-lg m-auto -mt-40">
            <h2 class="font-bold text-lg">CONTACT FORM</h2>
            <form class="flex flex-col gap-2">
                <div class="flex flex-col gap-2 lg:flex-row">
                    <div class="user-box w-full lg:w-1/2 drop-shadow-lg border-2 rounded-lg pl-2">
                        <input type="text" name="" required>
                        <label>FIRST NAME</label>
                    </div>
                    <div class="user-box w-full lg:w-1/2 drop-shadow-lg border-2 rounded-lg pl-2">
                        <input type="text" name="" required>
                        <label>LAST NAME</label>
                    </div>
                </div>
                <div class="flex flex-col gap-2 lg:flex-row">
                    <div class="user-box w-full lg:w-1/2 drop-shadow-lg border-2 rounded-lg pl-2">
                        <input type="email" name="" required>
                        <label>EMAIL ADDRESS</label>
                    </div>
                    <div class="user-box w-full lg:w-1/2 drop-shadow-lg border-2 rounded-lg pl-2">
                        <input type="number" name="" required>
                        <label>PHONE NUMBER</label>
                    </div>
                </div>
                    <div class="w-full lg:w-full drop-shadow-lg border-2 rounded-lg pl-2">
                        <textarea required rows="5" class="w-full bg-transparent" placeholder="Your Message"> </textarea>
                    </div>
                <button class="w-full lg:w-1/3 px-5 py-2 bg-black border border-black text-white drop-shadow-lg rounded-lg self-center hover:drop-shadow-2xl hover:bg-white hover:text-black ease-in-out duration-300">
                    Submit
                </button>
            </form>
        </div>
        <div class="flex flex-col lg:flex-row gap-2 w-11/12 max-w-screen-lg lg:flex-row m-auto ">
            <a  href="tel:254786916498" class="bg-white p-5 w-full py-10 text-center drop-shadow-xl hover:drop-shadow-2xl flex flex-col items-center justify-center rounded-2xl">
                <div>
                    Call Us
                </div>
                <div>
                    +254-786-916-498
                </div>
            </a>
            <a  href="mailto:info@urbanridgeproperties.co.ke" class="bg-white p-5 w-full py-10 text-center drop-shadow-xl hover:drop-shadow-2xl flex flex-col items-center justify-center rounded-2xl">
                <div>
                    Email Us
                </div>
                <div>
                    info@urbanridgeproperties.co.ke
                </div>
            </a>
        </div>
        <div class="">
            <iframe class="w-screen pin" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.040741968241!2d36.80671314973464!3d-1.1312021209416483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd99518b634cb50ef!2sKwa%20Mubea%2C%20Tinganga%20Junction!5e0!3m2!1sen!2ske!4v1669927450239!5m2!1sen!2ske" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  </template>
  
  <style>
  .cbg{
    background-repeat: no-repeat;
    background-size: cover !important;
    background-position:center center !important;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(../../assets/contact.jpg);
  }
  .login-box {
  /* padding: 40px; */
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  z-index: 9999 !important;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  /* margin-bottom: 30px; */
  border: none;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 10px;
  padding: 10px 0;
  font-size: 14px;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 10px;
  font-size: 12px;
  font-weight: black;
}
.pin{
    height: 100vh;
    max-height: 700px;
}
  </style>