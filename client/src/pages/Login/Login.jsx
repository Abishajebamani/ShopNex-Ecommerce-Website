import Layout from "../../components/layout/Layout";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-16 px-6">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;