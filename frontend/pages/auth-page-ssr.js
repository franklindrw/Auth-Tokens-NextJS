import { withSession } from '../src/services/auth/session';
import { useRouter } from 'next/router';
import { tokenService } from "../src/services/auth/tokenService";

export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.session,
    }
  }
});

// export async function getServerSideProps(ctx) {
//   try{
//     const session = await authService.getSession(ctx);
//     console.log(session)
//     return {
//         props: {
//           session,
//         },
//       };
//   } catch (err) {
//     return {
//       redirect: {
//         destination: '/?error=401',
//         permanent: false,
//       },
//     };
//   }
// };

export default function AuthPageSSR(props){
  const router = useRouter();

  const logout = () => {
    tokenService.delete();
    router.push('/');
  };
  
    return (
        <div>
        <h1>The Auth Page - Server Side</h1>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
        <button onClick={logout}>Sair</button>
        </div>
    )
}