
const serverUrl = "https://xhuajeqb4esg.usemoralis.com:2053/server";
const appId = "EKKcMCLp0U2o6l5xCNbuvZmmjCKkyRThrBqzEj9Z";


Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Log in to youfoundme" })
       alert(user);
      console.log(user)
      console.log(user.get('ethAddress'))
     
   } catch(error) {
   	alert("Please enable the MetaMask plugin in your browser and activate your MetaMask wallet")
     console.log(error);
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

