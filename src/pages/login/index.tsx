import { NextPageWithLayout } from '../_app';
import { Layout } from '@/components/features/login/layout';
import Button from '@/components/common-ui/button';
import { useSession } from '@/context/session-context';

const Login: NextPageWithLayout = () => {
  const { login } = useSession();

  return (
    <Layout>
      <Button size="L" variant="contained" onClick={() => login()}>
        Github으로 로그인
      </Button>
    </Layout>
  );
};

export default Login;
