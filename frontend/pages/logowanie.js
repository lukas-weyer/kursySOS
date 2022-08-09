import Layout from "../components/Layout";
import PageTransition from "../components/PageTransition";
import SignIn from "../components/SignIn";

export default function SignInPage() {
  return (
    <PageTransition>
      <SignIn />
    </PageTransition>
  );
}

SignInPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
