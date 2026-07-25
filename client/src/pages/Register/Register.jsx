import Layout from "../../components/layout/Layout";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-16 px-6">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;