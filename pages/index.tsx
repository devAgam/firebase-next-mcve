import { firebaseClient } from "../firebaseClient";

const loginWithApple = async () => {
  var provider = new firebaseClient.auth.OAuthProvider("apple.com");
  provider.addScope("email");
  provider.addScope("name");
  provider.setCustomParameters({
    locale: "en",
  });
  await firebaseClient
    .auth()
    .signInWithPopup(provider)
    .then(async (result) => {})
    .catch((error) => {
      alert(error.message);
    });
};

export default function Home() {
  return (
    <div>
      <button onClick={loginWithApple}>login with apple</button>
    </div>
  );
}
